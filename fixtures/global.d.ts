import { Page } from '@playwright/test';

declare module '@playwright/test' {
  interface TestFixtures {
    loggedInPage: Page;
  }
}