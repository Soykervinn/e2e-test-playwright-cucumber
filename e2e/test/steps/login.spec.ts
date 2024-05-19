import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { browser, browserContext, page, initialize, close } from "../utils/handler-page";
import { login } from "../pages/login";
//import signupElements from '../locators/signUpElements';

setDefaultTimeout(1000 * 60 * 2);
let signin: login;

Before(async function () {
  const { browser: browser, browserContext: bCtx, page: page } = await initialize();
  this.browser = browser;
  this.browserContext = bCtx;
  this.page = page;
  signin = new login(page);
});

//* Test case 1. User login with valid credentials

Given('the user is on the login page.', async function () {
    console.log("User is on the signup page");
    await signin.goToSignUpPage();
});
  
       
When('the user enters their Username and Password.', async function () {
    await signin.loginClick();
    await signin.typeUsername();
    await signin.typePassword();
});
 
       
When('click on the login button.', async function () {
    await signin.clickLogin();
 
});
       
       
Then('the user should be loged in successfully.', async function () {
    await signin.verifyUser();
});

After(async function () {
    await close();
});

//**  Test case 2. User login with invalid credentials