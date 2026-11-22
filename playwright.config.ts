import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL ?? "http://localhost:3000";

export default defineConfig({
  testDir: "tests",
  timeout: 45_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: { baseURL, trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } } },
    // Cross-engine coverage (emulated desktop engines, not physical devices)
    // Firefox is opt-in: Playwright's Firefox build fails to launch on this macOS host ("Could not find profile folder").
    ...(process.env.PW_FIREFOX ? [{ name: "firefox", use: { ...devices["Desktop Firefox"], viewport: { width: 1280, height: 800 } } }] : []),
    { name: "webkit", use: { ...devices["Desktop Safari"], viewport: { width: 1280, height: 800 } } },
    { name: "iphone-webkit", use: { ...devices["iPhone 13"] } },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : { command: "npm run start", url: baseURL, reuseExistingServer: true, timeout: 120_000 },
});
