'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum = 'CA123',
//   numPassenger = 1,
//   // we can only use parameters defined in the list before price
//   price = 199 * numPassenger
// ) {
//   // numPassenger = numPassenger || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2);

// const flight = 'LH234';

// const echo = {
//   name: 'Echo wang',
//   passport: 23748637284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Ms. ' + passenger.name;

//   if (passenger.passport === 23748637284) alert('Checked in');
//   else alert('Wrong passport number!');
// };

// checkIn(flight, echo);
// console.log(flight);
// console.log(echo);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`transformed string: ${str}`);
//   console.log(`transformed string: ${fn(str)}`);
//   console.log(`transformed string: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Echo', 'Ermao', 'Dapang'].forEach(high5);

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// // calling the function returns a function, which we can assign to another variable, and then call with the new variable
// const greeterHey = greet('hey');

// greeterHey('Echo');

// // a simpler way
// greet('Hello')('Echo');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.iataCode}${flightNum}`);
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(352, 'Echo Wang');
// lufthansa.book(123, 'Ermao Wang');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book; // it's a copy of a method, but became a function, so the 'this' keyword is now pointing to 'undefined'
// // DOES NOT WORK
// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Echo Wang');
// book.call(lufthansa, 239, 'Mary Cooper');

// const swiss = {
//   airline: 'Swiss Airline',
//   iasaCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 83, 'Ermao');

// const bookEuroWings = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEuroWings(235, 'Dapang');

// const bookEW23 = book.bind(eurowings, 23);

// // with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// // partial application: pre-set parameters
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// // another way
// const addTAXRate = function (rate) {
//   return function (value) {
//     return value + value + rate;
//   };
// };
// const addVAT2 = addTAXRate(0.23);
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK */
// (function () {
//   console.log('heyy??');
// })();
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const ans = Number(
//       prompt(
//         `${this.question}\n${this.options.join(
//           '\n'
//         )}\n(Enter the option number)`
//       )
//     );
//     typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;
//     this.displayResults(prompt('How do you like the results to be displayed?'));
//   },
//   displayResults(type) {
//     if (type === 'array') console.log(this.answers);
//     else if (type === 'string')
//       console.log(`Poll results are ${this.answers.join(',')}`);
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [2, 5, 8] }, 'string');

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker(); // 1 passengers
// booker(); // 2 passengers

// let f;

// const g = function () {
//   const a = 23;
//   f = () => {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// h();
// f();
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
