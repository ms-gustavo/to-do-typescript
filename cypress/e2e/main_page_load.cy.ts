describe("Main Page Load", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display header, main and footer sections", () => {
    cy.get("header").should("exist");
    cy.get("main").should("exist");
    cy.get("footer").should("exist");
  });
});
