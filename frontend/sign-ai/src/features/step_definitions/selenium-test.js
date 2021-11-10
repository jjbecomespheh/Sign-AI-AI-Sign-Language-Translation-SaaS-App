const { Given, When, Then, Before, AfterAll, After } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, Button } = require('selenium-webdriver');
const {initDriver} = require('../support/driverUtil')
const { expect } = require('chai');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { addConsoleHandler } = require('selenium-webdriver/lib/logging');

setDefaultTimeout(60*1000)

url = 'http://localhost:3000/'

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
});

Given('I am on the chat history page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get(url+'chat-history');

  });

  When('I click on the button with date', async function () {
    // Write code here that turns the phrase above into concrete actions
    const chat_button = await driver.findElement(By.id("conv_id"));
    await chat_button.click();
  });

  Then('i should be able to see the conversation history', async function () {
    // Write code here that turns the phrase above into concrete actions
    expected_url = "messages";
    
    actual_url = await driver.getCurrentUrl();
    actual_url = actual_url.split("/")[3]
    expect(actual_url).to.equal(expected_url);
  });