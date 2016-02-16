Feature: Employee Assessment
    As a Employee in Dashboard
    I want to answer an assessment

Scenario: Answer Assessment
    Given I open the url "http://acpm-staging.avenuecode.com"
     Then I expect that the url is "http://acpm-staging.avenuecode.com/dashboard"
      And I expect that the title is "AC Performance Management"
     When I click on the "loginButton"
     When
