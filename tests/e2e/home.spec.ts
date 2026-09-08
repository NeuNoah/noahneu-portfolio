import { expect, test } from "@playwright/test";

test("German home page exposes apprenticeship goal and project", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Technik verstehen/i })).toBeVisible();
  await expect(page.getByText("01.08.2027", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /Projekt ansehen/i })).toBeVisible();
});

test("English page loads", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { name: /Understand technology/i })).toBeVisible();
});

test("mobile layout does not overflow horizontally", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");
  const widths = await page.evaluate(() => ({
    client: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client);
});

test("language switch keeps the current project", async ({ page }) => {
  await page.goto("/projekte/privacy-oriented-rust-browser");
  await page.getByRole("link", { name: "Sprache: English" }).click();
  await expect(page).toHaveURL(/\/en\/projects\/privacy-oriented-rust-browser$/);
});
