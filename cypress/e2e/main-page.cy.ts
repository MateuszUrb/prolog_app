describe("Main page ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });
  });
  it("have all links in navigation", () => {
    cy.get("nav").find("a").should("have.length", 4);
  });
  it("have a link to dashboard and redirect to it", () => {
    cy.get("header a").contains("Open Dashboard").click();
    cy.url().should("be.equal", "http://localhost:3000/dashboard");
  });
});
