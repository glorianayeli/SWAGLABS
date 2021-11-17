const BasePage = require("./basePage");

const INVENTORY_ITEM_NAME = { css: ".inventory_item_name" };
const INVENTORY_CONTAINER = { id: "inventory_container" };
const CHECKOUT = { id: "checkout"}

class cartPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async getItemsCard() {
    if(!await this.find(INVENTORY_CONTAINER)){
      throw new Error('Inventory page not loaded')
    }
    let itemsCart = await this.findElements(INVENTORY_ITEM_NAME);
    const items = Promise.all(
      itemsCart.map(async (item) => {
        const name = await item.getText();
        return name;
      })
    );
    return items;
  }

  async clickingCheckoutButton(){
    await this.click(CHECKOUT);
  }
}

module.exports = cartPage;
