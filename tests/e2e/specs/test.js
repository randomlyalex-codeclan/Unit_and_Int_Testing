// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should have working number buttons', () => {
		cy.get('#number2').click();
		cy.get('.display').should('contain', '2');
	});

	it('should concatenate multiple number button clicks', () => {
		cy.get('#number6').click();
		cy.get('#number6').click();
		cy.get('#number6').click();
		cy.get('.display').should('contain', '666');
	});

	it('multiple operations be chained together', () => {
		cy.get('#number8').click();
		cy.get('#number7').click();
		cy.get('#operator_multiply').click();
		cy.get('#number6').click();
		cy.get('#operator_subtract').click();
		cy.get('#number4').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', '518');
	});

	it('should work with positive numbers', () => {
		cy.get('#number1').click();
		cy.get('#operator_add').click();
		cy.get('#number1').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', '2');
	});

	it('should show negative numbers', () => {
		cy.get('#number1').click();
		cy.get('#operator_subtract').click();
		cy.get('#number3').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', '-2');
	});

	it('should work with decimals', () => {
		// this calculator doesnt have a decimal input, only output?
		cy.get('#number9').click();
		cy.get('#operator_divide').click();
		cy.get('#number5').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', '1.8');
	});

	it('check large number', () => {
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#operator_multiply').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#number9').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', '999998000001');
	});

	it('show error on divide by zero', () => {
		cy.get('#number1').click();
		cy.get('#operator_divide').click();
		cy.get('#number0').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', 'cannot divide by zero');
	});
});
