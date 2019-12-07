
async function test_click_on_5_1_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(5, 1));
    await checkScreenshots(diff);
}

async function test_click_on_5_2_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(5, 2));
    await checkScreenshots(diff);
}

async function test_click_on_5_3_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(5, 3));
    await checkScreenshots(diff);
}

async function test_click_on_5_4_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(5, 4));
    await checkScreenshots(diff);
}

async function test_click_on_5_5_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(5, 5));
    await checkScreenshots(diff);
}

async function test_click_on_5_6_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(5, 6));
    await checkScreenshots(diff);
}

async function test_click_on_5_7_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(5, 7));
    await checkScreenshots(diff);
}

async function test_click_on_5_8_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(5, 8));
    await checkScreenshots(diff);
}

module.exports = {
    test_click_on_5_1_cell,
    test_click_on_5_2_cell,
    test_click_on_5_3_cell,
    test_click_on_5_4_cell,
    test_click_on_5_5_cell,
    test_click_on_5_6_cell,
    test_click_on_5_7_cell,
    test_click_on_5_8_cell,
};