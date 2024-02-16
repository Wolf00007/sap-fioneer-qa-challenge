# SAP Fioneer QA Challenge

The QA Challenge has been written using **JavaScript** and **Cypress**. There are three tests that check the website: _https://www.sapfioneer.com/_. The tests are created for a recruitment task and demonstrate basic navigation and form validation capabilities. All tests have been performed in **Google Chrome** browser using **Windows 11**.

## Test 1: Verifies that all "Get in touch" buttons have yellow color.
1. Loads the webpage https://www.sapfioneer.com/.
2. Verifies that all buttons with text "Get in touch" have proper yellow color.

## Test 2: Verifies that user is redirected to the 'ESG KPI Engine' page after clicking on a proper hyperlink.
1. Loads the webpage https://www.sapfioneer.com/.
2. On the Finance & ESG bookmark, clicks on the ESG KPI Engine hyperlink.
3. Verifies that a proper webpage has been loaded.

## Test 3: Verifies that while on a Contact page, user gets a correct validation error after entering an incorrect email address.
1. Loads the webpage https://www.sapfioneer.com/.
2. Clicks on the "Get in touch" button.
3. Verifies that a proper webpage has been loaded.
4. In contact form, for Work email field types incorrect email value -> `342323`.
5. Verifies that a proper error message has been shown.

In order to run these tests, please follow the below instructions.

## How to run tests

1. Install **Visual Studio Code** (or use any other editor of your choice).
2. Install **Node.js** (https://nodejs.org/).
3. Create a new folder to which you will clone the repository.
4. Open Visual Studio Code (VS Code) inside this new folder.
5. Open a new **Terminal** within VS Code.
6. Next, enter the following commands one after another:

   ```bash
   git clone https://github.com/Wolf00007/sap-fioneer-qa-challenge
   cd sap-fioneer-qa-challenge
   npm install
   npx cypress open
   ```
   
7. Cypress will open in a new window. Click on the **E2E Testing** section.
   ![Cypress E2E Testing](https://github.com/Wolf00007/sap-fioneer-qa-challenge/assets/36706107/bf3ea495-d925-4748-971e-0480a71b3132)
8. Select **Google Chrome** as the browser and click on **Start E2E Testing in Chrome**.
   ![Start E2E Testing in Chrome](https://github.com/Wolf00007/sap-fioneer-qa-challenge/assets/36706107/b010b98a-a7d4-4220-9ad1-d1a72c552d08)
9. A new Chrome browser will open. While in the **Specs** menu, click on the **QAchallenge.cy.js** file. This will create a test run for all three tests.
10. Afterwards, verify that all three tests have passed.
    ![Test Results](https://github.com/Wolf00007/sap-fioneer-qa-challenge/assets/36706107/7ea18371-8861-45e8-868b-eb5b2f2513df)
11. In order to run the tests again, tap the **R** button on your keyboard.

**Note:** Whenever you make a change in code and save, the tests are run again. So if you make any changes to current tests or add a new one, after you save them in VS Code, the new test run will execute.

## Project structure

1. Tests path: `...\sap-fioneer-qa-challenge\cypress\e2e\QAchallenge.cy.js`
2. Custom commands path: `...\sap-fioneer-qa-challenge\cypress\support\commands.js`
3. Support file path: `...\sap-fioneer-qa-challenge\cypress\support\e2e.js`
