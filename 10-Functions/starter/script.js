'use strict';

// const bookings = [];
// const createBooking = function (flightNumber, numPassengers = 0, price = 0) {
//   price;
//   const booking = {
//     flightNumber,
//     price: 199 * numPassengers,
//     numPassengers,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', undefined, 800);

// const flight = 'KLM204';
// const scott = {
//   name: 'Scott Hair',
//   passportNo: 123456789,
// };

// // //ref types vs primitives

// const checkIn = function (flightNum, passenger) {
//   (flightNum = 'LH999'), (passenger.name = 'Mr ' + passenger.name);
//   if (passenger.passportNo === 123456789) {
//     alert('Check in successful');
//   } else {
//     alert('Wrong passport no');
//   }
// };

// checkIn(flight, scott);
// console.log(flight);
// console.log(scott);

// //flight doesnt update as flightnum is a copy of the value iteslf, scott does get updated as it mutates the original object as passenger argument is just a ref to that orig obj

// const newPassport = function (person) {
//   person.passportNo = Math.trunc(Math.random() * 100000000);
//   console.log(person.passportNo);
// };
// newPassport(scott);
// checkIn(flight, scott);

//---------higher order functions--------
//(functions that accept functions as argument or that return functions)

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...otherWords] = str.split(' ');
//   return first.toUpperCase() + ' ' + otherWords.join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(fn(str));
//   console.log(`transformed by ${fn.name}`);
// };

// //transformer is higher order, call back function

// transformer('This is a test', oneWord);

// const high5 = function () {
//   console.log('🤚🏻');
// };

// document.body.addEventListener('mouseout', high5);

// const currentAcc = {
//   accountName: 'Current Account',
//   accontNum: '00001111',
//   balance: 100,
// };
// const savingsAcc = {
//   accountName: 'Savings Account',
//   accountNum: '00002222',
//   balance: 2000,
// };
// const addCurrent = function (amount) {
//   currentAcc.balance += amount;
// };

// const addSavings = function (amount) {
//   savingsAcc.balance += amount;
// };

// const addMoney = function (amount, fn) {
//   fn(amount);
//   console.log(
//     `you added ${amount}, your current account balance is now ${currentAcc.balance}, your savings is now ${savingsAcc.balance}`
//   );
// };

// console.log(addMoney(10000, addCurrent));

//------------functions calling functions----------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHello = greet('Hello');
// greetHello('Scott');

// //with arrow functions

// const sayMakeAndModel = make => model =>
//   console.log(`This car is a ${make} ${model}`);

// sayMakeAndModel('Volkswagen')('Polo');

//------------call and apply---------------

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //enhanced object literal format
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(123, 'Scott');
// lufthansa.book(456, 'John');
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// //call method

// const book = lufthansa.book; // can set as a standalone function or call direct as below

// // book(234, 'Brian'); doenst work

// lufthansa.book.call(eurowings, 432, 'Brian');

// console.log(eurowings);

// const britshAirways = {
//   airline: 'British Airways',
//   iataCode: 'BA',
//   bookings: [],
// };

// book.call(britshAirways, 765, 'Alan');
// console.log(britshAirways);

// //apply method (same as call but takes array of arguments)

// const flightData = [987, 'Rita'];
// book.apply(eurowings, flightData);
// //or can just use call with a spraead operator
// book.call(britshAirways, ...flightData);

// //--------------bind-------------

// //doesnt immediately call, returns a new function where the this keyword is bound

// const bookBA = book.bind(britshAirways);
// bookBA(743, 'Dave');

// //use to set in stone specific arguments (partial appliaction)

// const bookEW246 = book.bind(eurowings, 246);
// bookEW246('Roisin');

// const bookEW357Meghan = book.bind(eurowings, 357, 'Meghan');
// bookEW357Meghan();

// // using this for ojects with eventlisteners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application (presetting parameters) with bind

// const addTax = (rate, value) => value * rate + value;
// console.log(addTax(0.1, 100));
// const addVAT = addTax.bind(null, 0.2);
// console.log(addVAT(200));

// same thing with call back function

// const addTax = function (rate) {
//   return function (value) {
//     console.log(rate * value + value);
//   };
// };

// const addVAT = addTax(0.3);
// addVAT(300);

//same with arrow fn

// const addTax = rate => value => console.log(rate * value + value);

// const addVAT = addTax(0.3);
// addVAT(100);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHello = greet('Hello');
// greetHello('Scott');

//------------------code challenge #1----------------

// A poll has a question, an array of options to choose from and an array with the number of replies for each option.

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.

// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".

// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const result = Number(
//       prompt(
//         `${this.question} \n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     if (
//       typeof result == 'number' &&
//       result >= 0 &&
//       result < this.options.length
//     ) {
//       this.answers[result]++;
//     }
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type == 'array') {
//       console.log(this.answers);
//     } else if (type == 'string') {
//       console.log(`poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const bonus = {
//   answers: [1, 5, 3, 9, 6, 1],
// };
// poll.displayResults.call(bonus);

//-------------IIFE's (immediately invoked function expressions)-------
// provides scoping (can now just use a block for es6)

// (function () {
//   console.log('this code will only run once');
// })();

// //arrow version

// (() => console.log('this code will only run once too'))();

//-------------closures-----------------------
//a function carries with it the variables of its parent function, even after that parent functions execution context has been poopped off the stack

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`passengers: ${passengerCount}`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// example 2 closures change with re-assignemnt
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b / 7);
//   };
// };
// g();
// f();

// h();
// f();

// console.dir(f);

//example 3

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(
//       `There are currently 3 groups each with ${perGroup} passengers`
//     );
//   }, wait * 1000);
//   console.log(`will start boarding in ${wait} seconds`);
// };

// boardPassengers(300, 3);

//coding challenge

// This is more of a thinking challenge than a coding challenge �
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
