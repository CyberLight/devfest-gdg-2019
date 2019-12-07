
async function test_click_on_1_1_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(1, 1));
    await checkScreenshots(diff);
}

async function test_click_on_1_2_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(1, 2));
    await checkScreenshots(diff);
}

async function test_click_on_1_3_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(1, 3));
    await checkScreenshots(diff);
}

async function test_click_on_1_4_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(1, 4));
    await checkScreenshots(diff);
}

async function test_click_on_1_5_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(1, 5));
    await checkScreenshots(diff);
}

async function test_click_on_1_6_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(1, 6));
    await checkScreenshots(diff);
}

async function test_click_on_1_7_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(1, 7));
    await checkScreenshots(diff);
}

async function test_click_on_1_8_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(1, 8));
    await checkScreenshots(diff);
}

module.exports = {
    test_click_on_1_1_cell,
    test_click_on_1_2_cell,
    test_click_on_1_3_cell,
    test_click_on_1_4_cell,
    test_click_on_1_5_cell,
    test_click_on_1_6_cell,
    test_click_on_1_7_cell,
    test_click_on_1_8_cell,
};