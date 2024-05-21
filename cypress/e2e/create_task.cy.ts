describe("Create task", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show alert when user tries to create a task without a title", () => {
    cy.get("input[type=submit]").contains("Criar tarefa").click();

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Adicione um título a tarefa!");
    });
  });

  it("should show alert when user tries to create a task with a title", () => {
    const taskTitle = "Cypress Test";
    const taskDifficulty = "5";
    cy.get("#task-form").within(() => {
      cy.get("input[name=title]").type(taskTitle);
      cy.get("input[name=difficulty]").type(taskDifficulty);
    });
    cy.get("input[type=submit]").contains("Criar tarefa").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Tarefa criada com sucesso!");
    });
    cy.get("#task-list-item").should("exist");
    cy.get("#task-list-item-details").contains("h4", taskTitle).should("exist");
    cy.get("#task-list-item-details")
      .contains("p", taskDifficulty)
      .should("exist");
    cy.get("#task-list-item-actions").find(".bi.bi-pencil").should("exist");
    cy.get("#task-list-item-actions").find(".bi.bi-trash").should("exist");
  });
});
