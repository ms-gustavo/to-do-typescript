describe("Main Page Load", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display header, main and footer sections", () => {
    cy.get("header").should("exist");
    cy.get("main").should("exist");
    cy.get("footer").should("exist");
  });

  it("should load TaskForm component", () => {
    cy.get("#task-form").should("exist");
    cy.get("h2").contains("O que você vai fazer?").should("exist");
    cy.get("#task-form").within(() => {
      cy.get("label").contains("Título").should("exist");
    });
    cy.get("input[name=title]").should("exist");
    cy.get("label").contains("Dificuldade").should("exist");
    cy.get("input[name=difficulty]").should("exist");
    cy.get("input[type=submit]").contains("Criar tarefa").should("exist");
  });

  it("should load TaskList component", () => {
    cy.get("#task-list").should("exist");
    cy.get("h2").contains("Suas tarefas").should("exist");
    cy.get("p").contains("Não há tarefas cadastradas!").should("exist");
  });
});
