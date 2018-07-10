# ProtractorProjectFinal



In this Project, End-to-end testing has been performed on a front end UI product using Protractor framework.  Protractor needs two files to run,
Configuration File and a Spec File. Configuration File is used to define the test environment and contains information about the Spec File(s)
Browsers, and the framework that has been used to write the tests. Spec File, on the other hand, have detailed step definitions and the logical
test execution using the syntax of the framework that has been mentioned in the Configuration File.

The tests have been designed to use Page Object Model to separate the UI objects and the tests that are interacting with them.

There are 3 page object files which contain the web elements pertaining to each of the web page under test.
1.HomePageObject.js
2.SearchPropertyResults.js
3.PropertyDetails.js

In order to run Tests using the following command:
protractor ConfigFile
