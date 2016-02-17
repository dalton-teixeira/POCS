
module.exports = function (element, promisseElement, done) {


  var selector = this.pageMap[element];
  this.browser
    .waitElemReady(selector, this.networkTimeout)
    .then( this.browser.waitUntil(function(){
      try {
        var ele;
        this
          .click(selector)
          .then( le = this.element(promisseElement));
        return ele !== undefined;
      }
      catch(e){ return false; }
    }, this.animationTimeout))
    .call(done);
};
