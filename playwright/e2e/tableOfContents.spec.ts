import { test } from "../fixtures";

test.describe("Table of contents", () => {
  test("can be disabled when creating a template", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /New document/ }).click();
  });
});
