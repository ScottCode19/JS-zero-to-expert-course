'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `oh and you're a millenial ${firstName}`;
//       console.log(str);
//     }
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Scott';
// calcAge(1986);
// console.log(adddecl(5, 4));

// var me = 'scott';
// let job = 'web engineer';
// const birthYear = 1986;

// function adddecl(a, b) {
//   return a + b;
// }

// const addexp = function (a, b) {
//   return a + b;
// };

// const addarrow = (a, b) => a + b;

// console.log(addexp(5, 4));

// const calcAge = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge(1986);

// const scott = {
//   firstName: 'Scott',
//   year: 1986,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//     const isMillenial = function () {
//       console.log(this.year >= 1981 && this.year <= 1995);
//     };
//     scott.isMillenial();
//   },

//   greet: function () {
//     console.log(`hey, ${this.firstName}`);
//   },
// };

// // scott.calcAge();
// scott.greet();
// scott.calcAge();

// function adddecl(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// const addexp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// const addarrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// adddecl(2, 3, 5, 6);
// addexp(2, 4);

// addarrow(4, 5);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   firstName: 'scott',
//   age: 35,
// };

// const friend = me;

// me.age = 36;

// console.log(friend);
// console.log(me);

let lastName = 'Gallacher';
let maidenName = lastName;
lastName = 'Hair';

console.log(lastName);
console.log(maidenName);

const maria = {
  firstName: 'Maria',
  lastName: 'Gallacher',
  age: 33,
};

const marriedMaria = maria;
marriedMaria.lastName = 'Hair';
console.log(maria, marriedMaria);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2[2] = 4;
// console.log(arr1, arr2);

const maria2 = {
  firstName: 'Maria',
  lastName: 'Gallacher',
  age: 33,
};

const marriedMaria2 = Object.assign({}, maria2);
marriedMaria2.lastName = 'Hair';
console.log(maria2, marriedMaria2);

const scottSkills = {
  webDev: 10,
  engineering: 4,
  football: 3,
};

const scottStats = {
  height: 180,
  weight: 170,
  shoeSize: 9,
};

const scottRel = {
  friends: ['Maria', 'Steven', 'Dave'],
};

const scottAll = Object.assign(scottSkills, scottStats, scottRel);
console.log(scottAll);
console.log(scottAll.engineering);

const scottNew = Object.assign({}, scottAll);
scottNew.friends[0] = 'newBird';
console.log(scottAll.friends);
