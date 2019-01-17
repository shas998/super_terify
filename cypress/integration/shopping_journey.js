import { tarifyPage, kosikPage} from '../support/shopping-journey/PageObjects/tarifyPageObject.js';

describe('Shopping Journey', () => {
    beforeEach(() => {
      // is triggered in every created test
    });

    before(() => {
      // first thing that happens before tests
    cy.visitTarify(tarifyPage); // visit tarify page
    });

    after(() => {
      // after execution of all tests,execution start here
    });

    it('Should verify thank you message after purchase', () => {
      cy.clickKoupitButton(tarifyPage,tarifyPage.M); // click on Koupit button of Mobil M
      cy.selectBootBoxOption(tarifyPage,tarifyPage.Nove_cislo); // select Nove cislo option
      cy.clickOnBuyButton(kosikPage); // click on buy button
      cy.FillCheckoutFields(kosikPage); // fill Personal details field
    });
});
