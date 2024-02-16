describe("SAP Fioneer Website Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.sapfioneer.com/");
  });

  it('Test 1: Verify that all "Get in touch" buttons have yellow color', () => {
    cy.get('a:contains("Get in touch")').each(($element) => {
      cy.wrap($element).should(
        "have.css",
        "background-color",
        "rgb(255, 212, 60)"
      );
    });
  });

  it("Test 2: Verify that user is redirected to the 'ESG KPI Engine' page", () => {
    cy.get("#menu-item-29979").click();
    cy.get("div > a > span.ux-menu-link__text")
      .contains("ESG KPI Engine")
      .should("be.visible")
      .click({ force: true });
    cy.url().should("include", "/finance-esg/esg-kpi-engine/");
  });

  it("Test 3: Verify that while on a Contact page, user gets a correct validation error after entering an incorrect email address", () => {
    cy.contains("Get in touch").click();
    cy.url().should("include", "/contact");

    cy.get("#hs-form-iframe-0").scrollIntoView().should("be.visible");

    cy.getIframeBody()
      .find("div.input input#email-550b0952-ea48-4b4d-b0cc-89ce87f17153")
      .should("be.visible")
      .click()
      .type("342323");

    cy.getIframeBody()
      .contains("Email must be formatted correctly.")
      .should("be.visible");
  });
});
