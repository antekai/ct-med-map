describe("User view, edit, remove location", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("views and deletes location", () => {
    cy.contains("Load mockData").click();
    cy.get("#0 .ant-card-head-title").should(
      "have.text",
      "Charite Virchow Klinikum"
    );
    cy.get("[data-icon=delete]:first").click();
    cy.contains("Charite Virchow Klinikum").should("not.exist");
  });

  it("deletes all locations", () => {
    cy.contains("RemoveAll")
      .wait(500)
      .click();
    cy.contains("Latitude").should("not.exist");
  });

  it("displays error for empty fields", () => {
    cy.get("[data-icon=edit]")
      .eq(1)
      .click();
    cy.get("#1 input#name").clear();
    cy.contains("Please enter name").should("exist");
    cy.get("#1 input#lat").clear();
    cy.contains("Please add latitude!").should("exist");
    cy.get("#1 input#lon").clear();
    cy.contains("Please add longitude!").should("exist");
  });

  it("displays error for invalid input", () => {
    cy.get("[data-icon=edit]:first").click();
    cy.get("#0 input#name")
      .clear()
      .type("!#$%");
    cy.contains("Invalid name").should("exist");
    cy.get("#0 input#lat")
      .clear()
      .type("49");
    cy.contains("Invalid latitude format").should("exist");
    cy.get("#0 input#lon")
      .clear()
      .type("243.6");
    cy.contains("Invalid longitude format").should("exist");
  });

  it("edits a (valid) location", () => {
    cy.get("[data-icon=edit]:first").click();
    cy.get("#0 input#name")
      .clear()
      .type("cypLoc");
    cy.get("#0 input#lat")
      .clear()
      .type("49.9999");
    cy.get("#0 input#lon")
      .clear()
      .type("11.9999");
    cy.get("[data-icon=check]:first").click({ force: true });
    cy.get("#0").should(
      "have.text",
      "cypLocLatitude: 49.9999Longitude: 11.9999"
    );
  });
});
