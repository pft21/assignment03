/// <reference types="cypress" />


describe('Tester Emelie', () =>{

    it("(Login)", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(".username").should("contain", "Welcome tester01!")
        cy.get("h2").should("contain", "Tester Hotel Overview")
        cy.get(".user > .btn").click()
        cy.get("h2").should("contain", "Login")
    });

    it("(Logout)", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(".username").should("contain", "Welcome tester01!")
        cy.get("h2").should("contain", "Tester Hotel Overview")
        cy.get(".user > .btn").click()
        cy.get("h2").should("contain", "Login")
    });

    it("(Create a bill)", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(".username").should("contain", "Welcome tester01!")
        cy.get("h2").should("contain", "Tester Hotel Overview")
        cy.get(':nth-child(3) > .btn').click();
        cy.get('h2').should("contain", "Bills")
        cy.get('h2 > .btn').click();
        cy.get("h2").should("contain", "New Bill")
        cy.get('input').type("1000")
        cy.get('.checkbox').click();
        cy.get('.blue').click();
        cy.get("h2").should("contain", "Bills")
        cy.get('.user > .btn').click()
    });

    it("(Delete a bill)", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(".username").should("contain", "Welcome tester01!")
        cy.get("h2").should("contain", "Tester Hotel Overview")
        cy.get(':nth-child(3) > .btn').click();
        cy.get(':nth-child(3) > .action > img').click();
        cy.get('.menu > :nth-child(2)').click();
        cy.get('.user > .btn').click();

    });

})