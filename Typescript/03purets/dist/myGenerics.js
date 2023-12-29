"use strict";
const score = [1, 2, 3, 4, 5];
const names = ["a", "b", "c", "d", "e"];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(arg) {
    return arg;
}
function getSearchProducts(val) {
    return val;
}
function anotherFunction(arg1, arg2) {
    return {
        arg1,
        arg2,
    };
}
anotherFunction(1, 3.4);
function newFunction(arg1, arg2) {
    return {
        arg1,
        arg2,
    };
}
newFunction({ connection: "123", pwd: "123" }, 1);
