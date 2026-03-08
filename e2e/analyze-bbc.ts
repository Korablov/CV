import { chromium } from "playwright";

async function analyzeSite() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://www.bbc-chartering.com", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(3000);

  // Screenshot
  await page.screenshot({ path: "e2e/screenshots/bbc-reference.png", fullPage: true });

  // Extract computed styles
  const styles = await page.evaluate(() => {
    const result: Record<string, unknown> = {};

    // Get all stylesheets
    const sheets = Array.from(document.styleSheets);
    const fontFaces: string[] = [];
    const colors = new Set<string>();
    const fontFamilies = new Set<string>();

    sheets.forEach((sheet) => {
      try {
        const rules = Array.from(sheet.cssRules);
        rules.forEach((rule) => {
          if (rule instanceof CSSFontFaceRule) {
            fontFaces.push(rule.cssText.slice(0, 200));
          }
        });
      } catch {}
    });

    // Get computed styles from key elements
    const elements = document.querySelectorAll("h1, h2, h3, p, a, button, nav, body, header, footer, section");
    elements.forEach((el) => {
      const tag = el.tagName.toLowerCase();
      const cs = getComputedStyle(el);
      fontFamilies.add(cs.fontFamily);
      colors.add(cs.color);
      colors.add(cs.backgroundColor);
    });

    // Get body and specific element styles
    const body = getComputedStyle(document.body);
    result.bodyFont = body.fontFamily;
    result.bodyColor = body.color;
    result.bodyBg = body.backgroundColor;

    const h1 = document.querySelector("h1");
    if (h1) {
      const cs = getComputedStyle(h1);
      result.h1Font = cs.fontFamily;
      result.h1Size = cs.fontSize;
      result.h1Weight = cs.fontWeight;
      result.h1Color = cs.color;
      result.h1LetterSpacing = cs.letterSpacing;
    }

    const h2 = document.querySelector("h2");
    if (h2) {
      const cs = getComputedStyle(h2);
      result.h2Font = cs.fontFamily;
      result.h2Size = cs.fontSize;
      result.h2Weight = cs.fontWeight;
      result.h2Color = cs.color;
    }

    const nav = document.querySelector("nav");
    if (nav) {
      const cs = getComputedStyle(nav);
      result.navBg = cs.backgroundColor;
      result.navFont = cs.fontFamily;
    }

    // Links / buttons
    const links = document.querySelectorAll("a");
    const linkColors = new Set<string>();
    links.forEach((a) => linkColors.add(getComputedStyle(a).color));

    result.fontFaces = fontFaces.slice(0, 10);
    result.allFontFamilies = Array.from(fontFamilies);
    result.allColors = Array.from(colors);
    result.linkColors = Array.from(linkColors);

    // Check for CSS variables on :root
    const rootStyles = getComputedStyle(document.documentElement);
    const cssVars: Record<string, string> = {};
    for (const prop of ["--color-primary", "--color-secondary", "--font-primary", "--font-secondary", "--color-accent", "--color-bg", "--color-text"]) {
      const val = rootStyles.getPropertyValue(prop);
      if (val) cssVars[prop] = val;
    }
    result.cssVars = cssVars;

    return result;
  });

  console.log(JSON.stringify(styles, null, 2));

  await browser.close();
}

analyzeSite();
