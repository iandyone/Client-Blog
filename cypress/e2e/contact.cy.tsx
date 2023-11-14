describe('Contact page test', () => {
  it('Privacy page should be rendered', () => {
    cy.visit('http://localhost:3000/en/contact-us');
    cy.get('[data-testid=contact-us-page]').should('be.visible');
  });

  it('Privacy page components should be rendered', () => {
    const components = ['contact-us', 'map'];

    components.forEach((name) => {
      cy.get(`[data-testid=${name}-component]`).should('be.visible');
    });
  });

  it('Contact form should send a message', () => {
    cy.get('[data-testid=contact-input-username]')
      .should('be.visible')
      .type('User Name')
      .should('have.value', 'User Name');

    cy.get('[data-testid=contact-input-email]')
      .should('be.visible')
      .type('iandyone.dev@gmail.com')
      .should('have.value', 'iandyone.dev@gmail.com');

    cy.get('[data-testid=contact-input-message]')
      .should('be.visible')
      .type('Text Message')
      .should('have.value', 'Text Message');

    cy.get('[data-testid=contact-submit-button]')
      .should('be.visible')
      .should('have.text', 'Send Message')
      .click();
  });
});
