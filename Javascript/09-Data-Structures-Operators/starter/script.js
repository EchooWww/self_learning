// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
  [weekdays[4]]: { open: 12, close: 22 },
  [weekdays[5]]: { open: 11, close: 23 },
  [weekdays[6]]: { open: 0, close: 24 },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
// // property keys
// const properties = Object.keys(restaurant.hours);
// console.log(properties);
// let openStr = `we will open on ${properties.length} days: `;
// for (const day of Object.keys(restaurant.hours)) openStr += day + ' ';
// // console.log(openStr);

// // property values
// const values = Object.values(restaurant.hours);
// // console.log(values);

// // entries [key-value pairs], getting array of arrays of length 2
// const entries = Object.entries(restaurant.hours);
// for (const [day, { open, close }] of entries)
//   console.log(`on ${day}, we open at ${open}, we close at ${close}`);
// // console.log(restaurant.order1?.(0, 1) ?? 'Method does not exist');

// // console.log(restaurant.hours.mon.open);

// for (const day of weekdays) {
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   open === 'closed' && console.log(`On ${day}, we don't open`);
//   open !== 'closed' && console.log(`On ${day}, we open at ${open}`);
// }

// const users = [{ name: 'Echo', email: 'echoooo1996@gamil.com' }];
// console.log(users[0]?.email ?? 'user not found!');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// menu.forEach(item => console.log(item));
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// // objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //functions
// const add = function (...args) {
//   console.log(args);
// };
// add(2, 3);
// add(5, 3, 7, 2);

// arrays

// // real-world example
// const ingrediets = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingrediets);

// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// const newRestaurant = { founded: 1981, ...restaurant, founder: 'Guisppe' };
// const { name, categories, openingHours } = restaurant;

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let aa = 111;
// let bb = 999;
// const obj = { aa: 23, bb: 7, cc: 14 };
// ({ aa, bb } = obj);

// //nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];

// const [starter, mainCourse] = restaurant.order(2, 0);

// // nested destructure
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8, 9,1

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];

// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// // join 2 arrays or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Exercise 1
// for (const [index, playerName] of game.scored.entries())
//   console.log(`Goal ${index + 1}: ${playerName}`);

// // Exercise 2
// const odds = Object.values(game.odds);
// let sum = 0;
// for (const odd of odds) {
//   sum += odd;
// }
// console.log(`${sum / odds.length}`);

// // Exercise 3
// for (const [team, oddNum] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${oddNum} `);
// }

// // bonus
// const scorers = {};
// for (const scorePlayer of game.scored) {
//   scorers[scorePlayer] ? scorers[scorePlayer]++ : (scorers[scorePlayer] = 1);
// }
// console.log(scorers);

// const [players1, players2] = game.players;
// console.log(players1, players2);
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Continho', 'Perisic'];
// console.log(players1Final);
// // we destruct immediately
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = (...names) => {
//   names.forEach(player => {
//     let scorePlayer = 0;
//     for (let i = 0; i < game.scored.length; i++) {
//       if (game.scored[i] === player) scorePlayer++;
//     }
//     console.log(player);
//     console.log(scorePlayer);
//   });
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1 < team2 && console.log('team1 is more likeky to win');
// team2 < team1 && console.log('team2 is more likely to win');

// const rest = new Map();
// rest.set(1, 'echo');
// rest.set(2, 'peng');
// // we can chain our code as the set() function will return the map after setting
// rest
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('close'));
// rest.delete(1);
// console.log(rest);
// console.log(rest.size);
// const key = [1, 2];
// rest.set(key, 'test');

// console.log(rest.get(key));

// rest.set(document.querySelector('h1'), 'Heading');

// const question = new Map([
//   ['question', 'What is the best programming languages in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question);
// // there's an easy way to convert object to map

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// // console.log(answer);
// // alert(question.get(answer === question.get('correct')));

// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [num, event] of gameEvents) {
//   const half = num <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${num} : ${event}`);
// }
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // will give us the first index
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));
console.log(airline.indexOf('air')); // will return -1 for it's case-sensitive

console.log(airline.slice(4)); // it's the position where the slice method starts -> slice method returns a new string
console.log(airline.slice(4, 7)); // the length is 7-4, left inclusive and right exclusive

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // cuts off the last 2 characterss
console.log(airline.slice(1, -1)); // cuts off the last character, from the second to the one before the last

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat😢');
  else console.log('You are lucky😄');
};
checkMiddleSeat('11B');
checkMiddleSeat('14F');

// String is primitive type, yet also have methods
// When we call methods with string, JS behind the sence converts the primitive String to String objects: this process is called 'Boxing'

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'eCHo'; //Echo
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@echo.io';
// const loginEmail = '  Hello@Echo.IO  \n';
// const normalizedLoginEmail = loginEmail.toLowerCase().trim();
// console.log(email === normalizedLoginEmail);

// const priceCN = '288,97¥';
// const priceUS = priceCN.replace('¥', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to the boarding door 23. Boarding door 23!';

// // console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase(); // we always first convert to lower case when we receive use input
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// checkBaggage('I have a laotop');
// checkBaggage('Socks and camera and Knife');
// checkBaggage('Got some snacks and a Gun');

// split() and join()
// console.log('a+very+nice+string'.split('+'));
// console.log('Echo wang'.split(' '));
// const [firstName, lastName] = 'Echo Wang'.split(' ');

// const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const psg of names) {
//     // namesUpper.push(psg[0].toUpperCase() + psg.slice(1));
//     namesUpper.push(psg.replace(psg[0], psg[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// const passenger = 'jessica ann smith davis';
// capitalizeName(passenger);

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(2));

// const maskCreditCard = function (number) {
//   const str = '' + number;
//   // first we slice the digits we want : last 4
//   const last = str.slice(-4);
//   // then we pad it with stars so only the last 4 is shown
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard('12327846827347923891234'));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// planesInLine(3);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', () => {
//   const text = document.querySelector('textarea').value;
//   const words = text.split('\n');
//   for (let [index, word] of words.entries()) {
//     word = word.trim().toLowerCase();
//     word =
//       word.slice(0, word.indexOf('_') + 1) +
//       word.slice(word.indexOf('_') + 1, word.indexOf('_') + 2).toUpperCase() +
//       word.slice(word.indexOf('_') + 2);
//     word = word.replace('_', '').padEnd(20, ' ') + '✅'.repeat(index + 1);
//     console.log(word);
//   }
// });

const flights =
  'Delayed_Departure;fao93766109;txl2133758440;11:25 + _Arrival;bru0943384722;fao93766109;11:45 + _Delayed_Arrival;hel7439299980;fao93766109;12:05 + _Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const records = flights.split('+');
for (let record of records) {
  let [type, from, to, time] = record.split(';');

  type = type.replaceAll('_', ' ').trim();
  if (type.startsWith('Delay')) type = '🔴 ' + type;
  type = type.padStart(20, ' ');

  from = ' from ' + from.slice(0, 3).toUpperCase();

  to = ' to ' + to.slice(0, 3).toUpperCase();

  time = time.trim();
  time =
    ' (' +
    time.slice(0, time.indexOf(':')) +
    'h' +
    time.slice(time.indexOf(':') + 1) +
    ')';
  console.log(type + from + to + time);
}
