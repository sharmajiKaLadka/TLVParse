(function(window) {
  var methods = {},
    init;

  methods.getTag = function(tempStr, tlvOptions) {
    var curTag = {
      tagID: undefined,
      tagLength: undefined,
      tagValue: undefined,
      subtags: []
    };
    curTag.tagID = tempStr.substring(0, tlvOptions.tagKeySize);
    tempStr = tempStr.substring(tlvOptions.tagKeySize);
    curTag.tagLength = parseInt(tempStr.substring(0, tlvOptions.tagKeySize));
    tempStr = tempStr.substring(tlvOptions.tagKeySize);
    curTag.tagValue = tempStr.substring(0, curTag.tagLength);
    if (curTag.tagValue.substring(0, tlvOptions.tagKeySize) == "00") {
      curTag.subtags = methods.parseTLVData(
        curTag.tagValue,
        curTag.subtags,
        tlvOptions
      );
    }
    tempStr = tempStr.substring(curTag.tagLength);
    return {
      tag: curTag,
      retStr: tempStr
    };
  };

  methods.parseTLVData = function(inputStr, outPutArray, tlvOptions) {
    while (inputStr) {
      var res = methods.getTag(inputStr, tlvOptions);
      outPutArray.push(res.tag);
      inputStr = res.retStr;
    }
    return outPutArray;
  };

  init = methods;

  // Exposure when being used in an AMD environment, e.g. RequireJS
  if (typeof define === "function" && define.amd) {
    define(function() {
      return init;
    });
    return;
  }

  // Exposure when being used with NodeJS
  if ("undefined" !== typeof module && module.exports) {
    module.exports = init;
    return;
  }

  // Last-in-the-line exposure to the window, if it exists
  window.TVLParse = init;

  // This line either passes the `window` as an argument or
  // an empty Object-literal if `window` is not defined.
})("undefined" !== typeof window ? window : {});

// *** Demo Code below  

var inputStr =
"0015SharmaJiKaLadka";
var TLVOptions = {
tagKeySize: 2
};

var output = [];
console.log(TVLParse.parseTLVData(inputStr, output, TLVOptions));
