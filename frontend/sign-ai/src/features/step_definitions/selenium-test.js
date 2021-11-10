const { Given, When, Then, Before, AfterAll, After } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const {initDriver} = require('../support/driverUtil')
const { expect } = require('chai');
const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60*1000)

// driver setup

let driver;

Before(function(){
    driver = initDriver()
});

After(async function(){
    await driver.quit()
})

Given('I am on the Google search page', async function () {
    await driver.get('http://www.google.com');
});

When('I search for {string}', async function (searchTerm) {
    await driver.findElement(By.name('q')).sendKeys(searchTerm+'\n');
});

Then('the page title should start with {string}', async function (searchTerm) {
    const title = await driver.getTitle();
    const isTitleStartWithCheese = title.toLowerCase().lastIndexOf(`${searchTerm}`, 0) === 0;
    expect(isTitleStartWithCheese).to.equal(true);
    // await driver.close()

});