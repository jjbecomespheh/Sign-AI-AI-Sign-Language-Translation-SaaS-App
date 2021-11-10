const webdriver = require('selenium-webdriver');
const {Capabilities} = require('selenium-webdriver')

require("chromedriver")

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false});

exports.initDriver = () => {
    const driver = new webdriver.Builder().forBrowser('chrome').withCapabilities(capabilities).build();
    return driver;
}
