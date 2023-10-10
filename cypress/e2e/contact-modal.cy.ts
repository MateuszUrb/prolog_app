describe("Contact Modal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });
  });
  it("opens modal", () => {
    const modal = cy.get("main + button").click();
    modal.get("dialog").should("be.visible");
    modal.get("dialog > div h2").contains("Contact Us Via Email");
    modal.get("dialog  div + div > *").should("have.length", 2);
  });
  it("closes modal when cancel button is clicked or esc button", () => {
    const modal = cy.get("main + button").click();
    modal.trigger("keydown", { key: "esc", force: true });
    modal.get("dialog > div + div > button ").click();
    modal.get("dialog").should("not.be.visible");
  });
  it("should open user client email", () => {
    const modal = cy.get("main + button").click();
    modal
      .get("a[href='mailto:prolog@proofy.dev']")
      .invoke("attr", "href")
      .should("equal", "mailto:prolog@proofy.dev");
  });
});
