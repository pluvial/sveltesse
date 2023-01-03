import { expect, test } from '@playwright/test'

test('hi page has expected p', async ({ page }) => {
	await page.goto('/hi/test')
	expect(await page.textContent('p')).toContain('Hi, test')
})
