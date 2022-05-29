class contactPage {
    clickContactTab() {
        cy.get('#nav-contact > [href="#/contact"]').should('contain.text', 'Contact').click();
    }
    clickSubmitButton() {
        cy.get('.form-actions > .btn-contact').should('contain.text', 'Submit').click();
    }
    headerError() {
        cy.get('#header-message > .alert-error > strong').should('contain.text', 'We welcome your feedback');
        cy.get('#header-message > .alert-error').should('contain.text', `- but we won't get it unless you complete the form correctly.`);
    }
    forenameFieldError(errorMessage) {
        cy.get('#forename-err').should('contain.text' , errorMessage);
    }
    emailFieldError(errorMessage) {
        cy.get('#email-err').should('contain.text' , errorMessage);
    }
    messageFieldError(errorMessage) {
        cy.get('#message-err').should('contain.text' , errorMessage);
    }
    typeForenameField(contactName) {
        cy.get('#forename').clear().type(contactName).should('have.value', contactName)
    }
    typeEmailField(emailId) {
        cy.get('#email').clear().type(emailId).should('have.value', emailId)
    }
    typeMessageField(message) {
        cy.get('#message').clear().type(message).should('have.value', message)
    }
    noErrorOnPage() {
        cy.get('.alert-error').should('not.exist');
    }
    submitSuccessMessage(contactName) {
        cy.get('.alert-success > strong', { timeout: 15000 }).should('contain.text', `Thanks ${contactName}`)
        cy.get('.alert-success').should('contain.text', ', we appreciate your feedback.')
    }
    clickBackButton() {
        cy.get('[ng-click="goBack()"]').should('contain.text', '« Back').click();
    }
}

export default new contactPage();