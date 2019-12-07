
async function test_click_on_top_left_marker({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff, 1)
    await page.mouse.click(...getCoordsByRowCol(2, 3));
    await checkScreenshots(diff, 2);
}

async function test_click_on_top_left_marker2({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff, 1)
    await page.mouse.click(...getCoordsByRowCol(3, 2));
    await checkScreenshots(diff, 2);
}

async function test_click_on_top_right_marker({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff, 1)
    await page.mouse.click(...getCoordsByRowCol(2, 5));
    await checkScreenshots(diff, 2);
}

async function test_click_on_top_right_marker2({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff, 1)
    await page.mouse.click(...getCoordsByRowCol(3, 6));
    await checkScreenshots(diff, 2);
}

async function test_click_on_bottom_left_marker({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff, 1)
    await page.mouse.click(...getCoordsByRowCol(5, 2));
    await checkScreenshots(diff, 2);
}

async function test_click_on_bottom_left_marker2({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff, 1)
    await page.mouse.click(...getCoordsByRowCol(6, 3));
    await checkScreenshots(diff, 2);
}

async function test_click_on_bottom_right_marker({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff, 1)
    await page.mouse.click(...getCoordsByRowCol(5, 6));
    await checkScreenshots(diff, 2);
}

async function test_click_on_bottom_right_marker2({ page, diff, checkScreenshots, getCoordsByRowCol }) {
    await page.mouse.click(...getCoordsByRowCol(4, 4));
    await checkScreenshots(diff, 1)
    await page.mouse.click(...getCoordsByRowCol(6, 5));
    await checkScreenshots(diff, 2);
}

module.exports = {
    test_click_on_top_left_marker,
    test_click_on_top_left_marker2,
    test_click_on_top_right_marker,
    test_click_on_top_right_marker2,
    test_click_on_bottom_left_marker,
    test_click_on_bottom_left_marker2,
    test_click_on_bottom_right_marker,
    test_click_on_bottom_right_marker2
};