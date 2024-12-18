import { test } from "@playwright/test";
import { LoginPage, DashboardPage } from "../pages";

test("Navigate Quick Launch Menu", async ({ page }) => {
  const login = new LoginPage(page);
  const dasboard = new DashboardPage(page);
  const baseURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  await login.goTo(baseURL);
  await login.enterCredentialsAndLogin("Admin", "admin123");
  await dasboard.assertContent();
  await dasboard.quickLaunch();
});
