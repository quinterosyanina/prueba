package tests;

import org.testng.annotations.DataProvider;

public class DataGenerato {

    @DataProvider (name = "salesforceRegistration")
    public static Object[][] salesforceRegistrationData(){
        return new Object[][]{
                {"guillermo@gmail.com"},
                {"sebastian@gmail.com"},
                {"yanina@gmail.com"}
        };
    }

}
