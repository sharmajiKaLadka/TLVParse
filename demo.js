//input string in Tag - Length - Value format (Sub Tags are supported)
var inputStr =
"0015SharmaJiKaLadka";
// Options 
// tagKeySize : number of digits for tagSize and lengthSize
// example in '0004john' here tag is 00 length of value is 04, actual value is 'john' 
var TLVOptions = {
tagKeySize: 2
};

var output = [];
console.log(TVLParse.parseTLVData(inputStr, output, TLVOptions));
