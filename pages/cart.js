const INVENTORY_ITEM_NAME = { css: ".inventory_item_name" };
const CHECKOUT = { id: "checkout"}

class cartPage {
  constructor(driver) {
    this.driver = driver;
  }

  async getItemsCard() {
    let itemsCart = await this.driver.findElements(INVENTORY_ITEM_NAME);
    const items = Promise.all(
      itemsCart.map(async (item) => {
        const name = await item.getText();
        return name;
      })
    );
    return items;
  }

  async clickingCheckoutButton(){
    await this.driver.findElement(CHECKOUT).click();
  }
}

module.exports = cartPage;
