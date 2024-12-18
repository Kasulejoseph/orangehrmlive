import { type Page } from "@playwright/test";
import { DashboardSection } from "../sections";

export default class DashboardPage {
  readonly page: Page;
  readonly dashboardSection: DashboardSection;

  constructor(page: Page) {
    this.page = page;
    this.dashboardSection = new DashboardSection(page);
  }

  async assertContent() {
    await this.dashboardSection.assertDashboardContent();
  }

  async quickLaunch() {
    await this.dashboardSection.clickAssignLeave();
    await this.backToDashboard();

    await this.dashboardSection.clickLeaveList();
    await this.backToDashboard();

    await this.dashboardSection.clickTimesheetsList();
    await this.backToDashboard();

    await this.dashboardSection.clickApplyLeave();
    await this.backToDashboard();

    await this.dashboardSection.clickMyLeave();
    await this.backToDashboard();

    await this.dashboardSection.clickMyTimesheet();
    await this.backToDashboard();
  }

  async backToDashboard() {
    await this.page.goBack();
  }
}
