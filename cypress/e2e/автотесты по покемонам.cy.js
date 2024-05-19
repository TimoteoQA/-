import * as data from "../helpers/default_data_pokemons.json"

describe('e2e проверка функционала покупки нового аватара тренера', function() {
    it('Большой-пребольшой автотест', function() {
        cy.visit('https://pokemonbattle.me/login');
        cy.wait(5000);
        cy.get(':nth-child(1) > .auth__input').type(data.login);
        cy.get('#password').type(data.password);
        cy.get('.auth__button').click();
        cy.wait(5000);
        cy.get('.pokemon__title').should('be.visible');
        cy.get('.pokemon__title').contains('Покемоны');
        cy.get('.pokemon__title').should('have.css', 'font-size', '38px');
        cy.get('.pokemon__title').should('have.css', 'font-family', '"Pokemon Classic"');
        cy.get('.header__btns > [href="/shop"]').click();
        cy.wait(5000);
        cy.get('.available > button').first().click();
        cy.wait(5000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVAN IVANOV');
        cy.get('.pay-btn').click();
        cy.wait(5000);
        cy.get('.payment__fielheader').should('be.visible').contains('Подтверждение покупки');
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible').contains('Покупка прошла успешно');
        cy.get('.payment__adv').should('have.css', 'color', 'rgb(85, 137, 241)');
    
    })
})