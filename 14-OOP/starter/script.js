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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`'${this.make}' is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`'${this.make}' is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`'${this.make}' is going at ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// car1.accelerate();
// car1.brake();
// car1.accelerate();

// // class expression
// const PersonCl = class {};

// // class declaration
// class Personcl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to teh .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full Name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new Personcl('Echo Wang', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// const walter = new Personcl('Walter', 1965);
// console.log(walter);

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1)[0]; // or this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// Coding Challenge #2
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`'${this.make}' is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`'${this.make}' is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear); // this will not work, bc it's just a regular function call.
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// mike.introduce();

// console.log(mike.__proto__);
// console.log(Person.prototype);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `'${this.make}' is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`'${this.make}' is going at ${this.speed} km/h`);
//   }
// }

// class EV extends Car {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//   }

//   accelerate() {
//     super.accelerate();
//     this.#charge--;
//     console.log(
//       `'${this.make}' is going at ${this.speed} km/h, with a charge of ${
//         this.#charge
//       }`
//     );
//   }
// }

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// console.log(tesla);

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// class Student extends Person {
//   constructor(firstName, birthYear, course) {
//     // this need to happen first, because we will be able to use the this keyword after calling super()
//     super(firstName, birthYear); // super() method is used to call the parent constructor function, and we need to pass in the parameters
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new Student('Martha', 2012, 'Computer Science');
// martha.introduce(); // My name is Martha and I study Computer Science
// martha.calcAge(); // I'm 25 years old, but as a student I feel more like 35

// API of our objects
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   getMovements() {
//     return this._movements;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// console.log(acc1);

// class Account {
//   // 1. Public fields (instances)
//   locale = navigator.language;
//   // 2. Private fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// console.log(acc1.#movements);

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' is going at ${this.speed} km/h`);
  }
}
