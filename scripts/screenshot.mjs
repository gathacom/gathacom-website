import { chromium } from "playwright-core";

const executablePath =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const browser = await chromium.launch({ executablePath, headless: true });

const messages = [];

async function shot(name, viewport, action) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  page.on("console", (message) => {
    if (message.type() === "error" || message.type() === "warning") {
      messages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => messages.push(`pageerror: ${error.message}`));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1800);

  // Walk the page so every whileInView reveal and lazy image fires.
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.7);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1200);

  if (action) await action(page);

  await page.screenshot({ path: `.screens/${name}.png`, fullPage: true });
  await page.close();
}

await shot("desktop-full", { width: 1440, height: 1000 });
await shot("mobile-full", { width: 390, height: 844 });
await shot("dialog", { width: 1440, height: 1000 }, async (page) => {
  await page
    .locator('button[aria-label^="Open case study"]')
    .first()
    .click();
  await page.waitForTimeout(700);
});

await browser.close();
console.log(JSON.stringify([...new Set(messages)], null, 2));
