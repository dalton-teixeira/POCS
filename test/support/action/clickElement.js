
module.exports = function (element, done) {

    var eleMap = require('../../frameworkTest/test').ElementsMap;

    /*for(var key in eleMap) {
      console.log("objects[key]: " + eleMap[key]);
    }*/

    //this.pageObjectMap = new Map();

    console.log("eleMap[element]: " + eleMap[element]);

    this.browser
        .waitForVisible(eleMap[element], this.networkTimeout)
        .click(elem)
        .call(done);
};
