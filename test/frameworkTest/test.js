
//console.log(require('../support/DataMap'));
//console.log(require('../support/PageMap'));


var test = require('../support/PageMap');

test.funcOne = function(){
  console.log(this);
};

test.funcOne();

//console.log(test.
/*for(var key in eleMap) {
  console.log("objects[key]: " + eleMap[key]);
}*/

//this.pageObjectMap = new Map();
