/// <reference types="cypress" />

//Elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const loginButton = '.btn'

//Functions / actions
function checkTitlrOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
}
function performValidLogin (cy, username, password, contentToConfirm){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextfield).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    checkTitlrOfIndexPage,
    performValidLogin
}
