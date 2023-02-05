describe('Checking search', () => {
    it('links', () => {
        //Open
        cy.visit('https://www.apple.com/');
        cy.viewport(1600, 1000);
        //Click
        cy.get('[id="ac-gn-link-search"]').click();
        //Input
        cy.get('#ac-gn-searchform-input').type('app');
        //Quick
        cy.get('#ac-gn-searchresults').should('be.visible');
        cy.get('#quicklinks').should('contain', 'App');
        //Suggest
        cy.get('#suggestions').should('be.visible').and('contain', 'App');
        //Results not be visible
        cy.get('#ac-localeswitcher').click();
        cy.get('#ac-gn-searchresults').should('not.be.visible');

    });
});