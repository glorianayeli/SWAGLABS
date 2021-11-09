const USERNAME_INPUT = { id: "user-name" };
const PASSWORD_INPUT = { id: "password" };
const LOGIN_BUTTON = { id: "login-button" };
const ERROR_MESSAGE = { css: ".error-message-container" };

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async load() {
    await this.driver.get("https://www.saucedemo.com/");
  }

  async authenticate(username, password) {
    await this.driver.findElement(USERNAME_INPUT).sendKeys(username);
    await this.driver.findElement(PASSWORD_INPUT).sendKeys(password);
    await this.driver.findElement(LOGIN_BUTTON).click();
  }

  async successRouting() {
    return await this.driver.getCurrentUrl();
  }

  async failedLogin() {
    return await this.driver.findElement(ERROR_MESSAGE).isDisplayed();
  }
}

module.exports = LoginPage;
