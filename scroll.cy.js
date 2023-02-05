describe('Checking search', () => {
    it('links', () => {
        //Open
        cy.visit('https://www.apple.com/');
        cy.viewport(1600, 1000);
        //Click
        cy.get('[data-analytics-title="site map"]').scrollIntoView();
        //Input
        cy.get('[data-analytics-title="site map"]').should('be.visible');
        cy.scrollTo('top');
        cy.get('.ac-gf-directory').should('not.be.visible');
    });
});