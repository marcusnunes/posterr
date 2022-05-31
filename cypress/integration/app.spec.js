describe('posterr', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays the default posts', () => {
    cy.get('#posts div').should('have.length', 2);

    cy.get('#posts div').first().should('have.text', 'Pay electric bill');
    cy.get('#posts div').last().should('have.text', 'Walk the dog');
  });
});
