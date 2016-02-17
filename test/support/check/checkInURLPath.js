module.exports = function (falseCase, expected, done) {
  var result = false;
  this.browser.waitUntil(function(){
    try{
      return this.url().then(function(res, err){
        return res.value.indexOf(expected) >= 0 && !falseCase;
      });
    }
    catch(e){
      return false;
    }
  }, this.networkTimeout).then(function(){
    this.url().then(function(res, err){
      var url = res.value;
      if (falseCase) {
          url.should.not.contain(expected, 'Expected URL (' + url + ') not to contain "' + expected + '"');
      } else {
          url.should.contain(expected, 'Expected URL (' + url + ') to contain "' + expected + '"');
      }
    });
   }).call(done);
/*

*/
};
