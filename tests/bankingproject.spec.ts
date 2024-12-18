import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('test', async ({ page }) => {
  await page.goto("/angularJs-protractor/BankingProject/#/login");
  await expect(page.getByText('XYZ Bank')).toBeVisible();

  await expect(page.getByText('XYZ Bank')).toBeVisible();
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`- button "Add Customer"`);
  await expect(page.locator('body')).toMatchAriaSnapshot(`- button "Customers"`);
  await page.getByRole('button', { name: 'Customers' }).click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`- button "Customers"`);
  await expect(page.locator('thead')).toMatchAriaSnapshot(`- cell "Delete Customer"`);
  await page.getByRole('button', { name: 'Customers' }).click();
  await page.getByRole('link', { name: 'Post Code' }).click();
  await page.getByRole('link', { name: 'First Name' }).click();
  await page.getByRole('row', { name: 'Neville Longbottom E89898' }).getByRole('button').click();
  await expect(page.getByPlaceholder('Search Customer')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
  await page.getByRole('button', { name: 'Open Account' }).click();
  await expect(page.getByText('Customer :')).toBeVisible();
  await page.locator('#userSelect').selectOption('4');
  await page.locator('#currency').selectOption('Rupee');
  await expect(page.getByRole('button', { name: 'Process' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Process' }).click();
  await page.getByRole('button', { name: 'Customers' }).click();
  await page.getByRole('button', { name: 'Add Customer' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('Hello');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').press('CapsLock');
  await page.getByPlaceholder('Last Name').fill('JOsep');
  await page.getByPlaceholder('Post Code').click();
  await page.getByPlaceholder('Post Code').fill('00000');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
  await page.getByRole('button', { name: 'Customers' }).click();
  await expect(page.getByRole('cell', { name: 'JOsep' })).toBeVisible();
});
