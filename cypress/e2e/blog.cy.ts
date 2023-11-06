import { Category } from '../../src/types/enums';

describe('Blog page test', () => {
  it('Blog page should be rendered', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=route-blog]').eq(0).should('be.visible').click();
    cy.get('[data-testid=blog-page]').should('be.visible');
  });

  it('Blog page components should be rendered', () => {
    const components = ['step-by-step-blog', 'blog', 'categories', 'join-us'];

    components.forEach((name) => {
      cy.get(`[data-testid=${name}-component]`).should('be.visible');
    });
  });

  it('Post component should navigate to the post page', () => {
    cy.get('[data-testid=digest-component]').should('be.visible');
    cy.get('[data-testid=sbsb-button]').should('be.visible').click();
    cy.get('[data-testid=default-post-page]').should('be.visible');
    cy.get('[data-testid=route-blog]').eq(0).should('be.visible').click();
  });

  it('Step By Step component button should navigate to the default  post page', () => {
    cy.get('[data-testid=digest-post]').should('be.visible').should('have.length', 5).eq(0).click();
    cy.get('[data-testid=post-page]').should('be.visible');
    cy.get('[data-testid=route-blog]').eq(0).should('be.visible').click();
  });

  it('Category card should navigate to the category page', () => {
    Object.keys(Category).forEach((category) => {
      const categoryCardTestID = `${category.toLowerCase()}-category-card`;
      cy.get(`[data-testid=${categoryCardTestID}]`).should('be.visible').click();
      cy.get(`[data-testid=${category.toLowerCase()}-category-page]`).should('be.visible');
      cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
    });
  });

  it('Join us component button should navigate to the contact page', () => {
    cy.get('[data-testid=join-us-button]').should('be.visible').click();
    cy.get('[data-testid=contact-us-page]').should('be.visible');
    cy.get('[data-testid=route-home]').eq(0).should('be.visible').click();
  });
});
