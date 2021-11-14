const assertEqual = require('./assertEqual');
const tail = require('../tail')


//TEST CODE
assertEqual((tail(["a", "s", "d"])).length, 2); //tail should have 1 less length than the original array
assertEqual((tail([])).length, 0); //the tail of an empty array should have a length of zero
assertEqual((tail(["a"])).length, 0); //the tail of an empty array should have a length of zero