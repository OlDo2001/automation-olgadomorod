/// <reference types="cypress" />

//This is a test suite
describe('Regression test suite',function(){
    //This is a test case logga in/logga out
    it('Perform valid login',function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Correct rooms link',function(){
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Correct bills link',function(){
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get('h1 > .router-link-active').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Correct clients link',function(){
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get('h1 > .router-link-active').click()
        cy.contains('Tester Hotel Overview')
        //cy.get('.user > .btn').click()
        //cy.contains('Login')
    })

    it('Correct reservation link',function(){
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Reservations')
        cy.get('h1 > .router-link-active').click()
        cy.contains('Tester Hotel Overview')
        //cy.get('.user > .btn').click()
        //cy.contains('Login')
    })
    it('Create, change and delete a bill',function(){
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get('h2 > .btn').click()
        cy.contains('New Bill')
        //Create new bill
        cy.get('input').type('2000')
        cy.get('.blue').click()
        //Confirm that the bill was created
        cy.get('.bills > :nth-child(2)').should('contain', 'ID: 2')
        //Change the bill
        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.get('.checkbox').click()
        cy.get('.blue').click()
        //Confirm that the bill was changed 
        cy.get(':nth-child(2) > .paid').should('contain', 'Yes')
        //Delete the bill
        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        //Confirm that the bill was deleted
        cy.get('.card').should('not.contain', 'ID: 2')
        //Logout
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })


})