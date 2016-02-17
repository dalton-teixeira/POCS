var path = require('path'),
  fs = require('fs'),
  merge = require('deepmerge'),
  pageObjsPath = path.join(__dirname, '../pageObjects'),
  pos = fs.readdirSync(pageObjsPath),
  ElementsMap = {};

pos.forEach(function(po){
  var poElements = require(path.join(pageObjsPath, po));
  ElementsMap = merge(ElementsMap, poElements);

});

module.exports = ElementsMap;
