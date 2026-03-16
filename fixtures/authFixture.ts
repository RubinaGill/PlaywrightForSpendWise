import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import * as fs from 'fs';
import path from 'path';

const STORAGE_PATH = path.join(__dirname, '../storage/storageState.json');
const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/credentials.json'), 'utf-8'));

type AuthFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<AuthFixtures>({
  loggedInPage: async ({ browser }, use) => {

    if (!fs.existsSync(STORAGE_PATH)) {
      console.log('No storage state found, logging in...');
      const context = await browser.newContext();  
      const page = await context.newPage();
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(credentials.email, credentials.password);
      await page.waitForURL('**/dashboard');

      await context.storageState({ path: STORAGE_PATH });
      await context.close();
      console.log('Storage state saved!');
    }

    console.log('Using existing storage state to create logged-in page...');

    const context = await browser.newContext({ storageState: STORAGE_PATH });
    const page = await context.newPage();

    await use(page);

    await context.close();
  },
});

export { expect } from '@playwright/test';