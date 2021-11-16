//https://www.saucedemo.com/checkout-complete.html
const { Builder } = require("selenium-webdriver");
const chai = require("chai"),
  should = chai.should();
const inventoryPage = require("../pages/inventory");
const loginPage = require("../pages/login");
const cartPage = require("../pages/cart");
const checkout = require("../pages/checkout");
let edge = require("selenium-webdriver/edge");

describe("compliting a purchse in checkout flow", async function(){
    let driver, homePage, login, cart, checkoutPage; 
    beforeEach(async function(){
        let service = new edge.ServiceBuilder("C:\\Users\\glori\\Documents\\cursos\\automation_testing\\SWAGLABS\\driver\\edgedriver_win64\\msedgedriver.exe");
        driver = await new Builder().setEdgeService(service).forBrowser('MicrosoftEdge').build();
        homePage = new inventoryPage(driver);
        login = new loginPage(driver);
        cart = new cartPage(driver);
        checkoutPage = new checkout(driver);
        await login.load();
        await login.authenticate("standard_user", "secret_sauce");
    });
    afterEach(async function(){
        driver.quit();
    });
    it("checkout flow", async function(){
        await homePage.addSauceLabsOnesieItem();
        await cart.clickingCheckoutButton();
        await checkoutPage.formCheckout();
        let orderConfirmationPage = await checkoutPage.checkoutOverview();
        orderConfirmationPage.should.equal("https://www.saucedemo.com/checkout-complete.html");
    });
});
