# PVH assigmnet tests with WebDriverIO and Cucumber

 
These tests are developed in TypeScript with WebDriverIO and Cucumber

## Features

-   TypeScript
-   WebdriverIO
-   Page Object Pattern
-   Cucumber
-   Allure report (screenshots on failure)

## Requirements

-   node >= 12.18.x
-   npm >= 6.14.x 

## Getting Started

Install the dependencies:

```bash
npm install
```

Run e2e tests:

```bash
npm run wdio
```

## Reports

### Allure

Run this command to generate the allure report in the directory `./reports/allure-results`:

```bash
allure generate reports/allure-results/
```

Run this command to clean an existing allure report and create a new one:

```bash
allure generate reports/allure-results/ --clean
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
allure open
```
