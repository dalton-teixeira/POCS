Feature: Manager test
    As a Manager in Dashboard
    I want to answer an assessment

Scenario: open URL
    Given I open the url "http://acpm-staging.avenuecode.com"
    Then  I expect that the url is "http://acpm-staging.avenuecode.com/dashboard"
    And   I expect that the title is "AC Management"
