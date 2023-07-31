import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingcartPage } from "../support/pages/shoppingcartPage";
import { CheckoutPage } from "../support/pages/checkoutPage";

describe('entrega final', () => {
   // let data;
  //  const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const shoppingcartPage = new ShoppingcartPage();
    const checkoutPage = new CheckoutPage ();
    let data, checkoutdata;
    before('Registrar ', () => {
        var password = 'Alma2020!'
        cy.request({
            url:"https://pushing-it.onrender.com/api/register",
            method: "POST",
            body:{
                username : Math.random(),
                password: password,
                gender: 'F',
                day: '19',
                month: '10',
                year: '1986'
            }
        }).then((respuesta) =>{
            expect(respuesta.status).equal(200)
        }).then((respuesta) =>{
            cy.request({
               url:"https://pushing-it.onrender.com/api/login",
               method: "POST",
               body:{
                username : respuesta.body.newUser.username,
                password: password,
                }
            }).then((respuesta )  =>{
                expect(respuesta.status).equal(200)
                localStorage.setItem("token",respuesta.body.token)
                localStorage.setItem("user", respuesta.body.user.username)
            })
        })
        cy.fixture("data").then(dataProducto => {
            data = dataProducto
        })
        cy.visit("/")
        homePage.clickOnlineshop()
        cy.fixture("checkoutdata").then(dataCheckout => {
            checkoutdata = dataCheckout
        })
    });
   // before('Before', () => {
      //  cy.fixture('data').then(datos => {
       //     data = datos;
    //    })
  //  });
    it('Before Each', () => {
     //   cy.visit('')
      //  cy.get('#registertoggle').dblclick();
     //   loginPage.escribirUsuario(data.datosLogin.usuario);
      //  loginPage.escribirContraseña(data.datosLogin.contraseña);
       // loginPage.clickLoginBtn();
       // homePage.clickOnlineshop();
        productsPage.agregarProducto(data.productos.nombreProducto1);
        productsPage.agregarProducto(data.productos.nombreProducto2);
        productsPage.clickGoToShoppingCart();
        cy.wait(10000);
       shoppingcartPage.verifioProducto(data.productos.nombreProducto1)
       shoppingcartPage.verifioProducto(data.productos.nombreProducto2)
        shoppingcartPage.clickShowTotalPriceBtn(); 
        shoppingcartPage.VerificarSumaProductos(data.productos.precioProducto1+data.productos.precioProducto2);
        checkoutPage.clickButtonCheckout();
        checkoutPage.IngresarFirstName(checkoutdata.datosTarjeta.firstN);
       checkoutPage.IngresarLastName(checkoutdata.datosTarjeta.lastN);
        checkoutPage.IngresarCardNumber(checkoutdata.datosTarjeta.cardN);
        checkoutPage.clickButtonPurchese();
        checkoutPage.EsperarProgresbar()
        checkoutPage.CompararNombre()
        checkoutPage.CompararProductos(data.productos.nombreProducto1)
        checkoutPage.CompararProductos(data.productos.nombreProducto2)
       checkoutPage.DigitosCardNumber(checkoutdata.datosTarjeta.cardN)
       checkoutPage.ValorSumaProductos(data.productos.precioProducto1 + data.productos.precioProducto2)
    })
})