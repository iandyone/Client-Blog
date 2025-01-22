describe('Privacy page test', () => {
  it('Privacy page should be rendered', () => {
    cy.visit('http://localhost:3000/en/privacy');
    cy.get('[data-testid=privacy-page]').should('be.visible');
  });

  it('Privacy page components should be rendered', () => {
    const components = ['banner', 'privacy'];

    components.forEach((name) => {
      cy.get(`[data-testid=${name}-component]`).should('be.visible');
    });
  });
});
