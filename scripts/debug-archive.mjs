import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath:
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

const archive = page.locator("#archive");
await archive.scrollIntoViewIfNeeded();
await page.waitForTimeout(1500);

const info = await page.evaluate(() => {
  const section = document.querySelector("#archive");
  const title = document.querySelector("#archive-title");
  const reveal = section?.querySelector("div");
  return {
    sectionRect: section?.getBoundingClientRect(),
    text: section?.innerText,
    titleOpacity: title ? getComputedStyle(title).opacity : null,
    revealStyle: reveal?.getAttribute("style"),
    revealOpacity: reveal ? getComputedStyle(reveal).opacity : null,
    sectionDisplay: section ? getComputedStyle(section).display : null,
  };
});

await page.screenshot({ path: ".screens/archive.png" });
console.log(JSON.stringify(info, null, 2));
await browser.close();
