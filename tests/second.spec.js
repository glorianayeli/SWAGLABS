const { By, Key, Builder } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();
require("chromedriver");

describe("adding a second todoElement", function () {
  it("successfully added", async function () {
    let searchString = "Automation testing with Selenium and JavaScript";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //To send a search query by passing the value in searchString.
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys(searchString, Key.RETURN);
    driver.sleep(4000);

    //Verify the page title and print it
    let title = await driver.getTitle();
    console.log("Title is:", title);

    //assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

    //assert using chai should
    todoText.should.equal(searchString);

    //It is always a safe practice to quit the browser after execution
    await driver.quit();
  });
  it("Failed added", async function () {
    let searchString = "Automation testing with Selenium and JavaScript";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //To send a search query by passing the value in searchString.
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys(searchString, Key.RETURN);
    driver.sleep(4000);

    //Verify the page title and print it
    let title = await driver.getTitle();
    console.log("Title is:", title);

    //assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText();

    //assert using chai should
    todoText.should.equal(searchString);

    //It is always a safe practice to quit the browser after execution
    await driver.quit();
  });
});
