

async function test_click_on_2_1_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(2, 1));
    await checkScreenshots(diff);
}

async function test_click_on_2_2_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(2, 2));
    await checkScreenshots(diff);
}

async function test_click_on_2_3_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(2, 3));
    await checkScreenshots(diff);
}

async function test_click_on_2_4_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(2, 4));
    await checkScreenshots(diff);
}

async function test_click_on_2_5_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(2, 5));
    await checkScreenshots(diff);
}

async function test_click_on_2_6_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(2, 6));
    await checkScreenshots(diff);
}

async function test_click_on_2_7_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(2, 7));
    await checkScreenshots(diff);
}

async function test_click_on_2_8_cell({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(2, 8));
    await checkScreenshots(diff);
}

module.exports = {
    test_click_on_2_1_cell,
    test_click_on_2_2_cell,
    test_click_on_2_3_cell,
    test_click_on_2_4_cell,
    test_click_on_2_5_cell,
    test_click_on_2_6_cell,
    test_click_on_2_7_cell,
    test_click_on_2_8_cell,
};