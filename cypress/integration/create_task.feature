Feature: Create Task

  Scenario: User tries to create a task without a title
    Given I visit the main page
    When I try to create a task without a title
    Then I should see an alert with text "Adicione um título a tarefa!"

    Scenario: User successfully creates a task with a title
    Given I visit the main page
    When I add the title "Cypress Test" to the task
    When I add the difficulty 5 to the task
    And I click the create task button
    Then I should see an alert with text "Tarefa criada com sucesso!"
    And I should see the task "Cypress Test" in the task list
    And the task "Cypress Test" should have edit and delete options