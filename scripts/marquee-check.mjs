import { chromium } from "playwright-core";

const executablePath =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: "reduce",
});
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.locator("#skills").scrollIntoViewIfNeeded();
await page.waitForTimeout(500);

const sample = await page.evaluate(() => {
  const track = document.querySelector(".marquee-track");
  const host = document.querySelector(".marquee");
  if (!track || !host) return null;
  const style = getComputedStyle(track);
  return {
    reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
    animationName: style.animationName,
    animationDuration: style.animationDuration,
    animationPlayState: style.animationPlayState,
    animationIterationCount: style.animationIterationCount,
    animationTimingFunction: style.animationTimingFunction,
    transform: style.transform,
    trackWidth: track.getBoundingClientRect().width,
    hostWidth: host.getBoundingClientRect().width,
    animations: track.getAnimations().map((animation) => ({
      playState: animation.playState,
      currentTime: animation.currentTime,
    })),
  };
});

await page.waitForTimeout(1000);
const after = await page.evaluate(() => {
  const track = document.querySelector(".marquee-track");
  const style = track ? getComputedStyle(track) : null;
  return {
    transform: style?.transform,
    currentTime: track?.getAnimations()[0]?.currentTime,
  };
});

await page.locator(".marquee").hover();
await page.waitForTimeout(300);
const hovered = await page.evaluate(() => {
  const track = document.querySelector(".marquee-track");
  const style = track ? getComputedStyle(track) : null;
  return {
    animationPlayState: style?.animationPlayState,
    playState: track?.getAnimations()[0]?.playState,
    currentTime: track?.getAnimations()[0]?.currentTime,
  };
});

console.log(JSON.stringify({ sample, after, hovered }, null, 2));
await browser.close();
