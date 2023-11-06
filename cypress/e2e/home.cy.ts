import { Category } from '../../src/types/enums';

describe('Home page test', () => {
  it('Home page should be rendered', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=home-page]').should('be.visible');
  });

  it('Home page components should be rendered', () => {
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

    components.forEach((name) => {
      cy.get(`[data-testid=${name}-component]`).should('be.visible');
    });
  });

  it('Step By Step component button should navigate to the post page', () => {
    cy.get('[data-testid=sbsh-button]').should('be.visible').click();
    cy.get('[data-testid=default-post-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });

  it('Feature post component button should navigate to the post page', () => {
    cy.get('[data-testid=feature-post-button]').should('be.visible').click();
    cy.get('[data-testid=default-post-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });

  it('All posts component button should navigate to the blog page', () => {
    cy.get('[data-testid=all-posts-button]').should('be.visible').click();
    cy.get('[data-testid=blog-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });

  it('About us component button should navigate to the blog page', () => {
    cy.get('[data-testid=about-us-button]').should('be.visible').click();
    cy.get('[data-testid=about-us-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });

  it('Category card should navigate to the category page', () => {
    Object.keys(Category).forEach((category) => {
      const categoryCardTestID = `${category.toLowerCase()}-category-card`;
      cy.get(`[data-testid=${categoryCardTestID}]`).should('be.visible').click();
      cy.get(`[data-testid=${category.toLowerCase()}-category-page]`).should('be.visible');
      cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
    });
  });

  it('Why we started component button should navigate to the about us page', () => {
    cy.get('[data-testid=why-we-started-button]').should('be.visible').click();
    cy.get('[data-testid=about-us-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });

  it('Author card should navigate to the author page', () => {
    cy.get('[data-testid=author-card]').should('be.visible').should('have.length', 4).eq(1).click();
    cy.get('[data-testid=author-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });

  it('Testimonials component should have a carousel', () => {
    cy.get('[data-testid=carousel]').should('be.visible');
    cy.get('[data-testid=carousel-button-next]').should('be.visible').click();
    cy.get('[data-testid=carousel-button-prev]').should('be.visible').click();
  });

  it('Join us component button should navigate to the contact page', () => {
    cy.get('[data-testid=join-us-button]').should('be.visible').click();
    cy.get('[data-testid=contact-us-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });
});
