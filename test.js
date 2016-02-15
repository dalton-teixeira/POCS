var WebdriverIO = require('webdriverio'),
    merge = require('deepmerge'),
    config = require('./support/configure');



    var options = config.options;
    options = merge(config.options, config.selenium || {});
    options.desiredCapabilities = config.capabilities;

    this.browser = WebdriverIO.remote(options);
    this.browser.init().url("http://www.google.com").pause(30000).browser["click"]("a");
