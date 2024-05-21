Feature: Main Page Load

  Scenario: Display header, main, and footer sections
    Given I visit the main page
    Then I should see the header section
    And I should see the main section
    And I should see the footer section