// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
import 'cypress-wait-until';

Cypress.Commands.add('visitPage', () => {
  cy.visit('/');
})