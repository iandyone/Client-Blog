describe('About page test', () => {
  it('About page should be rendered', () => {
    cy.visit('http://localhost:3000/en/about-us');
    cy.get('[data-testid=about-us-page]').should('be.visible');
  });

  it('About page components should be rendered', () => {
    const components = ['about-us', 'team', 'authors', 'join-us'];

    components.forEach((name) => {
      cy.get(`[data-testid=${name}-component]`).should('be.visible');
    });
  });

  it('Author card should navigate to the author page', () => {
    cy.get('[data-testid=author-card]').should('be.visible').should('have.length', 8);

    for (let index = 0; index < 8; ++index) {
      cy.get('[data-testid=author-card-name]')
        .eq(index)
        .invoke('text')
        .then((text) => {
          cy.get('[data-testid=author-card-name]').eq(index).click();
          cy.get('[data-testid=author-title]').should('include.text', text);
          cy.get('[data-testid=route-about-us]').eq(0).should('be.visible').click();
        });
    }
  });

  it('Join us component button should navigate to the contact page', () => {
    cy.get('[data-testid=join-us-button]').should('be.visible').click();
    cy.get('[data-testid=contact-us-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });
});
