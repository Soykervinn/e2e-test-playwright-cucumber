import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { initialize, close } from "../utils/handler-page";
import { login } from "../pages/login";

setDefaultTimeout(1000 * 60 * 2);

Before(async function () {
    const { browser: browser, browserContext: bCtx, page: page } = await initialize();
    this.browser = browser;
    this.browserContext = bCtx;
    this.page = page;
    this.signin = new login(page);
  });


After(async function () {
  await close(); 
});
