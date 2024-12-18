import { type Locator, type Page } from "@playwright/test";

export default class LoginFormSection {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // locators
  get usernameElement(): Locator {
    return this.page.getByPlaceholder("Username");
  }

  get passwordElement(): Locator {
    return this.page.getByPlaceholder("Password");
  }

  get submitButton(): Locator {
    return this.page.getByRole("button", { name: "Login" });
  }

  //actions
  async enterUsername(username) {
    await this.usernameElement.fill(username);
  }

  async enterPassword(password) {
    await this.passwordElement.fill(password);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
