/// <reference types="cypress" />

describe('document commands', ()=>{

beforeEach(()=>{
    cy.login()
}
)


it('title properties', ()=>{
cy.title().then(txt =>{
    expect(txt).to.eql('LOGIN / SIGN UP')
})

})
 
it('get width and height - viewport', ()=>{
cy.viewport('iphone-8', 'landscape')
cy.viewport('iphone-8', 'portrait')

})


it('cookies', ()=>{

cy.getCookie('_ga=GA1.1.1627274599.1620750819; sid=Guest; system_user=yes; full_name=Guest; user_id=Guest; user_image=; _ga_MF550L68KY=GS1.1.1621781262.11.1.1621781274.0')

})



})