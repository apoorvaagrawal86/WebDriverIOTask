# WebdriverIOTask
Test suite for automating 'A million more' campaign for Volvo Cars.
The test suite is created using Webdriver.IO in Page Object Model.
The initial test result suite is using spec.
'LandingPage' contains all the locators for the different web elements used in the 'A million more' page.
'Page' contains the path to the browser URL.
'a-million-more' spec file contains a number of tests which are created in the 'A million more' page using the locators on 'LandingPage'.

Tests should be run using the command - npm run wdio
The above command should be run in the root folder of the WebDriverIOTask repository.
Once the tests are executed, run the following command to generate the results in 'allure-results' folder - 'allure generate allure-results' followed by 'allure open'.
The allure-open command will open the results in a web browser.
Use Ctrl+c to exit the allure server.
