var bufferSlice = require(__dirname);
var assert = require('assert');

//console.log('slices easy buffer');
var buf = new Buffer([1, 2, 3]);
var slices = bufferSlice(buf, 1);
//console.log(slices);
assert.equal(slices.length, 3, "should return length 3 array but returned length " + slices.length);
for(var i = 0; i < 3; i++) {
  var slice = slices[i];
  assert.equal(slice.length, 1);
  assert.equal(slice[0], i+1, "expected value " + (i+1) + " but was " + slice[0]);
}

//console.log('slices lopsidded buffer');
var buf = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var slices = bufferSlice(buf, 3);
//console.log(slices);
assert.equal(slices.length, 4, "should return 4 buffers but returned " + slices.length);
assert.equal(slices[0][0], 1);
assert.equal(slices[0][1], 2);
assert.equal(slices[0][2], 3);
assert.equal(slices[1][0], 4);
assert.equal(slices[1][1], 5);
assert.equal(slices[1][2], 6);
assert.equal(slices[2][0], 7);
assert.equal(slices[2][1], 8);
assert.equal(slices[2][2], 9);
assert.equal(slices[3][0], 10);

//console.log('slices lopsidded buffer');
var buf = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
var slices = bufferSlice(buf, 2);
//console.log(slices);
assert.equal(slices.length, 6, "should return 6 buffers but returned " + slices.length);
assert.equal(slices[0][0], 1);
assert.equal(slices[0][1], 2);
assert.equal(slices[1][0], 3);
assert.equal(slices[1][1], 4);
assert.equal(slices[2][0], 5);
assert.equal(slices[2][1], 6);
assert.equal(slices[3][0], 7);
assert.equal(slices[3][1], 8);
assert.equal(slices[4][0], 9);
assert.equal(slices[4][1], 10);
assert.equal(slices[5][0], 11);
