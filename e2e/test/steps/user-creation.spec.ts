import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { browser, browserContext, page, initialize, close } from "../utils/handler-page";
import loginElements from "../locators/loginElements";
import { login } from "../pages/login";
import '../utils/setup'

setDefaultTimeout(1000 * 60 * 2);
       
Given('That i want to create an user.', async function () {
    console.log("nuevo test");
    await this.signin.goToSignUpPage();
});
           
When('I type the username and passwornd in the sign up form.', async function () {  
    return 'pending';
});
       
Then('The user is created.', async function () {

    return 'pending';
});

After(async function () {
    await close();
});