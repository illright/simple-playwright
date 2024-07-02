import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./playwright/e2e",
  fullyParallel: true,
  timeout: 5000,
  reporter: "html",
  use: {
    baseURL: "https://app.docfield.com",
    trace: "on-first-retry",
  },

  projects: [
    { name: "setup", testDir: "./playwright", testMatch: "auth.setup.ts" },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["setup"],
    },
  ],
});
