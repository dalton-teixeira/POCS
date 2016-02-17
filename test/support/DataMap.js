var path = require('path'),
  fs = require('fs'),
  merge = require('deepmerge'),
  dataPath = path.join(__dirname, '../Data'),
  dataList = fs.readdirSync(dataPath),
  DataMap = {};
  
dataList.forEach(function(data){
  var dataMap = require(path.join(dataPath, data));
  DataMap = merge(DataMap, dataMap);
});

module.exports = DataMap;
