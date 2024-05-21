Feature: Delete Task

  Scenario: User successfully deletes a task
    Given I visit the main page
    When I add the title "Cypress Test" to the task
    And I add the difficulty 5 to the task
    And I click the create task button
    Then I should see an alert with text "Tarefa criada com sucesso!"
    And I should see the task "Cypress Test" in the task list
    And the task "Cypress Test" should have edit and delete options
    When I click the delete option for the task "Cypress Test"
    Then I should not see the task "Cypress Test" in the task list