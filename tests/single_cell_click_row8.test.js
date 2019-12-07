
async function test_click_on_8_1_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(8, 1));
    await checkScreenshots(diff);
}

async function test_click_on_8_2_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(8, 2));
    await checkScreenshots(diff);
}

async function test_click_on_8_3_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(8, 3));
    await checkScreenshots(diff);
}

async function test_click_on_8_4_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(8, 4));
    await checkScreenshots(diff);
}

async function test_click_on_8_5_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(8, 5));
    await checkScreenshots(diff);
}

async function test_click_on_8_6_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(8, 6));
    await checkScreenshots(diff);
}

async function test_click_on_8_7_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(8, 7));
    await checkScreenshots(diff);
}

async function test_click_on_8_8_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(8, 8));
    await checkScreenshots(diff);
}

module.exports = {
    test_click_on_8_1_cell,
    test_click_on_8_2_cell,
    test_click_on_8_3_cell,
    test_click_on_8_4_cell,
    test_click_on_8_5_cell,
    test_click_on_8_6_cell,
    test_click_on_8_7_cell,
    test_click_on_8_8_cell,
};