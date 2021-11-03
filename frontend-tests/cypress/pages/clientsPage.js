/// <reference types="cypress" />

//Elements
const createClientButton = 'h2 > .btn'
const backButton = ':nth-child(3) > .btn'
const selectButton = ':nth-child(3) > .action > img'
const editButton = '.menu > :nth-child(1)'
const deleteButton = '.menu > :nth-child(2)'
const nameField = ':nth-child(1) > input'
const emailField = ':nth-child(2) > input'
const telephoneField = ':nth-child(3) > input'
const saveButton = '.blue'
const newClientCard = '.clients > :nth-child(3)'

//Functions
function goToHomePage(cy, contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

function createNewClient(cy, contentToConfirm){
    cy.get(createClientButton).click()
    cy.contains(contentToConfirm)
    cy.get(nameField).type('Olga Domorod')
    cy.get(emailField).type('olga@test.com')
    cy.get(telephoneField).type('0707777777')
    cy.get(saveButton).click()
    //Confirm that new client was created
    cy.get(newClientCard).should('contain', '#3')
}
function deleteClient(){
    cy.get(selectButton).click()
    cy.get(deleteButton).click()
    //Confirm that the client was deleted
    cy.get('.clients').should('not.contain', '#3')
}

//Exports

module.exports = {
    goToHomePage,
    createNewClient,
    deleteClient
}