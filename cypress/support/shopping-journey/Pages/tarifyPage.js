Cypress.Commands.add('clickKoupitButton', (page,index) => {
  cy.url().should('contain', '/tarify'); // verify tarify in url
  cy.get(page.KoupitButtons, { timeout: 20000 }).eq(index).click(); // click on koupit button
});

Cypress.Commands.add('selectBootBoxOption', (page,index) => {
  cy.get(page.Bootbox, { timeout: 20000 }).should('be.visible'); // verify bootbox present
  cy.get(page.BootboxOptions, { timeout: 20000 }).eq(index).click(); // click on bootbox options
  cy.once('url:changed', () => true); // wait until url changed
});

Cypress.Commands.add('clickOnBuyButton', (page) => {
  cy.url().should('contain', '/kosik'); // verify kosik in url
  cy.get(page.Buybutton, { timeout:20000 }).click(); // click on buy button
  cy.once('url:changed', () => true); // wait until url changed
});

Cypress.Commands.add('FillCheckoutFields', (page) => {
  cy.url().should('contain', '/kosik/checkout'); // verify kosik checkout in url
  cy.get(page.emailfield).clear().type(page.email); // enter email in email field
  cy.get(page.fullNameField).clear().type(page.fullName); // enter full name in name field
  cy.get(page.phoneNoField).clear().type(page.phoneNo); // enter phone no in phoneNo field
  cy.get(page.streetField).clear().type(page.street); // enter street in street field
  cy.get(page.cityField).clear().type(page.cityName); // enter city in city field
  cy.get(page.zipCodeField).clear().type(page.zipCode); // enter zipcode in zipcode field
  cy.get(page.idField).clear().type(page.idNo); // enter id no in idNo field
  cy.get(page.birthField).clear().type(page.birthNo); // enter birth no in birthNo field
  cy.get(page.submitButton, { timeout:20000 }).click(); // click on submit button
});
