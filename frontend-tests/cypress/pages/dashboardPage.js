/// <reference types="cypress" />

//Elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const viewRoomsButton = ':nth-child(1) > .btn'
const viewClientsButton = '.blocks > :nth-child(2) > .btn'
const viewBillsButton = ':nth-child(3) > .btn'
const viewReservationButton = ':nth-child(4) > .btn'

//Functions / actions

function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}
function viewRooms(cy, contentToConfirm){
    cy.get(viewRoomsButton).click()
    cy.contains(contentToConfirm)
}
function viewClients(cy, contentToConfirm){
    cy.get(viewClientsButton).click()
    cy.contains(contentToConfirm)
}
function viewBills(cy, contentToConfirm){
    cy.get(viewBillsButton).click()
    cy.contains(contentToConfirm)
}
function viewReservation(cy, contentToConfirm){
    cy.get(viewReservationButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    viewRooms,
    viewClients,
    viewBills,
    viewReservation
}
