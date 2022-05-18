'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;gla93766109;edi2133758440;11:25+_Arrival;ldc0943384722;gla93766109;11:45+_Delayed_Arrival;gtk7439299980;gla93766109;12:05+_Departure;gla93766109;lvm2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const getCode = code => code.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [info, fromAirport, toAirport, timeStamp] = flight.split(';');
  const output = `${info.includes('Delayed') ? '❌' : ''}${info.replaceAll(
    '_',
    ' '
  )} from ${getCode(fromAirport)} to ${getCode(toAirport)} (${timeStamp.replace(
    ':',
    'h'
  )})`
    .trim()
    .padStart(43);
  console.log(output);
}

//strings ------------------
// const airline = 'British Airways';
// const plane = 'B747';
// console.log(plane[0]);
// console.log(plane.length);
// console.log(airline.indexOf('h'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Air'));
// console.log(plane.slice(1));
// console.log(airline.slice(airline.indexOf('B'), airline.indexOf(' ')));
// console.log(airline.slice(-3));

// const checkMiddleSeat = function (seat) {
//   //B and E are the middle seats
//   console.log(
//     `This is ${
//       seat.slice(-1) === 'B' || seat[-1] === 'E' ? '' : 'not '
//     }a middle seat`
//   );
// };

// checkMiddleSeat('22C');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// const passenger = 'sCoTT';
// let fixedPass = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();

// console.log(fixedPass);

// //compare email
// const email = 'scottalexanderhair@hotmail.com';
// const loginEmail = '  scottalexanderHAIR@hotmail.com \n';
// const fixedEmail = loginEmail.toLowerCase().trim();
// // can also use trimStart and trimEnd
// console.log(fixedEmail === email ? 'Match' : 'Mismatch');

// //replace
// const priceEur = '£298,76';
// const priceDollar = priceEur.replace('£', '$').replace(',', '.');
// console.log(priceDollar);

// const announcement = 'all passengers go to door 23, now boarding at door 23';

// console.log(announcement.replaceAll('door', 'gate'));

// //repace all is new prev used regex
// //global flag replaces all
// console.log(announcement.replace(/door/g, 'gate'));

// //booleans
// const plane2 = 'A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.startsWith('A32'));
// console.log(plane2.endsWith('neo'));

// const checkBaggage = function (items) {
//   console.log(
//     items.toLowerCase().includes('gun') || items.toLowerCase().includes('knife')
//       ? 'Got a weapon'
//       : 'Safe to fly'
//   );
// };

// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('Got snacks and clothes');
// checkBaggage('Socks and a GUN');

// //split

// const fullName = 'Scott Hair';
// const [firstName, lastName] = fullName.split(' ');
// console.log(firstName);
// const addressName = `Dear Mr ${lastName}`;
// console.log(addressName);

// const nameArray = ['array', 'of', 'words'];
// console.log(nameArray.join(' '));

// //using this to capitalise a name

// const capitalise = function (fullNameInput) {
//   const nameArray = fullNameInput.toLowerCase().split(' ');
//   const outputArray = [];
//   for (const name of nameArray) {
//     outputArray.push(name[0].toUpperCase() + name.slice(1));
//   }

//   return outputArray.join(' ');
// };

// console.log(capitalise('Scott david james murdoch harris'));
// const message = 'go to gate 23';
// //25/35 = total length of string
// console.log(message.padStart(25, ' ').padEnd(35, '+'));

// const maskCreditCard = function (ccNumber) {
//   console.log(ccNumber.toString().length);
//   return ccNumber
//     .toString()
//     .slice(-4)
//     .padStart(ccNumber.toString().length, '*');
// };

// console.log(maskCreditCard(5555565689894644));

// const message2 = 'bad weather - all flights delayed, ';
// console.log(message2.repeat(5));

// const planesInLine = function (numberOfPlanes) {
//   const message = `There are ${numberOfPlanes} planes waiting...${'✈'.repeat(
//     numberOfPlanes
//   )}`;
//   console.log(message);
// };

// planesInLine(10);

//--------coding challenge #4----------

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
/*

underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
*/
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const textBox = document.querySelector('textarea');
// const button = document
//   .querySelector('button')
//   .addEventListener('click', function () {
//     const textIn = textBox.value;
//     const textArray = textIn.split('\n');
//     const trimTextArray = [];
//     for (const el of textArray) {
//       trimTextArray.push(el.trim());
//     }
//     let outPutArray = [];
//     let longestEl = 0;
//     for (const element of trimTextArray) {
//       const firstPart = element.slice(0, element.indexOf('_'));
//       const upperLetter = element[element.indexOf('_') + 1].toUpperCase();
//       const lastPart = element.slice(element.indexOf('_') + 2);
//       outPutArray.push(
//         firstPart.toLowerCase() + upperLetter + lastPart.toLowerCase()
//       );
//       element.length > longestEl
//         ? (longestEl = element.length)
//         : (longestEl = longestEl);
//     }
//     const tick = '✅';
//     for (const [index, element] of outPutArray.entries()) {
//       console.log(`${element.padEnd(longestEl)} ${tick.repeat(index + 1)}`);
//     }
//   });

