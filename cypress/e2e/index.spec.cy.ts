
describe('Calculator Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('should have the title "Calculator App"', () => {
    cy.get('title').should('have.text', 'Calculator App');
  });

  it('should display 2 when "1 + 1 = " is clicked', () => {

    cy.get('.key-1').click();
    cy.get('.key-add').click();
    cy.get('.key-1').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '2');

  });

});
