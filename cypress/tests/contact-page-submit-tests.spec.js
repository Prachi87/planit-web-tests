import contactPage from '../pages/contactPage.js';
import contactData from '../fixtures/contactPage.json';
describe('Contact Page Tests', () => {
    before(() => {
        cy.visitPage();
    })
    Cypress._.times(5, () => {
        it('Verify Contact Page is displayed when clicked on Contact tab', () => {
            contactPage.clickContactTab();
        });
        it('Verify form is submitted successfully with success message when clicked on Submit button', () => {
            contactPage.typeForenameField(contactData.contactName);
            contactPage.typeEmailField(contactData.emailId);
            contactPage.typeMessageField(contactData.message);
            contactPage.clickSubmitButton();
            contactPage.submitSuccessMessage(contactData.contactName);
            contactPage.clickBackButton();
        });
    });
})