// const openingHours = {
//   //computed property name
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
//   //enhanced object literal syntax for methods
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`you pasta contains ${ing1}, ${ing2} and ${ing3}`);
//   },
//   orderPizza: function (mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(otherIng);
//   },
// };

//maps (set here has nothing to do with sets, its just add for maps)
// const rest = new Map();
// rest.set('name', 'classico Italiano');
// console.log(rest);
// rest.set(1, 'Glasgow, Scotland');
// //setting returns the map
// console.log(rest.set(2, 'London, England'));

// //chaining  set method on maps

// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest);
// //get method on maps
// console.log(rest.get(1));
// const time = 8;

// console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));
// console.log(rest.has('Categories'));
// rest.delete(2);
// //doesnt work as below a few lines ->
// rest.set([1, 2], 'test');
// console.log(rest);
// console.log(rest.size);
// //this doesnt work, the set and get array are differnt objects in the heap ->
// console.log(rest.get([1, 2]));
// //you need to assign first ->
// const array1 = [1, 2];
// rest.set(array1, 'test');
// console.log(rest.get(array1));
// // dom elements can even be the key in maps
// rest.set(document.querySelector('h1'), 'header');
// console.log(rest);

// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C#'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!👌'],
//   [false, 'Wrong ❌'],
// ]);

// //converting Object to Map
// const hourMap = new Map(Object.entries(openingHours));

// // quiz logic
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('your answer?'));
// const answer = 3;

// console.log(question.get(answer == question.get('correct')));

// //covert map to array
// console.log([...question]);

// //map methods (spread to a new array)
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// //sets - used for removing duplicate values from arrays
// const ordersSet = new Set(['pasta', 'pizza', 'pasta', 'risotto', 'pasta']);
// console.log(ordersSet);

// const nameSet = new Set('scott');
// console.log(nameSet);

// console.log(ordersSet.size);

// console.log(ordersSet.has('pizza'));
// ordersSet.add('garlic bread');
// console.log(ordersSet);
// ordersSet.delete('risotto');
// console.log(ordersSet);
// // ordersSet.clear();
// // console.log(ordersSet);
// for (const food of ordersSet) {
//   console.log(food);
// }

// //removing duplicates from array

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)];

// //how many unique positions
// console.log(new Set(staff).size);

// const stringName = 'ScottAlexanderHair';
// console.log(new Set(stringName));
// console.log(stringName.length);
// console.log(new Set(stringName.toUpperCase()).size);

// restaurant.orderPizza('Cheese', 'Tomato', 'Pepperoni', 'Onion');
// restaurant.orderDelivery({
//   time: '22.30',
//   address: '3 Melbourne Green',
//   mainIndex: 2,
//   starterIndex: 0,
// });
// const arr = ['Scott', 'Web Developer', '33'];
// const [firstName, job, age] = arr;
// console.log(firstName);

// const [cat1, , cat3] = restaurant.categories;
// console.log(cat3);

//mutating array during destructuring
// [restaurant.categories[2], restaurant.categories[0]] = [
//   restaurant.categories[0],
//   restaurant.categories[2],
// ];

// console.log(restaurant.categories);
// const [starterChoice, mainChoice] = restaurant.order(2, 0);
// console.log(starterChoice);

// //nested destructuring
// const nested = [2, 4, [5, 7]];
// const [val1, , [inner1, inner2]] = nested;
// console.log(val1);
// console.log(inner2);

// const [a = 1, b = 1, c = 1] = [8, 9];
// console.log(a, b, c);
// const scott = {
//   firstName: 'scott',
//   surname: 'Hair',
//   age: 35,
// };
// const { firstName: x, surname: y, age: z } = scott;
// console.log(x);

//destructuring obejects
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(hours);

// const {
//   menu = ['No full menu available'],
//   starterMenu: starters = ['not avail'],
// } = restaurant;

// console.log(menu, starters);

//mutating obj variable when destructuring

// let a = 111;
// let b = 999;
// let obj = {
//   a: 23,
//   b: 32,
//   c: 54,
// };

// ({ a, b } = obj);

// console.log(a, b);

// const {
//   fri: { open: openingTime, close },
// } = hours;
// console.log(openingTime, close);

