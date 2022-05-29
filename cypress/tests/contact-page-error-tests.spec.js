import contactPage from '../pages/contactPage.js';
import contactData from '../fixtures/contactPage.json';

describe('Contact Page Tests', () => {
    before(() => {
        cy.visitPage();
    })
    it('Verify Contact Page is displayed when clicked on Contact tab', () => {
        contactPage.clickContactTab();
    });
    it('Verify error messages are displayed when clicked on Submit button on Contact Page', () => {
        contactPage.clickSubmitButton();
        contactPage.headerError();
        contactPage.forenameFieldError(contactData.forenameRequiredError);
        contactPage.emailFieldError(contactData.emailRequiredError);
        contactPage.messageFieldError(contactData.messageRequiredError)
    });
    it('Verify error messages are not displayed when the required fields are entered', () => {
        contactPage.typeForenameField(contactData.contactName);
        contactPage.typeEmailField(contactData.emailId);
        contactPage.typeMessageField(contactData.message);
        contactPage.noErrorOnPage();
    });
})