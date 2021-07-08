

describe('window test suite commands', ()=>{

beforeEach(()=>{
    cy.login()
}

)


it('URL Properties', ()=>{
    cy.hash().should('eql', '#/en/')
    cy.location('protocol').should('eql', 'https:')
    cy.location('host').should('eql', 'erp-haram-test.lavaloon.com')
    cy.location('pathname').should('eql', '/')

})

it('page reload', ()=>{
    cy.wait(3000)
    cy.reload()

})

it('page navigatoin back and forward', ()=>{
    cy.get('.d-block').click()
    //assert
    cy.contains('Please enter your email address to sent you the new password').should('be.visible')
    cy.go('back')
    //assert
    cy.contains('Login').should('be.visible')
    cy.go('forward')
    //assert
    cy.get('.btn').should('be.visible')
    

})

it('local storage', ()=>{
    cy.clearLocalStorage
})



})