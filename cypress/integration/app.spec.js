describe('posterr', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays the default posts', () => {
    cy.get('#posts div').should('have.length', 2);

    cy.get('#posts div').first().should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
    cy.get('#posts div').last().should('have.text', 'This is my first posterr');
  });
});
