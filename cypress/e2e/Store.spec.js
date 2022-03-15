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

context('Store > Search for gitHub Users', {browser: 'electron'}, () => {
  // it('shoul type in the search field', () => {
  //   cy.visit('http://localhost:3000')

  //   cy.get('input[type="search"]')
  //     .type('Some text Here')
  //     .should('have.value', 'Some text Here')
  // })
  // it('shoul display the repositories', () => {
  //   cy.visit('http://localhost:3000')

  //   cy.get('input[type="search"]').type('sallescosta')
  //   cy.get('form').submit()
  //   cy.get('body').contains('NewCapital.in')
  //   cy.get('#repos').should('exist')
  // })

  // it('should show an error when user not exist', () => {
  //   cy.visit('http://localhost:3000')
  //   cy.get('input[type="search"]').type('gsgsgsgsgsgsgsgsgsgsg')
  //   cy.get('form').submit()
  //   cy.get('body').contains('not found')
  // })

  it.only('should copy and paste the user', () => {
    const textToCopy = 'k'
    cy.visit('http://localhost:3000')
    cy.get('#k').click()
    cy.window().its('navigator.clipboard')
    .invoke('readText')
    // .should('equal', textToCopy)
    .then((text) => {
      // paste the text from the clipboard into the text area
      cy.get('input[type="search"]').click().invoke('val', text)
  })
})})
