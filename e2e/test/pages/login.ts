import { Page } from "playwright";
import loginElements from "../locators/loginElements";
import userCredentials from "../data/userCredentials.json";
import { expect } from '@playwright/test';


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
  }

  async verifyUser() {
    await this.page.waitForSelector(loginElements.welcomeUser.locator, { state: 'visible' });
    const name: string = userCredentials.username;
    const welcomeText: string | null = await this.page.locator(loginElements.welcomeUser.locator).textContent();
    if (welcomeText && welcomeText.includes(name)) {
      console.log("User is logged in");
    } else {
      console.log("User is not logged in");
    }
    await this.page.screenshot({ path: 'e2e/reports/login-successfull.png', fullPage: true })
  }

  async typeInvalidPassword() {
    const invalidPassword: string = 'invalid123';  // Usa una contraseña incorrecta para probar el pop-up
    await this.page.locator(loginElements.passwordBox.locator).fill(invalidPassword);
  }

  async handleWrongPasswordPopup() {
    // Configurar el manejo del diálogo
    this.page.once('dialog', async dialog => {
      // Verifica el mensaje del pop-up
      expect(dialog.message()).toBe('Wrong password.');
      // Acepta el pop-up
      await dialog.accept();
    });
    // Esperar un momento para que el diálogo aparezca y se maneje
    await this.page.waitForTimeout(1000);
    // Verifica la URL después de aceptar el pop-up
    await expect(this.page).toHaveURL('https://www.demoblaze.com');
    console.log("Finished test after handling pop-up");
  }
}
export { login };
