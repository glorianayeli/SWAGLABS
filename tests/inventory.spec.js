const { Builder } = require("selenium-webdriver");
const chai = require("chai"),
  should = chai.should();
const inventoryPage = require("../pages/inventory");
const loginPage = require("../pages/login");
require("chromedriver");
describe("inventory logout function", async function () {
  let homePage;
  let driver;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new inventoryPage(driver);
    login = new loginPage(driver);
    await login.load();
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("cheking if logout function is routing to homepage", async function () {
    await login.authenticate("standard_user", "secret_sauce");
    const urlAfterLogout = await homePage.logout();
    urlAfterLogout.should.equal("https://www.saucedemo.com/");
  });
});
