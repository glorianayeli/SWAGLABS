const { Builder } = require("selenium-webdriver");
const chai = require("chai"),
  should = chai.should(),
  assert = chai.assert,
  expect = chai.expect;
const LoginPage = require("../pages/login");
require("chromedriver");

describe("login function", async function () {
  let login;
  let driver;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    login = new LoginPage(driver);
    await login.load();
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("with valid credentials", async function () {
    await login.authenticate("standard_user", "secret_sauce");
    const resultUrl = await login.successRouting();
    resultUrl.should.equal("https://www.saucedemo.com/inventory.html");
  });
  it("with invalid credentials", async function () {
    await login.authenticate("stan_user", "secret_sauce");
    assert(await login.failedLogin(), "Error not displayed");
  });
});
