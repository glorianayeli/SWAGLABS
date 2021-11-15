const { Builder } = require("selenium-webdriver");
const chai = require("chai"),
  should = chai.should(),
  assert = chai.assert,
  expect = chai.expect;
const LoginPage = require("../pages/login");
let edge = require("selenium-webdriver/edge");

describe("login function", async function () {
  let login;
  let driver;
  beforeEach(async function () {
    let service = new edge.ServiceBuilder("C:\\Users\\glori\\Documents\\cursos\\automation_testing\\SWAGLABS\\driver\\edgedriver_win64\\msedgedriver.exe");
    driver = await new Builder().setEdgeService(service).forBrowser('MicrosoftEdge').build();
    login = new LoginPage(driver);
    await login.load();
  });
  afterEach(async function () {
    await driver.quit();
  });
  //#A-Login with a valid user
  it("with valid credentials", async function () {
    await login.authenticate("standard_user", "secret_sauce");
    const resultUrl = await login.successRouting();
    resultUrl.should.equal("https://www.saucedemo.com/inventory.html");
  });
  //#B-Login with an invalid user
  it("with invalid credentials", async function () {
    await login.authenticate("stan_user", "secret_sauce");
    assert(await login.failedLogin(), "Error not displayed");
  });
});
