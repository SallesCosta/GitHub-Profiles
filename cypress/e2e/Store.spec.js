/* eslint-disable no-undef */
/// <reference types="cypress" />
context('Store', () => {
  it('should display the store', () => {
    cy.visit('http://localhost:3000')

    cy.get('body').contains('GitHub profiles')
    cy.get('body').contains('try')
    cy.get('body').contains('sallescosta')
    cy.get('body').contains('gaearon')
  })
})

context('Store > Search for gitHub Users', () => {
  it('shoul type in the search field', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[type="search"]')
      .type('Some text Here')
      .should('have.value', 'Some text Here')
  })
  it.only('shoul display the repositories', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[type="search"]').type('sallescosta')
    cy.get('form').submit()
    cy.get('body').contains('NewCapital.in')
    cy.get('#repos').should('exist')
  })
})
