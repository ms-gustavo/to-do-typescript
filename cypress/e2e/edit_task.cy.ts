describe("Edit task", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open an modal when user click in edit action", () => {
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
    cy.get("#task-list-item-actions")
      .find(".bi.bi-pencil")
      .should("exist")
      .click();
    cy.get("#edit-modal").within(() => {
      cy.get(`input[value='${taskTitle}']`).should("exist");
      cy.get(`input[value='${taskDifficulty}']`).should("exist");
      cy.get("input[type=submit]").contains("Editar Tarefa").should("exist");
    });
  });

  it("should close the modal when the user click outside the modal", () => {
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
    cy.get("#task-list-item-actions")
      .find(".bi.bi-pencil")
      .should("exist")
      .click();
    cy.get("#fade-modal").click({ force: true });
    cy.get("#task-list-item-details").contains("h4", taskTitle).should("exist");
  });

  it("should edit an task", () => {
    const taskTitle = "Cypress Test";
    const editTaskTitle = "Cypress Edit Test";
    const taskDifficulty = "5";
    const editTaskDifficulty = "1";
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
    cy.get("#task-list-item-actions")
      .find(".bi.bi-pencil")
      .should("exist")
      .click();
    cy.get("#edit-modal").within(() => {
      cy.get(`input[value='${taskTitle}']`).clear().type(editTaskTitle);
      cy.get(`input[value='${taskDifficulty}']`)
        .type("{selectall}")
        .type(editTaskDifficulty);

      cy.get("input[type=submit]").contains("Editar Tarefa").click();
    });
    cy.get("#task-list").within(() => {
      cy.get("#task-list-item").should("exist");
      cy.get("#task-list-item-details")
        .contains("h4", editTaskTitle)
        .should("exist");
      cy.get("#task-list-item-details")
        .contains("p", editTaskDifficulty)
        .should("exist");
    });
  });
});
