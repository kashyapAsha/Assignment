import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../../pages/login/login';
import quotationPage from '../../../pages/quotation/quotation';
import profilePage from '../../../pages/profile/profile';

Given("Open URL", () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
});

And(`Enter emai {string} and password {string}`, (email,password) => {
    loginPage.enterEmailAndPassword("kashyapasha42@gmail.com","asha");
});

And('Click on login button', () => {
    loginPage.clickOnLogin();
})

When("user click on edit profile", () => {
    profilePage.clickOnEditProfile()
});

And("update required data", () => {
    profilePage.updateProfile("asha")
});

Then("validate the required data is updated or not", () => {
    profilePage.validateProfile("asha")      
})





