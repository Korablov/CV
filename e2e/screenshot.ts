import { chromium } from "playwright";

async function takeScreenshots() {
  const browser = await chromium.launch();

  const viewports = [
    { name: "desktop", width: 1440, height: 900 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "mobile", width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // Scroll through entire page to trigger all whileInView animations
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
    const step = vp.height / 2;
    for (let y = 0; y < scrollHeight; y += step) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(300);
    }
    // Scroll back to top for full page screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    await page.screenshot({
      path: `e2e/screenshots/${vp.name}.png`,
      fullPage: true,
    });
    await page.close();
    console.log(`✓ ${vp.name} screenshot saved`);
  }

  await browser.close();
}

takeScreenshots();
