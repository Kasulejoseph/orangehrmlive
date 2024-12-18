import { expect, Page } from "@playwright/test";

export default class DashboardSection {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  //locator
  get profileImageElement() {
    return this.page
      .getByRole("banner")
      .getByRole("img", { name: "profile picture" });
  }

  get quickLaunchElement() {
    return this.page.getByText("Quick Launch");
  }

  get leaveTodayElement() {
    return this.page.getByText("Employees on Leave Today");
  }

  get bySubElement() {
    return this.page.getByText("Employee Distribution by Sub");
  }

  get byLocationElement() {
    return this.page.getByText("Employee Distribution by Location");
  }

  get assignLeaveElement() {
    return this.page.getByRole("button", { name: "Assign Leave" });
  }

  get assignLeaveHeadingElement() {
    return this.page.getByRole("heading", { name: "Assign Leave" });
  }

  get leaveListElement() {
    return this.page.getByRole("button", { name: "Leave List" });
  }

  get leaveListHeadingElement() {
    return this.page.getByRole("heading", { name: "Leave List" });
  }

  get timesheetsElement() {
    return this.page.getByRole("button", { name: "Timesheets" });
  }

  get timesheetsHeadingElement() {
    return this.page.getByRole("heading", {
      name: "Timesheets Pending Action",
    });
  }

  get applyLeaveElement() {
    return this.page.getByRole("button", { name: "Apply Leave" });
  }

  get applyLeaveHeadingElement() {
    return this.page.getByRole("heading", { name: "Apply Leave" });
  }

  get myLeaveElement() {
    return this.page.getByRole("button", { name: "My Leave" });
  }

  get myLeaveHeadingElement() {
    return this.page.getByRole("heading", { name: "My Leave List" });
  }

  get myTimesheetElement() {
    return this.page.getByRole("button", { name: "My Timesheet" });
  }

  get myTimesheetHeadingElement() {
    return this.page.getByRole("heading", { name: "My Timesheet" });
  }

  // actions
  async assertDashboardContent() {
    await expect(this.profileImageElement).toBeVisible();
    await expect(this.quickLaunchElement).toBeVisible();
    await expect(this.leaveTodayElement).toBeVisible();
    await expect(this.bySubElement).toBeVisible();
    await expect(this.byLocationElement).toBeVisible();
  }

  async clickAssignLeave() {
    await this.assignLeaveElement.click();
    await expect(this.page).toHaveURL(/\.*leave\/assignLeave/);
    await expect(this.assignLeaveHeadingElement).toBeVisible();
  }

  async clickLeaveList() {
    await this.leaveListElement.click();
    await expect(this.page).toHaveURL(/\.*leave\/viewLeaveList/);
    await expect(this.leaveListHeadingElement).toBeVisible();
  }

  async clickTimesheetsList() {
    await this.timesheetsElement.click();
    await expect(this.page).toHaveURL(/\.*time\/viewEmployeeTimesheet/);
    await expect(this.timesheetsHeadingElement).toBeVisible();
  }

  async clickApplyLeave() {
    await this.applyLeaveElement.click();
    await expect(this.page).toHaveURL(/\.*leave\/applyLeave/);
    await expect(this.applyLeaveHeadingElement).toBeVisible();
  }

  async clickMyLeave() {
    await this.myLeaveElement.click();
    await expect(this.page).toHaveURL(/\.*leave\/viewMyLeaveList/);
    await expect(this.myLeaveHeadingElement).toBeVisible();
  }

  async clickMyTimesheet() {
    await this.myTimesheetElement.click();
    await expect(this.page).toHaveURL(/\.*time\/viewMyTimesheet/);
    await expect(this.myTimesheetHeadingElement).toBeVisible();
  }
}
