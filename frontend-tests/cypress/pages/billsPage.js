/// <reference types="cypress" />

import faker from 'faker'

//Elements
const createBillButton = 'h2 > .btn'
const backButton = ':nth-child(3) > .btn'
const selectButton = ':nth-child(2) > .action > img'
const editButton = '.menu > :nth-child(1)'
const deleteButton = '.menu > :nth-child(2)'
const valueField = 'input'
const paidField = '.checkbox'
const saveButton = '.blue'
const newBillCard = '.bills > :nth-child(2)'
//faker
let billValue = faker.random.number({min:800, max:3000})

//Functions/ actions
function goToHomePage(cy, contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

function createNewBill(cy, contentToConfirm){
    cy.get(createBillButton).click()
    cy.contains(contentToConfirm)
    cy.get(valueField).type(billValue)
    cy.get(saveButton).click()
    cy.get(newBillCard).should('contain', 'ID: 2')
}

function changeBill(cy){
    cy.get(selectButton).click()
    cy.get(editButton).click()
    cy.get(paidField).click()
    cy.get(saveButton).click()
    cy.get(':nth-child(2) > .paid').should('contain', 'Yes')
}

function deleteBill(){
    cy.get(selectButton).click()
    cy.get(deleteButton).click()
    //Confirm that the bill was deleted
    cy.get('.card').should('not.contain', 'ID: 2')
}

//Exports

module.exports = {
    goToHomePage,
    createNewBill,
    changeBill,
    deleteBill
}