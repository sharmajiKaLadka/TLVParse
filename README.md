# TLVParse
## Simple Tag - Length - Value Parser for JavaScript.

Uasge :
```
git clone https://github.com/T1TAN1UM/TLVParse.git
``` 
include TLVParse.js in your index file.
```html
<script src="TLVParse.js"></script>
<script src="app.js"></script>
```

use ```TVLParse.parseTLVData()``` in your js code.

```js
TVLParse.parseTLVData(inputStringInTLVFormat, outputArray, TLVOptions);
```

Options: 
```js
// tagKeySize : number of digits for tagSize and lengthSize
// example in '0004john' here tag is 00 length of value is 04, actual value is 'john' 
var TLVOptions = {
    tagKeySize: 2
};
```
