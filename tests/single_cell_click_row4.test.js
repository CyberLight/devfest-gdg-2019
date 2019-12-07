
async function test_click_on_4_1_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 1));
    await checkScreenshots(diff);
}

async function test_click_on_4_2_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 2));
    await checkScreenshots(diff);
}

async function test_click_on_4_3_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 3));
    await checkScreenshots(diff);
}

async function test_click_on_4_4_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff);
}

async function test_click_on_4_5_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 5));
    await checkScreenshots(diff);
}

async function test_click_on_4_6_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 6));
    await checkScreenshots(diff);
}

async function test_click_on_4_7_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 7));
    await checkScreenshots(diff);
}

async function test_click_on_4_8_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 8));
    await checkScreenshots(diff);
}

module.exports = {
    test_click_on_4_1_cell,
    test_click_on_4_2_cell,
    test_click_on_4_3_cell,
    test_click_on_4_4_cell,
    test_click_on_4_5_cell,
    test_click_on_4_6_cell,
    test_click_on_4_7_cell,
    test_click_on_4_8_cell,
};