/// <reference types="cypress" />

    //SKAPA EN KLIENT
    it("(Skapaenklient)", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(".username").should("contain", "Welcome tester01!")
        cy.get("h2").should("contain", "Tester Hotel Overview")
        cy.get('.blocks > :nth-child(2) > .btn').click();
        cy.get('h2').should("contain", "Clients")
        cy.get('h2 > .btn').click();
        cy.get("h2").should("contain", "New Client")
        cy.get(':nth-child(1) > input').type("Tester");
        cy.get(':nth-child(2) > input').type("Tester@test.se");
        cy.get(':nth-child(3) > input').type("0745698122");
        cy.get('.blue').click();
        cy.get("h2").should("contain", "Clients")
        cy.contains("Tester")
        cy.get('.user > .btn').click();
        })

     // TESTFALL: TA BORT EN KLIENT
describe("Ta bort en klient",() => {
    it("login",() => {
    cy.visit("http://localhost:3000");
    cy.get('h2').should("contain", "Login")
    cy.get(":nth-child(1) > input").type("tester01")
    cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
    cy.get(".btn").click()
    cy.get(".username").should("contain", "Welcome tester01!")
    
    });
    it("Delete client", () => {
    cy.visit("http://localhost:3000/clients");
    cy.get("h2").should("contain", "Clients")
    cy.get(":nth-child(1) > .action > img").click();
    cy.get(".menu > :nth-child(2)").click();
    cy.get("h2").should("contain", "Clients")
    cy.contains("Back")
    cy.get(".user > .btn").click()
    
    });
    });
    