//spread operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// const newMainMenu = ['fish', ...restaurant.mainMenu];
// console.log(newMainMenu);

// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(fullMenu);

// const string1 = 'strigify';
// const stringSpreadTest = [...string1];
// console.log(stringSpreadTest);

//real world example
// const ingredients = [
//   prompt('lets make pasta, ingredient 1?'),
//   prompt('lets make pasta, ingredient 2?'),
//   prompt('lets make pasta, ingredient 3?'),
// ];

// console.log(restaurant.orderPasta(...ingredients));

//using spread to make shallow copy of an object
// const newRestaurant = { ...restaurant };
// newRestaurant.mainMenu = [...newRestaurant.mainMenu, 'just cheese'];
// console.log(restaurant.mainMenu);
// console.log(newRestaurant.mainMenu);

//rest
// const [a, b, ...others] = [[1, 2, 3, 4, 5]];
// console.log(a, b, others);

// const [main1, main2, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(otherFood);

//rest objects
// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

// const add = function (...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr);
// };
// let addRes1 = add(1, 2, 3);
// let addRes2 = add(3, 4, 5, 2, 3);

// console.log(addRes1, addRes2);

// const x = [23, 5, 7];

// console.log(add(...x));

//short circuiting ||

// console.log(0 || undefined);
// console.log(null || '1');

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//short circuiting &&

// console.log(6 && 'yes' && true && '1');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('cheese', 'tomato');
// }

// //if the method doesnt exist, do nothing otherwise call it.
// restaurant.orderPizza && restaurant.orderPizza('cheese', 'onion');

//problem with 0

// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //the fix - nullish coalesing operator (only null and undefined)
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

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

// const [players1, players2] = game.players;

// const [gk, ...fieldplayers] = players1;

// const allplayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];
// // console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // console.log(team1);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }
// let average = 0;
// const oddsValues = Object.values(game.odds);
// for (const odd of oddsValues) {
//   average += odd;
// }
// average /= oddsValues.length;
// console.log(average);

// for (const [teamName, odd] of Object.entries(game.odds)) {
//   const nameStr = teamName === 'x' ? 'draw' : `victory ${game[teamName]}`;
//   console.log(`Odd of ${nameStr}: ${odd}`);
// }
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }
// const oddsValues = Object.values(game.odds);
// console.log(oddsValues);
// let total = 0;
// for (const odd of Object.values(game.odds)) {
//   total += odd;
// }
// const averageOdd = total / oddsValues.length;
// console.log(averageOdd);

// for (const [team, odd] of Object.entries(game.odds)) {
//   let teamName = `victory ${game[team]}`;
//   console.log(`odds of ${team === 'x' ? 'draw' : teamName} ${odd}`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Lewandowski', 'Kimmich');
// printGoals(...game.scored);
// team1 < team2 && console.log(`team 1 is more likely`);
// team1 > team2 && console.log(`team 2 is more likely`);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const i of menu) {
//   console.log(i);
// }

// for (const item of menu.entries()) {
//   console.log(item[0]);
// }

//optional chaining

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// console.log(restaurant.openingHours.mon?.open);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day} we open at ${open}`);
// }

// //optional chaining for method with nullish coalescing operator
// console.log(restaurant.order?.(0, 2) ?? 'this method doesnt exist');

// //arrays

// const users = [
//   { firstName: 'Scott', surname: 'Hair' },
//   { firstName: 'Maria', surname: 'Gallacher' },
// ];
// console.log(users[0]?.firstName ?? 'No users exist');

//Object.keys - property names
// let openStr = `We are open on ${Object.keys(openingHours).length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day} `;
// }

// console.log(openStr);

// // values
// console.log(Object.values(openingHours));

// //full entries (key and value) with destructuring
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open @ ${open} and close @ ${close}`);
// }

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

//which data structure to use?
//data structures - array, object, set and map
//sources - from the program, from the UI, from external source
//arrays simple list when we dont need to describe arrays
//sets high performance when duplicates arent needed or to remove duplicates from an array
//objects - Values need described with keys and easy to write and access data. when using methods as this keyword exists, for json data.
//map - better performance, when you need keys that arent strings

//------coding challenge 3 --------------
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// const gameEventsArray = [...new Set(gameEvents.values())];
// console.log(gameEventsArray);

// gameEvents.delete(64);
// console.log(gameEvents);

// const minsArray = [...gameEvents.keys()];

// const lastEventTime = minsArray[minsArray.length - 1];
// const averageMins = lastEventTime / minsArray.length;
// console.log(`An event happened, on average every ${averageMins} minutes`);

// for (const [key, value] of gameEvents) {
//   console.log(
//     `${key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${value}`
//   );
// }
