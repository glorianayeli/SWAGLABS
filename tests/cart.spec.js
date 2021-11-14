const { Builder } = require("selenium-webdriver");
const chai = require("chai"),
  assert = chai.assert;
const inventoryPage = require("../pages/inventory");
const loginPage = require("../pages/login");
const cartPage = require("../pages/cart");
require("chromedriver");
describe("Cart functions", async function () {
  let homePage;
  let driver;
  let cart;
  let login;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new inventoryPage(driver);
    login = new loginPage(driver);
    cart = new cartPage(driver);
    await login.load();
    await login.authenticate("standard_user", "secret_sauce");
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("adding multiple items to the cart page and verifiying that have been correctly adding", async function () {
    let correctlyAdded = true;
    let itemsAdded = await homePage.addItemsToTheCard();
    await homePage.clickShoppingCart();
    let itemsCart = await cart.getItemsCard();
    itemsAdded.forEach((elem) => {
      if (itemsCart.indexOf(elem.id) != -1) {
        correctlyAdded = false;
      }
    });
    assert(correctlyAdded, "items have not correctly added");
  });
});
