const components = [
  'step-by-step-home',
  'overview',
  'about-us-banner',
  'categories',
  'why-we-started',
  'authors',
  'labels',
  'testimonals',
  'join-us',
];

describe('Home page test', () => {
  it('Home page should be rendered', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=home-page]').should('be.visible');
  });

  it('Step By Step component button should navigate to the post page', () => {
    cy.get('[data-testid=sbsh-button]').should('be.visible').click();
    cy.get('[data-testid=default-post-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });

  it('Feature post component button should navigate to the post page', () => {
    cy.get('[data-testid=footer]').should('be.visible');
    cy.get('[data-testid=footer-navigation]').should('be.visible');
    cy.get('[data-testid=footer-emailer]').should('be.visible');
    cy.get('[data-testid=route-privacy-policy').should('be.visible').click();
    cy.get('[data-testid=privacy-page').should('be.visible');
  });

  it('All posts component button should navigate to the blog page', () => {
    cy.get('[data-testid=header-media-button]').should('be.visible').click();
    cy.get('[data-testid=modal-media]').should('be.visible');
    cy.get('[data-testid=popup-close-button]').should('be.visible').click();
  });
});

