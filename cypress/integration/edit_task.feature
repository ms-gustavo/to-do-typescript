Feature: Edit Task

  Scenario: User successfully edits a task
    Given I visit the main page
    When I add the title "Cypress Test" to the task
    And I add the difficulty 5 to the task
    And I click the create task button
    Then I should see an alert with text "Tarefa criada com sucesso!"
    And I should see the task "Cypress Test" in the task list
    And the task "Cypress Test" should have edit and delete options
    When I click the edit option for the task "Cypress Test"
    Then I should see a modal with id "edit-modal"
    And the modal should contain an input with the title "Cypress Test"
    And the modal should contain an input with the difficulty "5"
    And the modal should contain a submit input with value "Editar Tarefa"
