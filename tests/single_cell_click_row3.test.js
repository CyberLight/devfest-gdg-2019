
async function test_click_on_3_1_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(3, 1));
    await checkScreenshots(diff);
}

async function test_click_on_3_2_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(3, 2));
    await checkScreenshots(diff);
}

async function test_click_on_3_3_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(3, 3));
    await checkScreenshots(diff);
}

async function test_click_on_3_4_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(3, 4));
    await checkScreenshots(diff);
}

async function test_click_on_3_5_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(3, 5));
    await checkScreenshots(diff);
}

async function test_click_on_3_6_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(3, 6));
    await checkScreenshots(diff);
}

async function test_click_on_3_7_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(3, 7));
    await checkScreenshots(diff);
}

async function test_click_on_3_8_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(3, 8));
    await checkScreenshots(diff);
}

module.exports = {
    test_click_on_3_1_cell,
    test_click_on_3_2_cell,
    test_click_on_3_3_cell,
    test_click_on_3_4_cell,
    test_click_on_3_5_cell,
    test_click_on_3_6_cell,
    test_click_on_3_7_cell,
    test_click_on_3_8_cell,
};