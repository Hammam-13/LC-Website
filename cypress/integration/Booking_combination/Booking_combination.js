/// <reference types="cypress" />


describe('Booking Combination', ()=>{

    before(function(){
        cy.login()
        cy.wait(4000)
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

    

    it('check box', function(){

    
        //check the checkbox
        cy.get('#special').check().should('be.checked').and('have.class', 'mx-2')
        cy.get('#specialNeedsCertLabel').should('be.visible')
        //uncheck the checkbox                            
        cy.get('#special').uncheck().should('not.be.checked').and('have.class', 'mx-2')
        cy.get('#special').uncheck().should('not.have.id', '#specialNeedsCertLabel')
    
    })

    it('Upload Attachment', function(){

        //mark the check box 
        cy.get('#special').check().should('be.checked')
        //attach file
        const yourFilePath = 'Ahmed.jpg';
        cy.get('#specialNeedsCert').attachFile(yourFilePath)
        cy.wait(5000)
        cy.get('span.d-block').should('contain', 'Ahmed.jpg')
    })



it('Location Type', ()=>{

    cy.get('#vs2__combobox').click()
    cy.contains('Complete Umrah').click()
    //assert
    cy.contains('Complete Umrah').should('be.visible')

})



it('Addon', ()=>{

    cy.get('#vs3__combobox').click()
    cy.contains('Driver').click()
    //assert
    cy.contains('Driver').should('be.visible')
})



it.only('Vehicle Type', ()=>{
    cy.get('#vs4__combobox').click()
    cy.contains('Two Seat').click({timeout:6000})
    //assert
    cy.contains('Two Seat').should('be.visible')
    


})



it('CreditCard Payment', ()=>{

    cy.get('#vs5__combobox').click() 

    cy.contains('Credit Card').click()
    
    //assert
    cy.contains('Credit Card').should('be.visible')

    //pricing section
    
})





})