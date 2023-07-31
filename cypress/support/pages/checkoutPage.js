export class CheckoutPage{
    constructor(){
        this.firstName='#FirstName'
        this.lastName= '#lastName'
        this.cardNumber='#cardNumber'
    
    }
    clickButtonCheckout (){
        cy.get(".css-641vkz").click()
    }
    IngresarFirstName(firstName){
        cy.get(this.firstName).type(firstName)
    }
    IngresarLastName(lastName){
        cy.get(this.lastName).type(lastName)
    }
    IngresarCardNumber(cardNumber){
        cy.get(this.cardNumber).type(cardNumber)
    }
    clickButtonPurchese(){
        cy.get('.css-13zsa').click()
    }
    EsperarProgresbar(){
        cy.get("[role='progressbar']",{timeout:11000}).should("not.exist")
    }
    CompararNombre(){
        cy.get('#name').should('have.text','Yanina Quinteros has succesfully purchased the following items')
    }
    CompararProductos(products){  
        cy.get(`[id='${products}']`).should('have.text',products)
    }
    DigitosCardNumber(cardNumber){
        cy.get("[id='creditCard']").invoke("text").should('have.length', '16')
        cy.get("[id='creditCard']").invoke("text").should('contain', cardNumber)
    }
    ValorSumaProductos(precio){
        cy.get("[id='totalPrice']").should('include.text',precio)
    }  
}