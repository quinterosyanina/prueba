export class HomePage {
    constructor() {
        this.onlineshop='Online Shop'
    }
    clickOnlineshop() {
        cy.contains(this.onlineshop).click();
    };
};
//