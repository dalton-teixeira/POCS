var WebdriverIO = require('webdriverio'),
    merge = require('deepmerge'),
    config = require('../support/configure'),
    BeforeHook,
    PageMap = require('../support/PageMap'),
    DataMap = require('../support/DataMap');

BeforeHook = module.exports = function (done) {
    var options = config.options;
    options = merge(config.options, config.selenium || {});
    options.desiredCapabilities = config.capabilities;

    this.browser = WebdriverIO.remote(options);
    this.browser.init().call(done);
    this.networkTimeout = 200000;
    this.animationTimeout = 4000;
    this.pageMap = PageMap;
    this.dataMap = DataMap;

    this.browser.waitElemReady = function(selector, timeout){
      return this
          .waitUntil(function(){
            var result = false;
            try{
              result =
                this.isExisting(selector).then(function(isExisting){ return isExisting; }) &&
                this.isEnabled(selector).then(function(isEnabled){ return isEnabled; }) &&
                this.isVisible(selector).then(function(isVisible){ return isVisible; });
            }
            catch(e){
              return false;
            }
            return result;
          }, timeout).then(function(){ return this; });
  };
};
