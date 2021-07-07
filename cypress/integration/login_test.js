/// <reference types="cypress" />


describe('login suite', function(){
    
    
    it('login happy scenario', function(){
                    
    //arrange
    cy.visit(Cypress.env('baseURL'))

    //act
    cy.wait(60000)
    cy.get('#loginForm > div:nth-child(2) > input').type(Cypress.env('userName'))
    cy.get('#loginForm > div:nth-child(3) > input').type(Cypress.env('password'))
    cy.get('.my-4 > .btn').click()
    cy.wait(8000)

    //assert
    cy.contains('Electrical Vehicle Services').should('be.visible')
    cy.url().should('not.have.property', '/identity')
   
    })


})

