import { Page, Locator } from '@playwright/test';

export class TransactionPage {
    constructor(public page: Page) { }

    get descriptionInput(): Locator {
        return this.page.locator('input[name="description"]');
    }

    get amountInput(): Locator {
        return this.page.locator('input[name="amount"]');
    }

    get dateInput(): Locator {
        return this.page.locator('input[name="date"]');
    }

    categorySelect(categoryName: string): Locator {
        return this.page.locator(`input#${categoryName}`);
    }

    get saveTransactionButton(): Locator {
        return this.page.getByRole('button', { name: 'Save transaction' });
    }

    async fillTransactionForm(description: string, amount: string, date: string, category: string) {
        await this.descriptionInput.fill(description);
        await this.amountInput.fill(amount);
        await this.dateInput.fill(date);
        await this.categorySelect(category).check();
    }

    async saveTransaction() {
        await this.saveTransactionButton.click();
    }

    async editTransaction(description: string, amount: string, date: string, category: string) {
        await this.fillTransactionForm(description, amount, date, category);
        await this.saveTransaction();
    }
}