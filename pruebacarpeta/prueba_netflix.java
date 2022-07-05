package tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.List;

import static org.testng.AssertJUnit.assertEquals;


public class prueba_netflix {
    WebDriver driver;
    @Test(priority = 4 ,groups = {"successTests"})

    @BeforeMethod
    public void setup(){
        System.setProperty("webdriver.chrome.driver", "C:/chromedriver_win32/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.netflix.com/ ");
        driver.manage().window().maximize();
    }
    @Test (priority = 3,groups = {"successTests"})
    void validarTituloTest()throws InterruptedException{
        String actualTitle = driver.getTitle();
        Assert.assertEquals(driver.getTitle(),"Netflix Argentina: Ve series online, ve películas online","its true");
        Thread.sleep(2000);
        netflixcontructor registrationform = new netflixcontructor(driver);
        registrationform.clickonElementByXpath();
        Thread.sleep(2000);
        System.out.println(driver.getTitle());
        Assert.assertEquals(driver.getTitle(),"Netflix","its true");
        registrationform. iniciarSesionPageTest();
        registrationform.inciarSesionconFacebookTest();
        registrationform.loginToNetflixErrorTest();
    }
    @Test (priority = 2)
    void loginToNetflixErrorTest(){
        netflixcontructor registrationform = new netflixcontructor(driver);
        registrationform.fakeEmailTest();
        registrationform.VerifyURL();
    }
    @Test(priority = 1,dataProvider ="salesforceRegistration" , dataProviderClass = DataGenerato.class)
    public void salesforceRegistrationTest(String email)throws InterruptedException{
        driver.findElement(By.xpath("//input[@type=\"email\"]")).sendKeys(email);
        Thread.sleep(3000);
        driver.findElement(By.xpath("//button[@type='submit']")).click();
        Thread.sleep(3000);
    }
    @AfterMethod
    public void tearDown(){
        driver.close();
    }
}
