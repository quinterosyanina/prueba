package tests;

import com.github.javafaker.Faker;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class netflixcontructor {
    WebDriver driver;
    public  netflixcontructor(WebDriver aDriver){
        this.driver = aDriver;
    }
    public void clickonElementByXpath(){
        driver.findElement(By.xpath("//a[@class=\"authLinks redButton\"]")).click();
    }

    public void  iniciarSesionPageTest(){
        List<WebElement> listas = driver.findElements(By.tagName("h1"));
        for (WebElement h1 : listas){
            System.out.println(h1.getText());
        }
        if (listas.contains("Inicia sesión")){
            System.out.println("contiene el texto iniciar sesion en h1");
        }else {
            System.out.println("no contiene el texto Inicia sesión en h1 ");
        }

    }
    public void inciarSesionconFacebookTest(){
        List<WebElement>listText = driver.findElements(By.tagName("a"));
        if (listText.contains("Iniciar sesión con Facebook")){
            System.out.println("contiene Iniciar sesión con Facebook en los textos ");
        }else {
            System.out.println("no contiene ese texto");
        }
    }
    public void loginToNetflixErrorTest (){
        driver.findElement(By.xpath("//input[@type=\"text\"]")).sendKeys("XXX");
        driver.findElement(By.xpath("//input[@name=\"password\"]")).sendKeys("holamundo");
        driver.findElement(By.xpath("//span[@class=\"login-remember-me-label-text\"]")).click();
        driver.findElement(By.xpath("//button[@type=\"submit\"]")).click();
        WebElement mserror = driver.findElement(By.xpath("//div[@class=\"inputError\"]"));
        Assert.assertEquals(mserror.getText(),"Escribe un email válido.");
        if (driver.findElement(By.xpath("//span[@class=\"login-remember-me-label-text\"]")).isSelected()){
            System.out.println("El checkbox “Recuerdame” esté seleccionado.");
        }else {
            System.out.println("El checkbox “Recuerdame” no está seleccionado.");
        }

    }
    public void fakeEmailTest (){
        Faker fakergenerator = new Faker();
        driver.findElement(By.xpath("//input[@type=\"email\"]")).sendKeys(fakergenerator.internet().emailAddress());
        driver.findElement(By.xpath("//button[@type='submit']")).click();
        System.out.println(driver.getCurrentUrl());
    }
    public void VerifyURL(){
        String ActualTitle2 = driver.getCurrentUrl();
        String ExpectedTitle2 = "netflix.com/signup/registration?locale=es-AR";
        Assert.assertNotEquals(ActualTitle2, ExpectedTitle2);
        if (ActualTitle2.contains("/signup"));
        System.out.println("verificacion de url(asserrtEquals)es exitosa");
    }

}
