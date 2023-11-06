describe('Author page test', () => {
  it('Author page should be rendered', () => {
    cy.visit('http://localhost:3000/en/author');
    cy.get('[data-testid=default-author-page]').should('be.visible');
  });

  it('Author page components should be rendered', () => {
    const components = ['author', 'author-posts'];

    components.forEach((name) => {
      cy.get(`[data-testid=${name}-component]`).should('be.visible');
    });
  });

  it('My posts component should include only the author posts', () => {
    cy.get('[data-testid=digest-post]').should('be.visible').should('have.length.gte', 1);
    const totalusers = 8;
    const userPostsCounterMinValue = 2;

    for (let index = 1; index <= totalusers; ++index) {
      cy.visit(`http://localhost:3000/en/author/${index}`);
      cy.get('[data-testid=digest-post]').as('digest');
      cy.get('@digest').should('be.visible').should('have.length.gte', userPostsCounterMinValue);
      let user = '';

      for (let digets = 1; digets <= userPostsCounterMinValue; ++digets) {
        cy.get('@digest').eq(digets).click();
        cy.get('[data-testid=user-name]').as('username');

        if (!user) {
          cy.get('@username')
            .invoke('text')
            .then((text) => {
              user = text;
            });
        } else {
          cy.get('@username').should('have.text', user);
        }
      }
    }
  });
});
