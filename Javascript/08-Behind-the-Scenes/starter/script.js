'use strict';

// const echo = {
//   year: 1996,
// };

// const jonas = {
//   year: 1991,
//   calcAge: () => {
//     return 2023 - this.year;
//   },
//   greet: () => {
//     console.log(`hey, ${this.firstName}`);
//   },
// };

// jonas.greet(); // will print undefined, because there's no this keyword in arrow functions
// // method borrowing
// echo.calcAge = jonas.calcAge;

// echo.calcAge(); // the this keyword would point to echo object (instead of jonas)

// const f = jonas.calcAge;
// f();
// // there is no owner for the f function, will return an error of defefined

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'davis'; // this will change the lastName of both jessica and marriedJessica

// marriedJessica = {};

// copying objects

const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
