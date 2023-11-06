describe('App layout test', () => {
  it('Header elements should be visible', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid=header]').should('be.visible');
    cy.get('[data-testid=header-logo]').should('be.visible');
    cy.get('[data-testid=navigation]').should('be.visible');
    cy.get('[data-testid=header-media-button]').should('be.visible');
  });

  it('Should play video by clicking the header button', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=header-media-button]').should('be.visible').click();
    cy.get('[data-testid=modal-media]').should('be.visible');
    cy.get('[data-testid=popup-close-button]').should('be.visible').click();
  });

  it('Routing test', () => {
    const navButtons = ['home', 'blog', 'about-us', 'contact-us'];

    navButtons.forEach((route) => {
      cy.get(`[data-testid=route-${route}]`).eq(0).should('be.visible').click();
      cy.get(`[data-testid=${route}-page`).should('be.visible');
    });
  });

  it('Footer elements should be visible', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=footer]').should('be.visible');
    cy.get('[data-testid=footer-navigation]').should('be.visible');
    cy.get('[data-testid=footer-emailer]').should('be.visible');

    cy.get('[data-testid=route-privacy-policy').should('be.visible').click();
    cy.get('[data-testid=privacy-page').should('be.visible');
  });
});
