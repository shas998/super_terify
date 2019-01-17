import './Pages/tarifyPage';

Cypress.Commands.add('visitTarify', (page) => {
  cy.visit('/tarify/'); // update url to visit tarify
  cy.title().should('include', 'tarify'); // verify tarify page
});
