import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { plans } from "../src/content/pricing";
import { schools } from "../src/content/schools";

const routes = [
  "/",
  "/programs",
  "/schools",
  ...schools.map((s) => `/schools/${s.slug}`),
  "/pricing",
  "/about",
  "/faq",
  "/contact",
  "/bring-to-your-school",
  "/careers",
];

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  return errors;
}

test.describe("every route", () => {
  for (const route of routes) {
    test(`${route} renders cleanly`, async ({ page }) => {
      const errors = collectErrors(page);
      const res = await page.goto(route, { waitUntil: "networkidle" });
      expect(res?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main#main")).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, "horizontal overflow").toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });

    test(`${route} has no serious accessibility violations`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(route, { waitUntil: "networkidle" });
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
      const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
      expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
    });
  }

  test("unknown pages return a designed 404", async ({ page }) => {
    const res = await page.goto("/no-such-page");
    expect(res?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("flew off");
  });
});

test("every internal link resolves", async ({ page, request }) => {
  const seen = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href") ?? ""));
    for (const href of hrefs) {
      expect(href, `empty or placeholder href on ${route}`).not.toMatch(/^(#?|javascript:.*)$/);
      if (href.startsWith("/")) seen.add(href.split("#")[0]);
    }
  }
  for (const href of seen) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});

test.describe("school finder", () => {
  test("each school shows its own verified form link", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const group = page.getByRole("radiogroup", { name: /Where does your child go to school/ });
    for (const school of schools) {
      await group.getByRole("radio", { name: new RegExp(school.shortName) }).click();
      await expect(group.getByRole("radio", { name: new RegExp(school.shortName) })).toHaveAttribute("aria-checked", "true");
      const detail = page.locator("#find-your-school");
      await expect(detail.getByRole("heading", { name: school.name })).toBeVisible();
      await expect(detail.getByRole("link", { name: new RegExp(school.form.cta) })).toHaveAttribute("href", school.form.url);
    }
  });

  test("arrow keys move between schools", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("radio", { name: /Mattos/ }).focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.getByRole("radio", { name: /Sinnott/ })).toHaveAttribute("aria-checked", "true");
    await expect(page.getByRole("radio", { name: /Sinnott/ })).toBeFocused();
    await page.keyboard.press("End");
    await expect(page.getByRole("radio", { name: /Curtner/ })).toHaveAttribute("aria-checked", "true");
  });

  test("deep links select a school", async ({ page }) => {
    await page.goto("/schools#school-rose", { waitUntil: "networkidle" });
    await expect(page.getByRole("radio", { name: /Rose/ })).toHaveAttribute("aria-checked", "true");
    await expect(page.locator("#find-your-school").getByRole("heading", { name: "Rose Elementary" })).toBeVisible();
  });

  test("switching schools never moves the page", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const section = page.locator("#find-your-school");
    const heights: number[] = [];
    for (const school of schools) {
      await page.getByRole("radio", { name: new RegExp(school.shortName) }).click();
      await page.waitForTimeout(400);
      heights.push(Math.round((await section.boundingBox())!.height));
    }
    expect(new Set(heights).size, `heights ${heights.join(",")}`).toBe(1);
  });

  test("statuses never claim enrollment for an interest form", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    for (const school of schools.filter((s) => s.form.kind === "interest")) {
      await expect(page.getByRole("radio", { name: new RegExp(school.shortName) })).not.toContainText(/enroll/i);
    }
  });
});

test("monthly chapters are a keyboard-operable tablist", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const tabs = page.getByRole("tablist", { name: "Months" });
  await tabs.getByRole("tab", { name: /August/ }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Motion & Transportation");
  await page.keyboard.press("ArrowDown");
  await expect(tabs.getByRole("tab", { name: /September/ })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toContainText("Air & Flight");
});

test("every image on the homepage loads", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
  });
  await page.waitForLoadState("networkidle");
  const broken = await page.$$eval("img", (imgs) =>
    imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src),
  );
  expect(broken).toEqual([]);
});

test("back and forward navigation restore pages", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "How a week works" }).click();
  await expect(page).toHaveURL(/\/programs$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("The program");
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("A little more wonder");
  await page.goForward();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("The program");
});

test("keyboard focus is always visible", async ({ page, browserName }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  // Safari (WebKit) only tabs to links with Option+Tab by default.
  const key = browserName === "webkit" ? "Alt+Tab" : "Tab";
  for (let i = 0; i < 6; i++) {
    await page.keyboard.press(key);
    const outline = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      const cs = getComputedStyle(el);
      return cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) >= 2;
    });
    expect(outline).toBe(true);
  }
});

test("FAQ answers open and close", async ({ page }) => {
  await page.goto("/faq");
  const trigger = page.getByRole("button", { name: "What's the refund/cancellation policy?" });
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText("monthly fees are non-refundable once billed.")).toBeVisible();
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(page.getByText("monthly fees are non-refundable once billed.")).toBeHidden();
});

test("payment buttons never reach live checkout in the preview", async ({ page }) => {
  const stripeRequests: string[] = [];
  page.on("request", (r) => r.url().includes("stripe.com") && stripeRequests.push(r.url()));
  await page.goto("/pricing");
  await page.getByRole("button", { name: "Pay online" }).first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toContainText("Payments are off in this preview");
  await expect(dialog).toContainText(plans[0].stripeUrl);
  await dialog.getByRole("button", { name: "Got it" }).click();
  await expect(dialog).toBeHidden();
  expect(stripeRequests).toEqual([]);
});

test("contact form validates, then hands off to the mail app honestly", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /Write the email/ }).click();
  await expect(page.getByText("Please tell us your name.")).toBeVisible();
  await expect(page.getByLabel("Your name")).toBeFocused();

  await page.getByLabel("Your name").fill("Test Parent");
  await page.getByLabel("What's it about?").selectOption("Curtner STEAM program");
  await page.getByLabel("Your message").fill("Which day will the Curtner class meet?");
  // mailto: navigation is intercepted so the test browser stays put
  await page.evaluate(() => {
    window.addEventListener("beforeunload", (e) => e.preventDefault());
  });
  await page.getByRole("button", { name: /Write the email/ }).click();
  await expect(page.getByText("Your email app should have opened with your message.")).toBeVisible();
  await expect(page.getByText(/isn.t sent until you press send/)).toBeVisible();
});

test("homepage tells reviewers what is real", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Design preview.")).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  const robots = await (await page.request.get("/robots.txt")).text();
  expect(robots).toMatch(/Disallow: \//);
});

test("the idea journey falls back to a static sequence with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "networkidle" });
  const section = page.locator("section", { has: page.locator("#journey-title") });
  await expect(section.locator("li")).toHaveCount(5);
  for (const fig of await section.locator("figure").all()) await expect(fig).toBeVisible();
});

test.describe("mobile navigation", () => {
  test.skip(({ viewport }) => (viewport?.width ?? 0) >= 1024, "desktop shows inline navigation");

  test("menu opens, navigates and closes", async ({ page }) => {
    // wait for hydration: a tap before React attaches handlers is a no-op
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = page.getByRole("dialog");
    await expect(menu.getByRole("link", { name: "Programs" })).toBeVisible();
    await menu.getByRole("link", { name: "Programs" }).click();
    await expect(page).toHaveURL(/\/programs$/);
    await expect(page.getByRole("dialog")).toBeHidden();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("The program");
  });
});
