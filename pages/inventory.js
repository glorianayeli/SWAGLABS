const loginPage = require("../pages/login");
const BUTTON_MENU = { id: "react-burger-menu-btn" };
const LOGOUT_LINK = { id: "logout_sidebar_link" };

class inventoryClass {
  constructor(driver) {
    this.driver = driver;
  }
  async logout() {
    await this.driver.findElement(BUTTON_MENU).click();
    await this.driver.findElement(LOGOUT_LINK).click();
    return await this.driver.getCurrentUrl();
  }
}

module.exports = inventoryClass;
