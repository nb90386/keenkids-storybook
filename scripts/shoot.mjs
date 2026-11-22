// Multi-viewport screenshots for visual review.
// Usage: node scripts/shoot.mjs [baseUrl] [outDir] [paths...]
//   SHOOT_WIDTHS=390,768,1024,1440  SHOOT_MOTION=reduce|no-preference
import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const [base = "http://localhost:3000", out = "docs/screenshots", ...paths] = process.argv.slice(2);
const routes = paths.length ? paths : ["/"];
const widths = (process.env.SHOOT_WIDTHS ?? "390,1440").split(",").map(Number);
const motion = process.env.SHOOT_MOTION ?? "reduce";
const fullPage = process.env.SHOOT_FULL !== "0";

await mkdir(out, { recursive: true });
const browser = await chromium.launch();
const problems = [];

for (const width of widths) {
  const context = await browser.newContext({
    viewport: { width, height: ({ 375: 812, 390: 844, 768: 1024, 1024: 768, 1280: 800, 1440: 900 })[width] ?? 900 },
    deviceScaleFactor: width < 600 ? 2 : 1,
    reducedMotion: motion,
  });
  const page = await context.newPage();
  page.on("console", (m) => m.type() === "error" && problems.push(`[${width}] console: ${m.text()}`));
  page.on("pageerror", (e) => problems.push(`[${width}] pageerror: ${e.message}`));
  for (const route of routes) {
    await page.goto(base + route, { waitUntil: "networkidle" });
    // let lazy images load
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 0) problems.push(`[${width}] ${route}: horizontal overflow ${overflow}px`);
    const name = route === "/" ? "home" : route.replace(/^\//, "").replaceAll("/", "_");
    await page.screenshot({ path: `${out}/${name}-${width}.png`, fullPage });
  }
  await context.close();
}
await browser.close();
console.log(problems.length ? problems.join("\n") : "no console errors or overflow");
