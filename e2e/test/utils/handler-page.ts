import { Browser, BrowserContext, Page, chromium } from "playwright";

let browser: Browser;
let browserContext: BrowserContext;
let page: Page;

export async function initialize() {
  browser = await chromium.launch({ headless: false, channel: "chrome", args: ["--start-maximized"] });
  browserContext = await browser.newContext({ viewport: null, javaScriptEnabled: true });
  page = await browserContext.newPage();
  return { browser, browserContext, page };
}

export async function close() {
  if (page) {
    await page.close();
  }
  if (browserContext) {
    await browserContext.close();
  }
  if (browser) {
    await browser.close();
  }
}

export { browser, browserContext, page };