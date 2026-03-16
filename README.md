# Spendwise Playwright Automation

This repository contains **End-to-End automated tests for the Spendwise application** using **Playwright with TypeScript**.

The framework follows modern test automation practices including:

* Page Object Model (POM)
* Custom Playwright Fixtures
* JSON-driven test data
* Authentication via storage state
* Automatic cleanup after execution

---

# Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)
* Custom Fixtures
* JSON Test Data

---

# Project Structure

```
project-root
│
├── tests
│   └── transactions.spec.ts
│
├── pages
│   ├── loginPage.ts
│   ├── dashboardPage.ts
│   └── transactionPage.ts
│
├── fixtures
│   ├── authFixture.ts
│   └── global.d.ts
│
├── data
│   ├── credentials.json
│   └── transactions.json
│
├── storage
│   └── storageState.json
│
├── teardown
│   └── globalTeardown.ts
│
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

---

# Framework Architecture

The framework is designed to maintain **separation of concerns**:

| Layer    | Responsibility                  |
| -------- | ------------------------------- |
| tests    | Test scenarios                  |
| pages    | UI interaction logic            |
| fixtures | Authentication and shared setup |
| data     | Test input data                 |
| storage  | Authentication session          |
| teardown | Environment cleanup             |

---

# Page Object Model

Each page in the application is represented as a class.

---

# Authentication Using Fixtures

Authentication is handled by a **custom Playwright fixture**.

File:

```
fixtures/authFixture.ts
```

# JSON Driven Test Data

Test data is stored separately from test logic.

---

# Storage State

Authentication session is stored in:

```
storage/storageState.json
```
---

# Automatic Cleanup

After all tests complete:

```
teardown/globalTeardown.ts
```

automatically removes:

```
storage/storageState.json
```
---

# Installation

Clone the repository.

```
git clone https://github.com/RubinaGill/PlaywrightForSpendWise.git
cd spendwise-playwright
```

Install dependencies.

```
npm install
```

Install Playwright browsers.

```
npx playwright install
```

---

# Running Tests

Run all tests:

```
npx playwright test
```

---