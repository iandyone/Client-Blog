describe('Post page test', () => {
  it('Post page should be rendered', () => {
    cy.visit('http://localhost:3000/en/post');
    cy.get('[data-testid=default-post-page]').should('be.visible');
  });

  it('Post page components should be rendered', () => {
    const components = ['blog-post', 'join-us'];

    components.forEach((name) => {
      cy.get(`[data-testid=${name}-component]`).should('be.visible');
    });
  });

  it('Read next component should provide posts with the same label', () => {
    cy.get('[data-testid=blog-post-label]').should('be.visible').should('have.text', 'Startup');
    cy.get('[data-testid=digest-post]').should('be.visible').should('have.length', 3);

    cy.get('[data-testid=preview-label]').as('labels');
    cy.get('@labels').should('be.visible').should('have.length', 3);
    cy.get('@labels').eq(0).should('have.text', 'Startup');
    cy.get('@labels').eq(1).should('have.text', 'Startup');
    cy.get('@labels').eq(2).should('have.text', 'Startup');
  });

  it('Join us component button should navigate to the contact page', () => {
    cy.get('[data-testid=join-us-button]').should('be.visible').click();
    cy.get('[data-testid=contact-us-page]').should('be.visible');
    cy.visit('http://localhost:3000/en/post');
  });
});
