describe('Checking Header', () => {
  it('links', () => {
    //Open
    cy.visit('https://www.apple.com/')
    cy.viewport(1600, 1000)
    //Logo
    cy.get('[data-analytics-title="apple home"]').should('not.be.empty');
    cy.get('[data-analytics-title="apple home"]').should('be.visible');
    //Store
    cy.get('[data-analytics-title="store"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="store"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/us/shop/goto/store');
    //Mac
    cy.get('[data-analytics-title="mac"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="mac"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/mac/');
    //iPad
    cy.get('[data-analytics-title="ipad"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="ipad"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/ipad/');
    //iPhone
    cy.get('[data-analytics-title="iphone"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="iphone"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/iphone/');
    //Watch
    cy.get('[data-analytics-title="watch"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="watch"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/watch/');
    //AirPods
    cy.get('[data-analytics-title="airpods"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="airpods"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/airpods/');
    //TV & Home
    cy.get('[data-analytics-title="tv and home"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="tv and home"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/tv-home/');
    //Only on Apple
    cy.get('[data-analytics-title="only on apple"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="only on apple"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/services/');
    //Accessories
    cy.get('[data-analytics-title="accessories"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="accessories"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/us/shop/goto/buy_accessorie');
    //Support
    cy.get('[data-analytics-title="support"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="support"]').should('be.visible')
      .and('have.attr', 'href').and('contain', 'https://support.apple.com');
    //Search
    cy.get('[data-analytics-title="search"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="search"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/us/search');
    //Bag
    cy.get('[data-analytics-title="bag"]').invoke('text').should('not.be.empty');
    cy.get('[data-analytics-title="bag"]').should('be.visible')
      .and('have.attr', 'href').and('contain', '/us/shop/goto/bag');
  })
})
