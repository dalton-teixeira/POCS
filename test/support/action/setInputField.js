module.exports = function (method, dataKey, element, done) {
    var command = (method === 'add') ? 'addValue' : 'setValue';

    var Selector = this.pageMap[element];

    var content = this.dataMap[dataKey];

    this.browser
        .waitElemReady(Selector, this.networkTimeout)
        .then(function(){
          this[command](Selector, content);
        }).call(done);


};
