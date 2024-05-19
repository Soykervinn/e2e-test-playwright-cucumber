import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { browser, browserContext, page, initialize, close } from "../utils/handler-page";
import loginElements from "../locators/loginElements";
import { login } from "../pages/login";
import { expect } from '@playwright/test';
import '../utils/setup'
//import signupElements from '../locators/signUpElements';

setDefaultTimeout(1000 * 60 * 2);
//let signin: login;

//* Test case 1. User login with valid credentials

Given('the user is on the login page.', async function () {
    console.log("User is on the signup page");
    await this.signin.goToSignUpPage();
});      
When('the user enters their Username and Password.', async function () {
    await this.signin.loginClick();
    await this.signin.typeUsername();
    await this.signin.typePassword();
});    
When('click on the login button.', async function () {
    await this.signin.clickLogin();
 
});            
Then('the user should be loged in successfully.', async function () {
    await this.signin.verifyUser();
});

//**  Test case 2. User login with invalid credentials

Given('the user is on the login view.', async function () {
    await this.signin.goToSignUpPage();
    await this.signin.loginClick();
});
       
When('the user enters the Username and invalid Password.', async function () {
    await this.signin.typeUsername();
    await this.signin.typeInvalidPassword();
    
});
       
When('click on the login button to proceed.', async function () {
    await this.signin.clickLogin();
});
       
Then('the user should see an error message.', async function () {
    await this.signin.handleWrongPasswordPopup();
});
