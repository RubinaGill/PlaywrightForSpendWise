import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    constructor(public page: Page) { }

    get addTransactionButton(): Locator {
        return this.page.locator('a:has-text("New Transaction")');
    }

    async goto() {
        await this.page.goto('/user/dashboard');
    }

    async gotoTransactionHistory() {
        await this.page.goto('/user/transactions');
    }

    async clickAddTransaction() {
        await this.addTransactionButton.click();
    }

    async openTransactionForEdit(description: string) {
        await this.page.getByText(description,{ exact: true }).first().click();
    }
    
}   