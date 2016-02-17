
module.exports = function (element, done) {


  var selector = this.pageMap[element];
  this.browser
    .waitElemReady(selector, this.networkTimeout)
    .click(selector)
    .call(done);
};
