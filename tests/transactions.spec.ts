import { test, expect } from '../fixtures/authFixture';

import { DashboardPage } from '../pages/dashboardPage';
import { TransactionPage } from '../pages/transactionPage';
import * as fs from 'fs';
import path from 'path';

const transactionData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/transactions.json'), 'utf-8'));
test.describe('Transactions', () => {
  let dashboardPage: DashboardPage;
  let transactionPage: TransactionPage;

  test.beforeEach(async ({ loggedInPage }) => {
    dashboardPage = new DashboardPage(loggedInPage);
    transactionPage = new TransactionPage(loggedInPage);

    await dashboardPage.goto();
  });

  test('should create a new transaction', async () => {
    const { description, amount, date, category } = transactionData.newTransaction;
    await dashboardPage.clickAddTransaction();
    await transactionPage.fillTransactionForm(description, amount, date, category);
    await transactionPage.saveTransaction();

    await expect(dashboardPage.page.getByText(description)).toBeVisible();
  });

  test('should edit an existing transaction', async () => {
    const { description, amount, date, category } = transactionData.editTransaction;
    await dashboardPage.gotoTransactionHistory();
    await dashboardPage.openTransactionForEdit(description);
    await transactionPage.editTransaction(description + ' Edited', amount, date, category);
    await expect(dashboardPage.page.getByText(description + ' Edited')).toBeVisible();
  });
});
