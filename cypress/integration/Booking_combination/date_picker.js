


describe('Booking combination', function(){
    
    this.beforeAll(function(){
        cy.login();
    })
 

it('open date bicker', function(){

   //open datepicker
   cy.get('.btn-light').click()
   //get calendar
   cy.get('.vdpInnerWrap').should('be.visible')

   //navigations
   //back navigation
   cy.get('.vdpArrowPrev').click()
   cy.contains('June').should('be.visible')
   //forward navigation
   cy.get('.vdpArrowNext').click()
   cy.contains('July').should('be.visible')

   //months
   cy.get('.vdpPeriodControl:nth-child(1) > select').select('August')
   cy.contains('August').should('be.visible')
   

    //years
    cy.get('.vdpPeriodControl:nth-child(2) > select').select('2021')
    cy.contains('2021').should('be.visible')

    //days
    cy.get('.vdpTable').click()
    cy.contains('11').click()
    cy.contains('Set Time').should('be.visible')
    

})














})