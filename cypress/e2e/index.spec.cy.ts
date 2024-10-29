
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

  it('should display 2 when "1 * 2 = " is clicked', () => {

    cy.get('.key-1').click();
    cy.get('.key-multiply').click();
    cy.get('.key-2').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '2');

  });

  it('should display 1 when "6 - 5 = " is clicked', () => {

    cy.get('.key-6').click();
    cy.get('.key-subtract').click();
    cy.get('.key-5').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '1');

  });

  it('should display 2 when "6 / 3 = " is clicked', () => {

    cy.get('.key-6').click();
    cy.get('.key-divide').click();
    cy.get('.key-3').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '2');

  });

  it('should display "0" when "5 clear " is clicked', () => {

    cy.get('.key-5').click();
    cy.get('.key-clear').click();
    
    cy.get('.calculator-display').should('have.text', '0');

  });

  it('should display "11" when "5 * 3 - 4" is clicked', () => {

    cy.get('.key-5').click();
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();
    cy.get('.key-subtract').click();
    cy.get('.key-4').click();
    cy.get('.key-equals').click();
    
    cy.get('.calculator-display').should('have.text', '11');

  });

  it('should display "11" when "5 * 3 - 4" is clicked', () => {

    cy.get('.key-5').click();
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();
    cy.get('.key-subtract').click();
    cy.get('.key-4').click();
    
    
    cy.get('.calculator-display').should('have.text', '15-4');

  });

  it('should display 3 when "1.5 * 2" is clicked', () => {

    cy.get('.key-1').click();
    cy.get('.key-dot').click();
    cy.get('.key-5').click();
    cy.get('.key-multiply').click();
    cy.get('.key-2').click();
    cy.get('.key-equals').click();

    cy.get('.calculator-display').should('have.text', '3');

  });

  it('should display "3" when "5 * 3 - 4 clear 3" is clicked', () => {

    cy.get('.key-5').click();
    cy.get('.key-multiply').click();
    cy.get('.key-3').click();
    cy.get('.key-subtract').click();
    cy.get('.key-4').click();
    cy.get('.key-equals').click();
    cy.get('.key-clear').click();
    cy.get('.key-3').click();
    
    cy.get('.calculator-display').should('have.text', '3');

  });

});
