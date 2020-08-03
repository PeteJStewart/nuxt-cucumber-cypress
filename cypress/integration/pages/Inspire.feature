Feature: Inspire page
 
  As a visitor to the inspire page
  I want to see Inspire in the title
  I want to see an inspirational quote
  
  Scenario: Opening inspire page and see Inspire in the title
    Given I am on the inspire page
    Then I see "Inspire" in the title

  Scenario: Opening inspire page and see inspirational quote
    Given I am on the inspire page
    Then page contains "First, solve the problem. Then, write the code."

  Scenario: Open navigation on inspire page
    Given I am on the inspire page
      And I toggle navigation drawer
    Then "Welcome" text should be visible