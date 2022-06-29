/// <reference types="cypress" />




it('nacteni Webu', () => {

    cy.visit('/');
    
    cy.get('.nav-menu > .page-item-556 > a')
        .click();

        
});

it('test management', () => {

    cy.get('.elementor-element-624ab7c > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-icon > .elementor-icon') 
        .should('be.visible')

});

it('externi spoluprace', () => {
    cy.get('.elementor-element-7d0a711 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-icon > .elementor-icon')
           .should('be.visible')
           

});

it('jeden tym', () => {

    cy.get('.elementor-element-85da123 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-icon > .elementor-icon')
        .should('be.visible')
           
           

});