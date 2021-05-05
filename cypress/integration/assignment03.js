/// <reference types="cypress" />

describe('Test cases', () => {

    beforeEach("Login", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(".username").should("contain", "Welcome tester01!")
        cy.get("h2").should("contain", "Tester Hotel Overview")
    });

    afterEach("Logout", () => {
        cy.get(".user > .btn").click()
        cy.get("h2").should("contain", "Login")
    });

    it("Create a bill", () => {
        cy.get(':nth-child(3) > .btn').click();
        cy.get('h2').should("contain", "Bills")
        cy.get('h2 > .btn').click();
        cy.get("h2").should("contain", "New Bill")
        cy.get('input').type("1000")
        cy.get('.checkbox').click();
        cy.get('.blue').click();
        cy.get("h2").should("contain", "Bills")
    });

    it("Delete a bill", () => {
        cy.visit("http://localhost:3000/bills");
        cy.get('h2 > .btn').click();
        cy.get("h2").should("contain", "New Bill")
        cy.get('input').type("1000")
        cy.get('.checkbox').click();
        cy.get('.blue').click();
        cy.contains('Bills')
        cy.get(':nth-last-child(1) > .action > img').click().wait(200)
        cy.get('.menu > :nth-child(2)').click().wait(500)
    });

    it('Create room', () => {
        cy.get('.blocks > :nth-child(1) > .btn').click().wait(500)
        cy.contains('Rooms')
        cy.get('h2 > .btn').click().wait(500)
        cy.contains('New Room')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get(':nth-child(5) > input').type('1500')
        cy.get(':nth-child(1) > select').select('double')
        cy.get('.checkbox').click()
        cy.get(':nth-child(6) > select').select('balcony')
        cy.get('.blue').click().wait(500)
        cy.contains('Rooms')
        cy.get('.rooms > :nth-last-child(1)')
            .should('contain', 'double')
            .and('contain', '103')
            .and('contain', '1')
            .and('contain', 'true')
            .and('contain', '1500')
            .and('contain', 'balcony')
    })

    it('Edit room', () => {
        cy.get('.blocks > :nth-child(1) > .btn').click().wait(500)
        cy.contains('Rooms')
        cy.get('h2 > .btn').click().wait(500)
        cy.contains('New Room')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get(':nth-child(5) > input').type('1500')
        cy.get(':nth-child(1) > select').select('double')
        cy.get('.checkbox').click()
        cy.get(':nth-child(6) > select').select('balcony')
        cy.get('.blue').click().wait(500)
        cy.contains('Rooms')
        cy.get('.rooms > :nth-last-child(1)')
            .should('contain', 'double')
            .and('contain', '103')
            .and('contain', '1')
            .and('contain', 'true')
            .and('contain', '1500')
            .and('contain', 'balcony')
        cy.get(':nth-last-child(1) > .action > img').click().wait(200)
        cy.get('.menu > :nth-child(1)').click().wait(500)
        cy.contains('Room: ')
        cy.get(':nth-child(4) > input').clear().type('104')
        cy.get('.blue').click().wait(500)
        cy.contains('Rooms')
        cy.get('.rooms > :nth-last-child(1)')
            .should('contain', 'double')
            .and('contain', '104')
            .and('contain', '1')
            .and('contain', 'true')
            .and('contain', '1500')
            .and('contain', 'balcony')
    })

    it('Delete room', () => {
        cy.get('.blocks > :nth-child(1) > .btn').click().wait(500)
        cy.contains('Rooms')
        cy.get('h2 > .btn').click().wait(500)
        cy.contains('New Room')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get(':nth-child(5) > input').type('1500')
        cy.get(':nth-child(1) > select').select('double')
        cy.get('.checkbox').click()
        cy.get(':nth-child(6) > select').select('balcony')
        cy.get('.blue').click().wait(500)
        cy.contains('Rooms')
        cy.get('.rooms > :nth-last-child(1)')
            .should('contain', 'double')
            .and('contain', '103')
            .and('contain', '1')
            .and('contain', 'true')
            .and('contain', '1500')
            .and('contain', 'balcony')
        cy.get('.rooms').children().last().invoke('index').then((i) => {
            let quantity = i + 1
            cy.get(':nth-last-child(1) > .action > img').click().wait(200)
            cy.get('.menu > :nth-child(2)').click().wait(200)
            cy.get('.rooms').children().should('have.length', (quantity - 1))
        })
    })

    it('Create room without entering price', () => {
        cy.get('.blocks > :nth-child(1) > .btn').click().wait(500)
        cy.contains('Rooms')
        cy.get('h2 > .btn').click().wait(500)
        cy.contains('New Room')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get(':nth-child(1) > select').select('double')
        cy.get('.checkbox').click()
        cy.get(':nth-child(6) > select').select('balcony')
        cy.get('.blue').click().wait(500)
        cy.contains('Price must be a whole number')
    })
    it("Create client", () => {
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
    })

    it("Delete client", () => {
        cy.visit("http://localhost:3000/clients");
        cy.get("h2").should("contain", "Clients")
        cy.get(":nth-child(1) > .action > img").click();
        cy.get(".menu > :nth-child(2)").click();
        cy.get("h2").should("contain", "Clients")
        cy.contains("Back")
    })

})