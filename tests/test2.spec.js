// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * @worker: 2
 */

test.describe("suite 1 worker 1",() => {
    test("test 1", async ({ page }) => {
        const num = 1
        console.log(num)
    })
})
