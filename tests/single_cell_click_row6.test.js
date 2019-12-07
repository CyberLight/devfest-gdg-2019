
async function test_click_on_6_1_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(6, 1));
    await checkScreenshots(diff);
}

async function test_click_on_6_2_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(6, 2));
    await checkScreenshots(diff);
}

async function test_click_on_6_3_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(6, 3));
    await checkScreenshots(diff);
}

async function test_click_on_6_4_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(6, 4));
    await checkScreenshots(diff);
}

async function test_click_on_6_5_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(6, 5));
    await checkScreenshots(diff);
}

async function test_click_on_6_6_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(6, 6));
    await checkScreenshots(diff);
}

async function test_click_on_6_7_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(6, 7));
    await checkScreenshots(diff);
}

async function test_click_on_6_8_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(6, 8));
    await checkScreenshots(diff);
}

module.exports = {
    test_click_on_6_1_cell,
    test_click_on_6_2_cell,
    test_click_on_6_3_cell,
    test_click_on_6_4_cell,
    test_click_on_6_5_cell,
    test_click_on_6_6_cell,
    test_click_on_6_7_cell,
    test_click_on_6_8_cell,
};