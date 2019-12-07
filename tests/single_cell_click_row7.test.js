
async function test_click_on_7_1_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(7, 1));
    await checkScreenshots(diff);
}

async function test_click_on_7_2_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(7, 2));
    await checkScreenshots(diff);
}

async function test_click_on_7_3_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(7, 3));
    await checkScreenshots(diff);
}

async function test_click_on_7_4_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(7, 4));
    await checkScreenshots(diff);
}

async function test_click_on_7_5_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(7, 5));
    await checkScreenshots(diff);
}

async function test_click_on_7_6_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(7, 6));
    await checkScreenshots(diff);
}

async function test_click_on_7_7_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(7, 7));
    await checkScreenshots(diff);
}

async function test_click_on_7_8_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(7, 8));
    await checkScreenshots(diff);
}

module.exports = {
    test_click_on_7_1_cell,
    test_click_on_7_2_cell,
    test_click_on_7_3_cell,
    test_click_on_7_4_cell,
    test_click_on_7_5_cell,
    test_click_on_7_6_cell,
    test_click_on_7_7_cell,
    test_click_on_7_8_cell,
};