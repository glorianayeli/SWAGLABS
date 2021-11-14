const { Builder } = require("selenium-webdriver");
const chai = require("chai"),
  should = chai.should();
require("chromedriver");
const inventoryPage = require("../pages/inventory");
const loginPage = require("../pages/login");

describe("inventory logout function", async function () {
  let homePage;
  let driver;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new inventoryPage(driver);
    login = new loginPage(driver);
    await login.load();
    await login.authenticate("standard_user", "secret_sauce");
  });
  afterEach(async function () {
    await driver.quit();
  });
  //#C-Logout from the home page
  it("cheking if logout function is routing to homepage", async function () {
    const urlAfterLogout = await homePage.logout();
    urlAfterLogout.should.equal("https://www.saucedemo.com/");
  });
  //#D-Sort products by Price (low to high)
  it("low to high function", async function () {
    let prices = await homePage.lowToHigh();
    const Sortprices = prices.sort(function (a, b) {
      return a - b;
    });
    prices.should.equal(Sortprices);
  });
});
