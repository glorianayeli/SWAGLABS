const { Builder } = require("selenium-webdriver");
const chai = require("chai"),
  assert = chai.assert;
const inventoryPage = require("../pages/inventory");
const loginPage = require("../pages/login");
const cartPage = require("../pages/cart");
let edge = require("selenium-webdriver/edge");
describe("Cart functions", async function () {
  let homePage,driver,car,login;
  beforeEach(async function () {
    let service = new edge.ServiceBuilder("C:\\Users\\glori\\Documents\\cursos\\automation_testing\\SWAGLABS\\driver\\edgedriver_win64\\msedgedriver.exe");
    driver = await new Builder().setEdgeService(service).forBrowser('MicrosoftEdge').build();
    homePage = new inventoryPage(driver);
    login = new loginPage(driver);
    cart = new cartPage(driver);
    await login.load();
    await login.authenticate("standard_user", "secret_sauce");
  });
  afterEach(async function () {
    driver.quit();
  });
  //#E Add multiple items to the shopping cart
  it("adding multiple items to the cart page and verifiying that have been correctly adding", async function () {
    let correctlyAdded = true;
    let itemsAdded = await homePage.addItemsToTheCard();
    await homePage.clickShoppingCart();
    let itemsCart = await cart.getItemsCard();
    itemsAdded.forEach((elem) => {
      if (itemsCart.indexOf(elem.name) === -1) {
        correctlyAdded = false;
      }
    });
    assert(correctlyAdded, "items have not correctly added");
  });
  //#F-Adding a specific item to the shopping cart
  it("Adding Sauce Labs Onesie to the shopping cart", async function(){
    await homePage.addSauceLabsOnesieItem();
    await homePage.clickShoppingCart();
    const items = await cart.getItemsCard();
    let itemIsAble = true;
    if (items.indexOf("Sauce Labs Onesie") === -1) {
      itemIsAble = false;
    }
    assert(itemIsAble, "the item wasn't added correctly");
  });
});
