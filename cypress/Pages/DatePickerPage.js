class DatePickerPage {

getDatePicker(){
return cy.get('.btn-light')
}

getCalendar(){
return cy.get('.vdpInnerWrap')
}


getNavigateBackButton(){
return cy.get('.vdpArrowPrev')
}

getNavigateForwrdButton(){
    return cy.get('.vdpArrowNext')
}

getMonthName(){
return cy.get('.vdpPeriodControl:nth-child(1) > select')

}
getYearName(){
return cy.get('.vdpPeriodControl:nth-child(2) > select')
}
getCalendarDays(){
return cy.get('.vdpTable')



}





}

export default DatePickerPage