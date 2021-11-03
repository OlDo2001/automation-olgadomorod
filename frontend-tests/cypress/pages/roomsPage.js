/// <reference types="cypress" />

//Elements
const createRoomButton = 'h2 > .btn'
const backButton = ':nth-child(3) > .btn'
const selectButton = ':nth-child(3) > .action > img'
const editButton = '.menu > :nth-child(1)'
const deleteButton = '.menu > :nth-child(2)'
const categoryField = ':nth-child(1) > select'
const numberField = ':nth-child(2) > input'
const floorFielf = ':nth-child(3) > input'
const availableField = '.checkbox'
const priceField = ':nth-child(5) > input'
const featuresField = ':nth-child(6) > select'
const saveButton = '.blue'
const newRoomCard = '.rooms > :nth-child(3)'

//Functions
function goToHomePage(cy, contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

function createNewRoom(cy, contentToConfirm){
    cy.get(createRoomButton).click()
    cy.contains(contentToConfirm)
    cy.get(categoryField).select('Single')
    cy.get(numberField).type('501')
    cy.get(floorFielf).type('5')
    cy.get(availableField).click()
    cy.get(priceField).type('1800')
    cy.get(featuresField).select(['Sea View', 'Balcony'])
    cy.get(saveButton).click()
    //Confirm that the new room was created
    cy.get(newRoomCard).should('contain', '501')
}
function deleteRoom(){
    cy.get(selectButton).click()
    cy.get(deleteButton).click()
    //Confirm that the room was deleted
    cy.get('.rooms').should('not.contain', '501')
}

//Exports

module.exports = {
    goToHomePage,
    createNewRoom,
    deleteRoom
}