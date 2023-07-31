import data from '../../fixtures/data.json'; 

export class ShoppingcartPage {
    constructor() {
        this.ShowtotalPriceBtn = '/html/body/div[1]/div/div[2]/div[2]/button'
         }
            verifioProducto(nombre){
            cy.get(`[name="${nombre}"]`).should('exist')
        };
  
    clickShowTotalPriceBtn(){
        cy.xpath(this.ShowtotalPriceBtn).click();
    }
    VerificarSumaProductos(){
        cy.get("#price").should("have.text", '35');
    }
    
};