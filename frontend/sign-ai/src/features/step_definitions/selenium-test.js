const { Given, When, Then, Before, AfterAll, After } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, Button } = require('selenium-webdriver');
const {initDriver} = require('../support/driverUtil')
const { expect } = require('chai');
const { setDefaultTimeout } = require('@cucumber/cucumber');
const pactum = require('pactum');

let spec = pactum.spec();

setDefaultTimeout(60*1000)

const base_url = 'http://localhost:3000/'

// driver setup
let driver;

Before(function(){
    driver = initDriver()
    spec = pactum.spec();
});

After(async function(){
    await driver.quit()
})

Given('I am on the chat history page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get(base_url+'chat-history');
    await driver.sleep(3*1000)
});

When('I click on the button with date', async function () {
    // Write code here that turns the phrase above into concrete actions
    const chat_button = await driver.findElement(By.id("8989"));
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

    await driver.get(base_url +'home');
    const newconv_button = await driver.findElement(By.id("newconv"));
    await newconv_button.click()

    // driver.get(url+'translate');
    // await driver.sleep(3*1000);
});

When('he signs {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    if (string === "successfully"){
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
        // await driver.switchTo().alert().accept(); //catch alert
    }else if (string === "failed"){
        const translate_button = await driver.findElement(By.id("sign_again_btn"));
        await translate_button.click();
        await driver.sleep(3*1000)
        // await driver.switchTo().alert().accept(); //catch alert
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
    var expected_home_url = base_url + 'home';

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
    const expected_ask_url = base_url + 'ask';

    const actual_ask_url = await driver.getCurrentUrl();
    expect(expected_ask_url).to.equal(actual_ask_url);
})

Given('the user navigates to the ask page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get(base_url+'home');
    const newconv_button = await driver.findElement(By.id("newconv"));
    await newconv_button.click()

    await driver.sleep(3*1000)

    const ask_btn = await driver.findElement(By.id("ask_btn"));
    await ask_btn.click()

    await driver.sleep(3*1000)

  });


When('he types in the textfield and submits the question', async function () {
// Write code here that turns the phrase above into concrete actions
    await pactum.spec()
        .post('http://localhost:8000/chats')
        .withJson({
            conversation_id: 8989,
            sender: "Police",
            message: "This is a stubbing test from cucumber",
        })
        .expectStatus(302); //redirected to the chats/:newid
});

Then('the question is reflected in the chat-history', async function () {
    // Write code here that turns the phrase above into concrete actions
    
    const expected_indicator = "8989"
    await driver.get(base_url + "chat-history")
    
    await driver.sleep(3*1000)
    const chat_button = await driver.findElement(By.id("8989"));
    await chat_button.click();

    var actual_indicator = await driver.getCurrentUrl();
    actual_indicator = actual_indicator.split("/")[5]
    expect(actual_indicator).to.equal(expected_indicator) 
});

// Then('he is redirected to translate page', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     var expected_translate_url = 'http://localhost:3000/translate';
//     await driver.get(expected_translate_url)
// });

Given('the officer navigates to the home page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get(base_url +'home');
});

When('he gets the deaf public\'s consent', async function () {
    // Write code here that turns the phrase above into concrete actions
    const cover_button = await driver.findElement(By.id("cover_page"));
    await cover_button.click();
    await driver.sleep(3*1000)
});

Then('he should be able to click a total of 3 buttons to get the consent', async function () {
    // Then('he should be able to click a total of {float} buttons to get the consent', function (float) {
    // Write code here that turns the phrase above into concrete actions
    const expected_cover_url = base_url + "cover-page"
    const actual_cover_url = await driver.getCurrentUrl();
    expect(actual_cover_url).to.equal(expected_cover_url);

    const cover_next_button = await driver.findElement(By.id("cover_next"));
    await cover_next_button.click();
    
    await driver.sleep(3*1000)

    const expected_tutorial_url = base_url + "tutorial"
    const actual_consent_url = await driver.getCurrentUrl();
    expect(actual_consent_url).to.equal(expected_tutorial_url);

    const consent_next_button = await driver.findElement(By.id("tutorial_next"));
    await consent_next_button.click();

    await driver.sleep(3*1000)
});

Then('he should be able to start asking question', async function () {
    // Write code here that turns the phrase above into concrete actions
    const expected_final_url = base_url + "translate"

    const actual_final_url = await driver.getCurrentUrl();
    expect(expected_final_url).to.equal(actual_final_url);
});

When('he submits empty question', async function () {
    // Write code here that turns the phrase above into concrete actions

    const ask_button = await driver.findElement(By.id("ask_submit"));
    await ask_button.click();

    //prompted an alert
});

Then('he is prompted to re-enter the question', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.switchTo().alert().accept(); //catch alert
});

Given('the user started a new conversation', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get(base_url+'home');
    const newconv_button = await driver.findElement(By.id("newconv"));
    await newconv_button.click()

    await driver.sleep(3*1000)

    const ask_btn = await driver.findElement(By.id("ask_btn"));
    await ask_btn.click()

    await driver.sleep(3*1000)
});

When('he input a message', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pactum.spec()
        .post('http://localhost:8000/chats')
        .withJson({
            conversation_id: 8989,
            sender: "Police",
            message: "What colour shirt is the suspect wearing when you saw him this morning?",
        })
        .expectStatus(302); //redirected to the chats/:newid
});

Then('the message should be recorded immediately', async function () {
    // Write code here that turns the phrase above into concrete actions
    const expected_indicator = "8989"
    await driver.get(base_url + "chat-history")
    
    await driver.sleep(3*1000)
    var chat_button = await driver.findElements(By.id("8989"));
    var chat_button = chat_button.slice(-1)[0]
    await chat_button.click();

    var actual_indicator = await driver.getCurrentUrl();
    actual_indicator = actual_indicator.split("/")[5]
    expect(actual_indicator).to.equal(expected_indicator) 
    await driver.sleep(10*1000)
});
