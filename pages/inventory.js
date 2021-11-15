const loginPage = require("../pages/login");
const BUTTON_MENU = { id: "react-burger-menu-btn" };
const LOGOUT_LINK = { id: "logout_sidebar_link" };
const PRODUCT_SORT = { css: ".product_sort_container" };
const OPTION_LOW_TO_HIGH = { css: "option[value=lohi]" };
const INVENTORY_ITEM_PRICE = { css: "div.inventory_item_price" };
const ITEMS = [
  { id: "add-to-cart-sauce-labs-backpack" },
  { id: "add-to-cart-sauce-labs-bike-light" },
  { id: "add-to-cart-sauce-labs-bolt-t-shirt" },
];
const SHOPPING_CART_LINK = { css: ".shopping_cart_link" };
const SAUCE_LABS_ONESIE = {id: "add-to-cart-sauce-labs-onesie"};

class inventoryClass {
  constructor(driver) {
    this.driver = driver;
  }
  async logout() {
    await this.driver.findElement(BUTTON_MENU).click();
    await this.driver.manage().setTimeouts( { implicit: 5000 } );
    await this.driver.findElement(LOGOUT_LINK).click();
    await this.driver.manage().setTimeouts( { implicit: 5000 } );
    return await this.driver.getCurrentUrl();
  }
  async lowToHigh() {
    await this.driver.findElement(PRODUCT_SORT).click();
    await this.driver.findElement(OPTION_LOW_TO_HIGH).click();
    let elements = await this.driver.findElements(INVENTORY_ITEM_PRICE);
    const prices = Promise.all(
      elements.map(async (ele) => {
        const price = await ele.getText();
        return parseFloat(price.split("").splice(1, 4).join(""));
      })
    );
    return prices;
  }
  async addItemsToTheCard() {
    ITEMS.forEach(async (elem) => {
      await this.driver.findElement(elem).click();
    });
    return ITEMS;
  }
  async clickShoppingCart() {
    await this.driver.findElement(SHOPPING_CART_LINK).click();
  }
  async addSauceLabsOnesieItem(){
    await this.driver.findElement( SAUCE_LABS_ONESIE).click();
  }
}

module.exports = inventoryClass;
