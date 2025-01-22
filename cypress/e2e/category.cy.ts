describe('Category page test', () => {
  const categories = ['business', 'economy', 'startup', 'technology'];

  it('Category page should be rendered', () => {
    categories.forEach((category) => {
      cy.visit(`http://localhost:3000/en/category/${category}`);
      cy.get(`[data-testid=${category}-category-page]`).should('be.visible');
    });
  });

  it('Category page components should be rendered', () => {
    const components = ['banner', 'feed'];

    components.forEach((name) => {
      cy.get(`[data-testid=${name}-component]`).should('be.visible');
    });
  });

  it('Categories menu should change the category page', () => {
    categories.forEach((category) => {
      const categoryTitle = category[0].toUpperCase() + category.slice(1);

      cy.visit(`http://localhost:3000/en/category/${category}`);
      cy.get('[data-testid=banner-title]').should('have.text', category);
      cy.get('[data-testid=banner-label]').should('include.text', category);

      cy.get('[data-testid=preview-label]').as('label');
      cy.get('@label')
        .its('length')
        .then((length) => {
          for (let post = 1; post <= length; ++post) {
            cy.get('@label')
              .eq(post - 1)
              .should('have.text', categoryTitle);
          }
        });
    });
  });

  it('Category page contains components with about current category', () => {
    cy.get('[data-testid=categories-menu]').should('be.visible');
    cy.get('[data-testid=categories-menu-option]').as('options');
    cy.get('@options').should('have.length.gte', 4);
    cy.get('[data-testid=preview-label]').as('label');

    cy.get('@options')
      .its('length')
      .then((length) => {
        for (let category = 0; category < length; ++category) {
          const categoryTitle = categories[category][0].toUpperCase() + categories[category].slice(1);

          cy.get('@options').eq(category).click();
          cy.get('@label').eq(0).should('have.text', categoryTitle);
        }
      });
  });

  it('Should can type tag and find the posts', () => {
    cy.get('[data-testid=categories-input]').as('input');
    cy.get('[data-testid=categories-submit-button]').as('button');
    cy.get('@input').should('be.visible').type(categories[0]).should('have.value', categories[0]);
  });
});
