/**
 * http://usejsdoc.org/
 */
var XMLJSONconverter = require('xml-js');

exports.js2xml = function (inputValue) {
	  return XMLJSONconverter.js2xml(inputValue, {compact: true, ignoreComment: true, spaces: 4});
}; 


exports.xml2js = function (inputValue) {
	  return XMLJSONconverter.js2xml(inputValue, {compact: true, ignoreComment: true, spaces: 4});
}; 
