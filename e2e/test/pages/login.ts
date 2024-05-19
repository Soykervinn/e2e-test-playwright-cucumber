import { Page } from "playwright";
import loginElements from "../locators/loginElements";
import userCredentials from "../data/userCredentials.json";


const url: string = "https://www.demoblaze.com/";

class login {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToSignUpPage() {
    await this.page.goto(url);
  }

  async loginClick() {
    await this.page.click(loginElements.signBttn.locator);
  }

  async typeUsername() {
    const username: string = userCredentials.username;
    await this.page.locator(loginElements.usernameBox.locator).fill(username);
  }
  async typePassword() {
    const password: string = userCredentials.password;
    await this.page.locator(loginElements.passwordBox.locator).fill(password);
  }
  async clickLogin() {
    await this.page.click(loginElements.loginBttn.locator);
    await this.page.waitForSelector(loginElements.welcomeUser.locator, { state: 'visible' });
    await this.page.screenshot({ path: "after-login.png" });
  }
  async verifyUser() {
    const name: string = userCredentials.username;
    await this.page.locator(loginElements.welcomeUser.locator).textContent();
    if (name === userCredentials.username) {
      console.log("User is logged in");
    } else {
      console.log("User is not logged in");
    }
  }
}
export { login };
