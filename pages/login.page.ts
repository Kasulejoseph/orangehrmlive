import { expect, Page } from "@playwright/test";
import { LoginFormSection } from "../sections";

export default class LoginPage {
  readonly page: Page;
  readonly loginFormSection: LoginFormSection;

  constructor(page: Page) {
    this.page = page;
    this.loginFormSection = new LoginFormSection(page);
  }

  async goTo(url) {
    return this.page.goto(url);
  }

  async enterCredentialsAndLogin(username, password) {
    await this.loginFormSection.enterUsername(username);
    await this.loginFormSection.enterPassword(password);
    await this.loginFormSection.submitForm();
    await expect(this.page).toHaveURL(/\.*\/dashboard\/index/);
  }
}
