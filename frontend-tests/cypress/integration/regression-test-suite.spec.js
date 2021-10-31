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

})