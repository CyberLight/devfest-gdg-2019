const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const viewport = [1920, 1080];
const Promise = require('bluebird');
const app = require('../index');
const settings = require('../settings');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const expect = require('expect');
const colors = require('colors');

const pages = new Set();

async function startBrowser() {
    const browser = await puppeteer.launch({
        args: [
            `--window-size=${viewport}`,
            '--remote-debugging-address=0.0.0.0',
            '--remote-debugging-port=9222',
            '--no-sandbox', 
            '--disable-setuid-sandbox'
        ],
        executablePath: 'google-chrome-stable',
        headless: true,
        handleSIGINT: true,
        slowMo: 0,
        dumpio: false
    });

    await browser.newPage();
    return browser;
}

async function createPage(browser) {
    const page = await browser.newPage();
    page.setViewport({
        width: viewport[0],
        height: viewport[1],
        deviceScaleFactor: 1,
    });
    pages.add(page);
    return page;
}

async function clearPages() {
    for await (let page of pages.values()) {
        try {
            await page.close();
        } catch(e) {}
    }
}

async function getScreenshotFromPage(page, clip) {
    const scrn = await page.screenshot({ clip });
    return PNG.sync.read(scrn);
}

function savePngObjSync(pngObj, artifactPath) {
    fs.writeFileSync(artifactPath, PNG.sync.write(pngObj));
}

function getArtifactSync(artifactPath) {
    return PNG.sync.read(fs.readFileSync(artifactPath));
}

async function runTests(folderPath) {
    await app.open(9001);
    const browser = await startBrowser();
    const allTestFiles = fs.readdirSync(folderPath).filter(f => f.match(/.*\.test\.js$/));
    let testsPassed = 0;
    let error;
    try {
        await Promise.mapSeries(allTestFiles, async (testFile) => {
            const tests = require(path.join(process.cwd(), 'tests', testFile));
            console.warn(colors.yellow('\nScenario:'), colors.white(testFile));
            await Promise.mapSeries(Object.values(tests), async (t) => {
                const page = await createPage(browser);
                const clip = { x: 0, y: 0, width: 240, height: 240 };
                const appUrl = `http://${settings.hostname}:${settings.port}`;
                const artifactPath = step => path.join(process.cwd(), 'tests', 'artifacts', `${t.name}_${step}.png`);
                const artifactDiffPath = path.join(process.cwd(), 'tests', 'errors', `${t.name}_diff.png`);
                const artifactActualPath = path.join(process.cwd(), 'tests', 'errors', `${t.name}_actual.png`);
                const diffPngObj = new PNG({ width: clip.width, height: clip.height });
                await page.goto(appUrl);

                const params = {
                    page,
                    diff: diffPngObj,
                    async checkScreenshots(diff, step = 1) {
                        const actualScrn = await getScreenshotFromPage(page, clip);
                        const path = artifactPath(step);
                        if (!fs.existsSync(path)) savePngObjSync(actualScrn, path);
                        const expectedScrn = getArtifactSync(path);
                        expect(pixelmatch(
                            expectedScrn.data,
                            actualScrn.data,
                            diff.data,
                            clip.width,
                            clip.height,
                            { threshold: 0 }
                        )).toEqual(0);
                    },
                    getCoordsByRowCol(row, col) {
                        const CellWH = 30,
                            HalfCellWH = 15;
                        return [col * CellWH - HalfCellWH, row * CellWH - HalfCellWH];
                    }
                };

                try {
                    process.stdout.write(colors.yellow(`-> ${t.name}`));
                    await t(params);
                    process.stdout.write(colors.green(`\r\u2713 ${t.name.padEnd(80, ' ')}\n`));
                    testsPassed += 1; 
                } catch (e) {
                    savePngObjSync(diffPngObj, artifactDiffPath);
                    const actualScrn = await getScreenshotFromPage(page, clip);
                    savePngObjSync(actualScrn, artifactActualPath);
                    process.stdout.write(colors.red(`\rX ${t.name.padEnd(80, ' ')}\n`));
                    throw e;
                } finally {
                    clearPages();
                }
            });
        });
    } catch (e) {
        error = e;
    }
    console.log(`\n${new Array(40).fill('_').join('')}`);
    console.log(colors.green('TESTS PASSED:'), colors.bold.green(` ${testsPassed} `));
    console.log(colors.red('TESTS FAILED:'), colors.bold.red(` ${error ? 1 : 0} `));
    if (error) {
        console.log(colors.red('ERRORS:'), error);
    }
    await app.close();
    await browser.close();
}


const CURRENT_PROCESS_PATH = path.join(process.cwd(), 'tests');
runTests(CURRENT_PROCESS_PATH);