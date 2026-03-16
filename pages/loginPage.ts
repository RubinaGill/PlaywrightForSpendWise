import { Locator, Page } from '@playwright/test';

export class LoginPage {
    constructor(public page: Page) { }

    get emailInput(): Locator {
        return this.page.locator('input[name="email"]');
    }

    get passwordInput(): Locator {
        return this.page.locator('input[name="password"]');
    }

    get loginButton(): Locator {
        return this.page.locator('input[type="submit"]');
    }

    async goto() {
        await this.page.goto('/auth/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}