const { Given, When, Then, Before, AfterAll, After } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, Button } = require('selenium-webdriver');
const {initDriver} = require('../support/driverUtil')
const { expect } = require('chai');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const { addConsoleHandler } = require('selenium-webdriver/lib/logging');

setDefaultTimeout(60*1000)

var url = 'http://localhost:3000/'

// driver setup
let driver;

Before(function(){
    driver = initDriver()
});

After(async function(){
    await driver.quit()
})

Given('I am on the chat history page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get(url+'chat-history');
    await driver.sleep(3*1000)
});

When('I click on the button with date', async function () {
    // Write code here that turns the phrase above into concrete actions
    const chat_button = await driver.findElement(By.id("conv_id"));
    await chat_button.click();
    await driver.sleep(3*1000);
});

Then('i should be able to see the conversation history', async function () {
    // Write code here that turns the phrase above into concrete actions
    var expected_url = "messages";

    var actual_url = await driver.getCurrentUrl();
    actual_url = actual_url.split("/")[3]
    expect(actual_url).to.equal(expected_url);
});

Given('the user navigates to the translate page', async function () {
    // Write code here that turns the phrase above into concrete actions
    driver.get(url+'translate');
    await driver.sleep(3*1000);
});

When('he signs {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    if (string == "successfully"){
        const translate_button = await driver.findElement(By.id("correct_btn"));

        const expect_correct_button_tag_name = await translate_button.getTagName();
        expect(expect_correct_button_tag_name).to.equal('button');

    } else if(string === "failed"){
        const translate_button = await driver.findElement(By.id("sign_again_btn"));

        const expect_fail_button_tag_name = await translate_button.getTagName();
        expect(expect_fail_button_tag_name).to.equal('button');        
    }
});

Then('he should be notified of {string} translation', async function (string) {
    // Write code here that turns the phrase above into concrete actions

    if(string === "successful"){
        const translate_button = await driver.findElement(By.id("correct_btn"));
        await translate_button.click();
        await driver.sleep(3*1000)
        await driver.switchTo().alert().accept(); //catch alert
    }else if (string === "failed"){
        const translate_button = await driver.findElement(By.id("sign_again_btn"));
        await translate_button.click();
        await driver.sleep(3*1000)
        await driver.switchTo().alert().accept(); //catch alert
    }
});

When('he clicks on the end convo page button',async function () {
    // Write code here that turns the phrase above into concrete actions
    const home_button = await driver.findElement(By.id("home_btn"));
    await home_button.click()
    await driver.sleep(3*1000)
});

Then('he should be redirected back to home page',async function () {
    // Write code here that turns the phrase above into concrete actions
    var expected_home_url = 'http://localhost:3000/home';

    var actual_home_url = await driver.getCurrentUrl();
    expect(actual_home_url).to.equal(expected_home_url);
});

When('he clicks on the ask question button', async function () {
    // Write code here that turns the phrase above into concrete actions
    const ask_button = await driver.findElement(By.id("ask_btn"));
    await ask_button.click()
    await driver.sleep(3*1000)
});

Then('he should be redirected to the page', async function() {
    // Write code here that turns the phrase above into concrete actions
    expected_ask_url = 'http://localhost:3000/ask';

    actual_ask_url = await driver.getCurrentUrl();
    expect(expected_ask_url).to.equal(actual_ask_url);
})
Given('the user navigates to the ask page', async function () {
    // Write code here that turns the phrase above into concrete actions
    driver.get(url+'ask');
});


When('he submits the question after typing in it', async function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('he is redirected to translate page and question is added to database', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
