// rename the file to Store.spec.js
/* eslint-disable no-undef */
/// <reference types="cypress" />
// context('Store', () => {
//   it('should display the store', () => {
//     cy.visit('http://localhost:3000')
//
//     cy.get('body').contains('GitHub profiles')
//     cy.get('body').contains('try')
//     cy.get('body').contains('benfrain')
//     cy.get('body').contains('gaearon')
//   })
// })
//
// context('Search for gitHub Users ', { browser: 'electron' }, () => {
//   it('shoul type in the search field', () => {
//     cy.visit('http://localhost:3000')
//
//     cy.get('input[type="search"]')
//       .type('Some text Here')
//       .should('have.value', 'Some text Here')
//   })
//   it('shoul display the repositories', () => {
//     cy.visit('http://localhost:3000')
//
//     cy.get('input[type="search"]').type('sallescosta')
//     cy.get('form').submit()
//     cy.get('body').contains('NewCapital.in')
//     cy.get('#repos').should('exist')
//   })
//
//   it('should show an error when user not exist', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('input[type="search"]').type('gsgsgsgsgsgsgsgsgsgsg')
//     cy.get('form').submit()
//     cy.get('body').contains('not found')
//   })
//
//   it('should copy and paste the user', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('#x').click()
//     cy.window()
//       .its('navigator.clipboard')
//       .invoke('readText')
//       .should('equal', 'x')
//       .then((text) => {
//         cy.get('input[type="search"]').invoke('val', text).click()
//         cy.get('input[type="search"]').should('have.value', 'x')
//         cy.get('body').contains('Copied')
//         // cy.get('form').submit()
//       })
//   })
// })
