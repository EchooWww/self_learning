'use strict';

// constructor functions starts with capital letter
// Only function expressions/declarations, bc arrow functions don't have 'this' keyword
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const jonas = new Person('Jonas,', 1991);
console.log(jonas);

// Behind the sence: 4 steps
// 1. New empty object {} is created
// 2. Function is called, this = {}
// 3. {} linked to the prototype
// 4. function automatically return{}

// Instances of Person prototype
const matilda = new Person('Matilda', 2017);
console.log(matilda);
console.log(matilda instanceof Person); // true
