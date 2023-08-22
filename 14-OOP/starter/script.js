// 'use strict';

// // constructor functions starts with capital letter
// // Only function expressions/declarations, bc arrow functions don't have 'this' keyword
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
// const jonas = new Person('Jonas,', 1991);
// console.log(jonas);

// // Behind the sence: 4 steps
// // 1. New empty object {} is created
// // 2. Function is called, this = {}
// // 3. {} linked to the prototype
// // 4. function automatically return{}

// // Instances of Person prototype
// const matilda = new Person('Matilda', 2017);
// console.log(matilda);
// console.log(matilda instanceof Person); // true

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor); // Person(firstName, birthYear)
// console.log(Person.prototype.constructor); // this will return the code

// const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
// console.log(arr.__proto__); // Array.prototype
// console.log(arr.__proto__ === Array.prototype);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1); // print the attributes
// console.log(h1); // this will print the html tag, the toString() of the object

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' is going at ${this.speed} km/h`);
};

const car1 = new Car('BMW', 120);
car1.accelerate();
car1.brake();
car1.accelerate();

// class expression
const PersonCl = class {};

// class declaration
class Personcl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to teh .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full Name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new Personcl('Echo Wang', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

const walter = new Personcl('Walter', 1965);
console.log(walter);

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1)[0]; // or this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
