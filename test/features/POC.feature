Feature: Login
    As a User
    I want to log in

      Scenario: Login as Manager
          Given I open the site "login"
           When I click on the "loginButton"
            And I set "managerEmail" to the inputfield "email"
            And I click on the "loginNextButton"
            And I set "managerPassword" to the inputfield "loginPassword"
            And I click on the "signInButton"
           Then I expect the url to contain "dashboard"
           When I pause for 4000ms
           When I click on the "navMenu"
            And I pause for 4000ms
            And I click on the "logoutButton"
           Then I expect the url to contain "login"
          When I close the last opened window

     Scenario: Login as Employee
         Given I open the site "login"
          When I click on the "loginButton"
           And I set "employeeEmail" to the inputfield "email"
           And I click on the "loginNextButton"
           And I set "employeePassword" to the inputfield "loginPassword"
           And I click on the "signInButton"
          Then I expect the url to contain "dashboard"
          When I pause for 4000ms
          When I click on the "navMenu"
           And I pause for 4000ms
           And I click on the "logoutButton"
          Then I expect the url to contain "login"
        When I close the last opened window
    Scenario: Login as Buddy
        Given I open the site "login"
         When I click on the "loginButton"
          And I set "buddyEmail" to the inputfield "email"
          And I click on the "loginNextButton"
          And I set "buddyPassword" to the inputfield "loginPassword"
          And I click on the "signInButton"
         Then I expect the url to contain "dashboard"
         When I pause for 4000ms
         When I click on the "navMenu"
          And I pause for 4000ms
          And I click on the "logoutButton"
         Then I expect the url to contain "login"
          When I close the last opened window
