"use strict";
exports.__esModule = true;
var message = "hii welcome saravanan";
console.log(message);
// datatypes
var a = 123;
a = 1;
a = "hiii";
var b = 27.5;
b = 44;
var str = "saravanan";
str = "ragul";
var c = true;
var d = null;
var e;
var arr = [1, 2, 3, 4, 5, 6, 7];
var arrstr = ["saravanan",];
var multitype;
multitype = 1;
multitype = "vig";
var obj = {
    name: "vignesu",
    age: 80
};
// conditional statement same as javascript
// loops same as javascript
// functions    :typeannotaton
function sum(a, b) {
    return a + b;
}
function changesum(a) {
    return a.toLowerCase(); //no worked intelsence 
}
function changesum2(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(changesum2('janani', 'vignesh'));
function changesum3(a, b) {
    if (b === void 0) { b = 'vig'; }
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(changesum3('janani'));
// function also takes objects
function add(point) {
    return point.x + point.y;
}
var p = {
    x: 1,
    y: 1
};
console.log(add(p));
function add2(point) {
    return point.x + point.y;
}
console.log(add2(x, 1, y, 3, z, 3));
