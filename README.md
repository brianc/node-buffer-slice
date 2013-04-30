# buffer-slice

Slice a buffer into an array of sub-buffers of a specified size.

Very handy for UDP packets.

## install

`npm install buffer-slice`

## api

### [Buffer buffers] = bufferSlice(Buffer buffer, int maxLengthOfSlice);

## example

```js
var bufferSlice = require('buffer-slice');

//slice a length 5 buffer into max length 2
var buffers = bufferSlice(Buffer([1, 2, 3, 4, 5]), 2);
console.log(buffers);
//<Buffer 1 2>
//<Buffer 3 4>
//<Buffer 5>
```

## license

MIT
