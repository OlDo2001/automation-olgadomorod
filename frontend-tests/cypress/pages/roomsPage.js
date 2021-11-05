/// <reference types="cypress" />

import faker from 'faker'

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
//faker
let roomNumber = faker.random.number(1000)
let floorNumber = faker.random.number(9)
let price = faker.random.number(10000)
//Array for Category
let categoryArray = ["Double", "Single", "Twin"]
//Array for Features
let featuresArray = ["Balcony", "Sea View", "Ensuite", "Penthouse"]

//Functions
function goToHomePage(cy, contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}

function createNewRoom(cy, contentToConfirm){
    cy.get(createRoomButton).click()
    cy.contains(contentToConfirm)
    //Choose Category random from array
    cy.get(categoryField).select(categoryArray[Math.floor(Math.random()*categoryArray.length)])
    cy.get(numberField).type(roomNumber)
    cy.get(floorFielf).type(floorNumber)
    cy.get(availableField).click()
    cy.get(priceField).type(price)
    //Choose features random from array
    cy.get(featuresField).select(featuresArray[Math.floor(Math.random()*featuresArray.length)])
    cy.get(saveButton).click()
    //Confirm that the new room was created
    cy.get(newRoomCard).should('contain', roomNumber)
}
function deleteRoom(){
    cy.get(selectButton).click()
    cy.get(deleteButton).click()
    //Confirm that the room was deleted
    cy.wait(400)
    cy.get('.rooms').should('not.contain', roomNumber)
}

//Exports

module.exports = {
    goToHomePage,
    createNewRoom,
    deleteRoom
}