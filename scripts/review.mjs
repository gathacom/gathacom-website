import { chromium } from "playwright-core";

const executablePath =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const browser = await chromium.launch({ executablePath, headless: true });
const errors = [];

async function newPage(viewport, scale = 1) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: scale });
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1000);
  return page;
}

async function settle(page, selector, delay = 700) {
  await page.locator(selector).scrollIntoViewIfNeeded();
  await page.waitForTimeout(delay);
}

async function captureDialog(page, path) {
  await page.locator('button[aria-label^="Open case study"]').first().click();
  await page.locator('[role="dialog"] img').first().evaluate((image) => {
    if (image.decode) return image.decode().catch(() => undefined);
    return undefined;
  });
  await page.waitForTimeout(350);
  await page.screenshot({ path });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(250);
}

const desktop = await newPage({ width: 1440, height: 1000 }, 1.5);

await desktop.locator("header").screenshot({ path: ".screens/header.png" });
await desktop.screenshot({ path: ".screens/hero.png" });

await settle(desktop, "#experience");
await desktop.screenshot({ path: ".screens/experience.png" });

await settle(desktop, "#work");
await desktop.screenshot({ path: ".screens/works.png" });

await settle(desktop, "#archive");
await desktop.screenshot({ path: ".screens/archive.png" });

await settle(desktop, "#contact");
await desktop.screenshot({ path: ".screens/footer.png" });

await settle(desktop, "#work");
await captureDialog(desktop, ".screens/dialog.png");

const mobile = await newPage({ width: 390, height: 844 }, 2);
await mobile.screenshot({ path: ".screens/mobile-hero.png" });
await mobile.getByLabel("Open menu").click();
await mobile.waitForTimeout(500);
await mobile.screenshot({ path: ".screens/mobile-menu.png" });
await mobile.getByLabel("Close menu").click();
await mobile.waitForTimeout(300);

await settle(mobile, "#work");
await mobile.screenshot({ path: ".screens/mobile-works.png" });

await settle(mobile, "#archive");
await mobile.screenshot({ path: ".screens/mobile-archive.png" });

await settle(mobile, "#contact");
await mobile.screenshot({ path: ".screens/mobile-footer.png" });

await settle(mobile, "#work");
await captureDialog(mobile, ".screens/mobile-dialog.png");

await browser.close();
console.log(
  JSON.stringify(
    { screenshots: "ready", errors: [...new Set(errors)] },
    null,
    2,
  ),
);
