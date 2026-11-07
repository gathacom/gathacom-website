import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath:
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  headless: true,
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 3,
});
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1200);

const info = await page.evaluate(() => {
  const link = document.querySelector("header nav a");
  if (!link) return null;
  const spans = [...link.querySelectorAll("span")];
  return {
    text: link.innerText,
    linkRect: link.getBoundingClientRect(),
    spans: spans.slice(0, 8).map((element) => {
      const rect = element.getBoundingClientRect();
      return {
        text: element.textContent?.slice(0, 20),
        class: element.className,
        style: element.getAttribute("style"),
        transform: getComputedStyle(element).transform,
        overflow: getComputedStyle(element).overflow,
        rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
      };
    }),
  };
});

await page.locator("header").screenshot({ path: ".screens/header.png" });
await page.locator("header nav").screenshot({ path: ".screens/nav.png" });
console.log(JSON.stringify(info, null, 2));
await browser.close();
