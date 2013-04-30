var assert = require('assert');
//slice a buffer into an array of buffers
//with a length of maxLength, except the last buffer
//which might have less than maxLength
var bufferSlice = module.exports = function(buffer, maxLength) {
  assert(maxLength > 0, "Must supply length greater than 0");
  var result = [];
  var bytesRead = 0;
  var totalBytes = buffer.length;
  while(true) { 
    if(bytesRead >= buffer.length) {
      return result;
    }
    var toRead = Math.min(buffer.length - bytesRead, maxLength);
    var part = buffer.slice(bytesRead, toRead + bytesRead);
    result.push(part);
    bytesRead += toRead;
  }
};
