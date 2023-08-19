// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * @worker: 1
 */

test.describe("suite 2 worker 2",() => {
    test("test 2", async ({ page }) => {
        const num = 4
        console.log(num)
    })
})
