/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as billsFuncs from '../pages/billsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as roomsFuncs from '../pages/roomsPage'

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
    it('Correct rooms link and back to Home page',function(){
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        roomsFuncs.goToHomePage(cy, 'Tester Hotel Overview')
    })

    //Test case 2 - Navigation to clients
    it('Correct clients link and back to Home page',function(){
        dashBoardFuncs.viewClients(cy, 'Clients')
        clientsFuncs.goToHomePage(cy, 'Tester Hotel Overview')
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

    //Test case 5 - Create, change and delete a bill
    it('Create, change and delete a bill',function(){
        dashBoardFuncs.viewBills(cy, 'Bills')
        billsFuncs.createNewBill(cy, 'New Bill')
        billsFuncs.changeBill(cy)
        billsFuncs.deleteBill(cy)
    })

    //Test case 6 - Create and delete a client
    it('Create and delete a client',function(){
        dashBoardFuncs.viewClients(cy, 'Clients')
        clientsFuncs.createNewClient(cy, 'New Client')
        clientsFuncs.deleteClient(cy)
    })

    //Test case 7 - Create and delete a room
    it('Create and delete a room',function(){
        dashBoardFuncs.viewRooms(cy, 'Rooms')
        roomsFuncs.createNewRoom(cy, 'New Room')
        roomsFuncs.deleteRoom(cy)
    })

})