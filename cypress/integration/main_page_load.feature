Feature: Main Page Load

  Scenario: Display header, main, and footer sections
    Given I visit the main page
    Then I should see the header section
    And I should see the main section
    And I should see the footer section

   Scenario: Load TaskForm component
    Given I visit the main page
    Then I should see the TaskForm component
    And I should see an h2 with content "O que você vai fazer?"
    And I should see a form with:
      | label       | input        |
      | title       | input[type=text][name=title] |
      | difficulty  | input[type=text][name=difficulty] |
      | submit      | input[type=submit][value=Criar tarefa] |

   Scenario: Load TaskList component
    Given I visit the main page
    Then I should see the TaskList component
    And I should see an h2 with content "Suas tarefas"
    And I should see an p with content "Não há tarefas cadastradas!"
