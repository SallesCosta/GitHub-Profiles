/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Store', () => {
  it('should display the store', () => {
    cy.visit('http://localhost:3000')
    cy.get('body').contains('GitHub profiles')
    cy.get('body').contains('Sugestions to try')
    cy.get('body').contains('gaearon')
  })
})

context('Search for gitHub Users', () => {
  it('shoul type in the search field', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[type="search"]')
      .type('Some text Here')
      .should('have.value', 'Some text Here')
  })
  it('should show the SallesCosta profile', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[type="search"]').type('SallesCosta')
    cy.get('#submit').click()
    cy.get('body').contains('NewCapital.in')
    cy.get('#repos').should('exist')
  })

  it('should show an error when user does not exist', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[type="search"]').type('gsgsgsgsgsgsgsgsgsgsg')
    cy.get('form').submit()
    cy.get('body').contains('not found')
  })

  it('should copy the userName by clicking in the button', { browser: 'chrome' }, () => {
    cy.visit('http://localhost:3000')
    cy.get('#k').click()

    cy.window()
      .its('navigator.clipboard')
      .invoke('readText')
      .should('equal', 'k')
      .then((text) => {
        cy.get('input[type="search"]').click().invoke('val', text)
      })
  })
})
