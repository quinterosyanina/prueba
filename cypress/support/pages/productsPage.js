export class ProductsPage {
    constructor() {
        this.goShoppingCartButton = '#goShoppingCart'

    }
    agregarProducto(nombre){
        cy.get(`[value="${nombre}"]`).click();
        cy.contains('Close').click();
    };

    clickGoToShoppingCart() {
        cy.get(this.goShoppingCartButton).click();

    }
}
