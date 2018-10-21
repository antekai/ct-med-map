describe("User adds new location", () => {
  beforeEach(() => {
    cy.visit("");
    // alliases and default actions
    cy.contains("Add Location").click();
    cy.get("[data-cy=new-location-name]")
      .as("name")
      .type("CypressHaus");
    cy.get("[data-cy=new-location-lat]")
      .as("lat")
      .clear()
      .type("49.888");
    cy.get("[data-cy=new-location-lon]")
      .as("lon")
      .clear()
      .type("11.1111");
  });

  it("displays error for empty fields", () => {
    cy.get("@name").clear();
    cy.contains(`Location's name is required`);
    cy.get("@lat").clear();
    cy.contains(`latitude is required`);
    cy.get("@lon").clear();
    cy.contains(`longitude is required`);
  });

  it("displays error for invalid input", () => {
    cy.get("@name")
      .clear()
      .type("%^*(");
    cy.contains(`Accepted only letters and numbers`);
    cy.get("@lat")
      .clear()
      .type("12333");
    cy.contains(`invalid latitude`);
    cy.get("@lon")
      .clear()
      .type("12.1234ab");
    cy.contains(`invalid longitude`);
  });

  it("saves New Location", () => {
    cy.contains("span", "Submit").click({ force: true });
    cy.contains("CypressHaus");
    cy.contains("SaveToFirebase").click();
    cy.reload(true);
    cy.contains("CypressHaus");
    cy.get(`[title=CypressHaus]`).should("have.attr", "coords"); //check if location google marker exists
  });
});
