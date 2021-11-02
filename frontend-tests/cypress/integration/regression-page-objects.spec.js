/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as billsFuncs from '../pages/billsPage'


//Test suite
describe('Test suite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitlrOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Welcome tester01!')
    })

    afterEach(()=>{
        dashBoardFuncs.performLogout(cy, 'Login')
    })

    //Test case 1 - Navigation to rooms
    it('Correct rooms link',function(){
        dashBoardFuncs.viewRooms(cy, 'Rooms')
    })

    //Test case 2 - Navigation to clients
    it('Correct clients link',function(){
        dashBoardFuncs.viewClients(cy, 'Clients')
    })
    //Test case 3 - Navigation to bills
    it('Correct bills link and back to Home page',function(){
        dashBoardFuncs.viewBills(cy, 'Bills')
        billsFuncs.goToHomePage(cy, 'Tester Hotel Overview')
    })
    //Test case 4 - Navigation to reservations
    it('Correct reservations link',function(){
        dashBoardFuncs.viewReservation(cy, 'Reservations')
    })
    //Test case 5 - Create, change and delete the bill
    it('Create, change and delete the bill',function(){
        dashBoardFuncs.viewBills(cy, 'Bills')
        billsFuncs.createNewBill(cy, 'New Bill')
        billsFuncs.changeBill(cy)
        billsFuncs.deleteBill(cy)
    })


    //it('', function(){   
    //})
})