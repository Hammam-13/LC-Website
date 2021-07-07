
Cypress.Commands.add('login', ()=>{
    cy.visit(Cypress.env('baseURL'))
    cy.wait(4000) 
    cy.get('#loginForm > div:nth-child(2) > input').type(Cypress.env('userName'))
    cy.get('#loginForm > div:nth-child(3) > input').type(Cypress.env('password'))
    cy.get('.my-4 > .btn').click()
     
 })  

 import DatePickerPage from "../Pages/DatePickerPage";

 var datePickerPage = new DatePickerPage();

 Cypress.Commands.add('selectYear', (yearName) => {

    const currentYear = new Date().getFullYear()

   datePickerPage.getYearName().then(($year)=>{
       if($year.text()==yearName){
        cy.log(yearName +  'year is selected')
        return
       }
       else{
            if(yearName < currentYear){
                datePickerPage.getYearName().select(yearName)
            }
            else if(yearName > currentYear){
                datePickerPage.getYearName().select(yearName)
            }
       }
       
       cy.selectYear(yearName)
       
   })

 })

 import DateUtils from "./DateUtility/DateUtils";
 var dateUtils = new DateUtils();

 Cypress.Commands.add('selectMonth', (monthName)=>{
    let currentMonth = new Date().getMonth() +1
    let givenMonth =  dateUtils.getMonthIndex(monthName)

    datePickerPage.getMonthName().then(($month) =>{

        if($month.text().includes(monthName)){
            cy.log(monthName + 'month is selected')
            return
        }
        else{
            if(givenMonth > currentMonth){
                datePickerPage.getMonthName().select(givenMonth)
            }
            if(givenMonth < currentMonth){
                datePickerPage.getMonthName().select(givenMonth)
            }
        }
        cy.selectMonth(monthName)
    })

 })


 Cypress.Commands.add('selectDay', (dayName) =>{
     datePickerPage.getCalendarDays().eq(dayName - 1).click()
     cy.log(dayName + 'day is selected')

 })

 import 'cypress-file-upload'

 