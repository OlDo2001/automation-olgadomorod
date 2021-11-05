/// <reference types="cypress" />

import faker from 'faker'

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

//faker
//Cteate new client name = first name+  last name
let newClientName = faker.fake("{{name.firstName}} {{name.lastName}}")

let email = faker.internet.email()
let telephone = faker.phone.phoneNumber()

//Functions
function goToHomePage(cy, contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

function createNewClient(cy, contentToConfirm){
    cy.get(createClientButton).click()
    cy.contains(contentToConfirm)
    cy.get(nameField).type(newClientName)
    cy.get(emailField).type(email)
    cy.get(telephoneField).type(telephone)
    cy.get(saveButton).click()
    //Confirm that new client was created
    cy.get(newClientCard).should('contain', newClientName)
}
function deleteClient(){
    cy.get(selectButton).click()
    cy.get(deleteButton).click()
    //Confirm that the client was deleted
    cy.get('.clients').should('not.contain', newClientName)
}

//Exports

module.exports = {
    goToHomePage,
    createNewClient,
    deleteClient
}