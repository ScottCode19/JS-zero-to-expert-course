'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //removes the default transactions in the HTML

  const movementsIncSort = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  movementsIncSort.forEach(function (mov, i) {
    //looping over the movements array
    const type = mov > 0 ? 'deposit' : 'withdrawal'; //setting the type (dep or withd based on value)
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } - ${type}</div>
        <div class="movements__value">${mov} GBP</div>
      </div>
      `; //creating a template of the movements row element with dynamic variables
    containerMovements.insertAdjacentHTML('afterbegin', html); //inserting a row elemnt for each iteration.
  });
};

const calcAndDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `£${acc.balance}`;
};

const creatUsernames = function (accts) {
  accts.forEach(acct => {
    acct.username = acct.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

creatUsernames(accounts);

const updateUI = function (currentAccount) {
  displayMovements(currentAccount.movements);
  calcAndDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

const calcDisplaySummary = function (account) {
  const deposits = `£${account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur)}`;

  const withdrawals = `£${Math.abs(
    account.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur)
  )}`;

  const interest = `£${account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest > 1)
    .reduce((acc, cur) => acc + cur)}`;
  labelSumInterest.textContent = interest;
  labelSumIn.textContent = deposits;
  labelSumOut.textContent = withdrawals;
};

//////////////Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevents form from submitting
  const username = inputLoginUsername.value;
  const pin = inputLoginPin.value;
  currentAccount = accounts.find(el => el.username === username);
  if (currentAccount?.pin === Number(pin)) {
    containerApp.style.opacity = 1;
    //clear input fields and lose focus
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }!`;
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    currentAccount.username !== receiverAcc.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert("You can't do that!");
  }
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amountRequested = Number(inputLoanAmount.value);
  if (currentAccount.movements.some(mov => mov >= amountRequested / 10)) {
    currentAccount.movements.push(amountRequested);
    updateUI(currentAccount);
  } else {
    alert('Loan Declined');
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    Number(inputClosePin.value) === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    accounts.splice(
      accounts.findIndex(acc => acc.username === currentAccount.username),
      1
    );
    console.log('account closed');
    inputClosePin.value = inputCloseUsername.value = '';
    containerApp.style.opacity = 0;
    alert('This Account is no closed');
  }
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-2));
// console.log(arr.slice(0, -2));
// const copy = arr.slice();
// console.log(copy);

//splice - same as slice but deletes from original array and returns whats has been deleted (2nd argument is delete count)

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr2.splice(2, 4));
// console.log(arr2);
// //used commonly to remove last element
// arr2.splice(-1);
// console.log(arr2);

//reverse - mutates the original array
// const arr3 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr3.reverse());
// console.log(arr3);
// //concat - doesnt mutate
// console.log(arr.concat(arr3));
// //same as
// console.log([...arr, ...arr3]);

// //join
// console.log(arr3.join('x'));

//forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //example with for of loop - can use break and continue
// for (const [index, value] of movements.entries()) {
//   console.log();
//   value < 0
//     ? console.log(`Transaction ${index + 1}: £ ${Math.abs(value)} credit`)
//     : console.log(`Transaction ${index + 1}: £ ${value} debit`);
// }
// //for each parameters: Movement, index of current el, full array. dont nee to use all three
// //continue and break dont work in for each
// movements.forEach(function (movement, index, array) {
//   movement < 0
//     ? console.log(`Transaction ${index + 1}: £ ${Math.abs(movement)} credit`)
//     : console.log(`Transaction ${index + 1}: £ ${Math.abs(movement)} debit`);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (val, key, map) {
//   console.log(`${key}, ${val}, ${map}`);
// });
// const currencyList = ['USD', 'GBP', 'GBP', 'GBP', 'JPY', 'USD', 'EUR'];
// const currenciesUnique = new Set(currencyList);

// //set has same key and value
// currenciesUnique.forEach(function (val, _value, set) {
//   console.log(val, set);
// });

//------------coding challenge 1--------------

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2, 2);
//   const agesAllDogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(agesAllDogs);
//   agesAllDogs.forEach(function (val, i) {
//     if (val < 3) {
//       console.log(`Dog number ${i + 1} is a still a puppy`);
//     } else {
//       console.log(`Dog number ${i + 1} is an adult and is ${val} years old`);
//     }
//   });
// };

// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//-----------------Map, filter and reduce----------------------

// MAP method

// const euroToUSD = 1.1;

// const movementsUSD = movements.map(mov => Math.trunc(mov * euroToUSD));
// console.log(movementsUSD);

// //how a for of would look for the same
// const movUSD = [];
// for (const mov of movements) {
//   movUSD.unshift(Math.trunc(mov * euroToUSD));
// }
// console.log(movUSD);

// //map again
// const movementString = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: ${Math.abs(mov)} ${mov < 0 ? 'credit' : 'debit'}`
// );

// console.log(movementString);

//filter method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const over400 = movements.filter(movement => movement > 400);
// console.log(movements);
// console.log(over400);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

//reduce method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i) {
//   console.log(`acc at iteration ${i} is ${acc}, cur is ${cur}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// //using reduce to get max

// const maxValue = movements.reduce((acc, cur) => (acc < cur ? cur : acc));

// console.log(maxValue);

//----------------code challenge 2 -------------------

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (dogAges) {
//   const humanAges = dogAges.map(dogAge =>
//     dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
//   );
//   const adultDogs = humanAges.filter(dogAge => dogAge >= 18);
//   const averageAge = adultDogs.reduce(
//     (acc, cur) => acc + cur / adultDogs.length,
//     0
//   );
//   return averageAge;
// };

// console.log(calcAverageHumanAge(data2));

//-------------------coding challenge 3 ------------------

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = dogAges =>
//   dogAges
//     .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
//     .filter(dogAge => dogAge >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// console.log(calcAverageHumanAge(data2));

//---------------find method---------------
//returns the first element that returns true
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(accounts);
// console.log(account);

//---------------findIndex (see bankist app)----------------

//---------------includes------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.includes(450));

// //--------------some------------

// const anyDeposits = movements.some(mov => mov > 0);
// const anyDepAbove5000 = movements.some(mov => mov > 5000);
// console.log(anyDeposits, anyDepAbove5000);

//----------every-----------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.every(mov => mov > -500));
// console.log(account4.movements.every(mov => mov > 0));

// //passing callback seperately

// const deposit = mov => mov > 0;
// console.log(account4.movements.every(deposit));

//---------flat and flatMap------------
// FLAT - removes nesting
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8, [9]];
// console.log(arr.flat());

//flat
// const arrDeep = [[1, [2, 3], 4], [5, [6, 7, , 8, [9, 10]]], 11];
// //argument is depth of flattening
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));
// console.log(arrDeep.flat(3));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const totalBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
// console.log(totalBalance);

// //chained version

// console.log(
//   accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, cur) => acc + cur, 0)
// );

// //flatMap - same as Map().flat() - only goes 1 level deep, if need to go deeper just use flat

// console.log(
//   accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur)
// );

//----------------sort-------------
// const owners = ['Scott', 'Maria', 'Steven', 'Dave'];
// console.log(owners.sort());
// console.log(owners); //mutates original array

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.sort()); //doenst work (converts to strings and then sorts)

// //ascending
// const movementsSorted = movements.sort((a, b) => {
//   if (a > b) return 1;
//   //positive switches order
//   else return -1; //negative keeps order
// });
// console.log(movementsSorted);

// //decending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   //positive switches order
//   else return 1; //negative keeps order
// });

// console.log(movementsSorted);
// //better way to do ascending
// movements.sort((a, b) => a - b);

// console.log(movementsSorted);

// console.log(movementsSorted);
// //better was to do descending
// movements.sort((a, b) => b - a);

// console.log(movementsSorted);

//----------creating and filling arrays

// const arrFilled = new Array(7);
// console.log(arrFilled);
// //can only use fill on this array
// // arrFilled.fill(4);
// //params = new array param = length
// //fill = value to fill with, start index, end index
// arrFilled.fill(4, 3, 5);
// console.log(arrFilled);

// //from param of callback - (curr, i)
// const arrayFrom = Array.from({ length: 7 }, () => 1);
// console.log(arrayFrom);

// //use underscore to denote and unused variable
// const array1to7 = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(array1to7);

// const randomDice100 = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 6) + 1
// );
// console.log(randomDice100);

//creating node list of HTML elements in an array

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   ).map(el => Number(el.textContent.replace('£', '').replace(' GBP', '')));
//   console.log(movementsUI);
// });

// //instead of chaining .map, the second element of the from method is for a mapping function.

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('£', '').replace(' GBP', ''))
//   );
//   console.log(movementsUI);
// });

// //could also just spread but would need to map seperately

//--------which method to use---------

//////mutates original array
//add - push, unshift
//remove - pop, shift, splice
//others - reverse sort fill

//////non mutating (new array)
//computed mutated - map
//filter for only emelement that match condition - filter
//copy or copy of potion of original - slice
//concatenating - concat
//flattening - flat/flatMap

//////find an index
//based on value - indexOf
//based on test condition - findIndex

//////find an array element
//based on test condition - find

///////know is array include
//based on value - includes
//based on test condition - some, every

///////create a new string
//join

//////transform to a single value - reduce

//////loop over (no new array, just loops and does whatever) - forEach

//-------------more practice-------------
// // ex 1 - sum of all deposits
// const bankDespoitSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(trans => trans > 0)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(bankDespoitSum);

//ex 2 - how many deposits greater that 1000

// const depositsOverAGrand = accounts
//   .flatMap(acc => acc.movements)
//   .filter(trans => trans > 1000).length;

// const depositsOver1000ReduceMethod = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur > 1000 ? ++acc : acc), 0);

// console.log(depositsOverAGrand);
// console.log(depositsOver1000ReduceMethod);

//ex 3 - create and object which has the sum of the deposits and withdrawals using reduce
// const depositsAndWithdrawals = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     // (sums, cur) => {
//     //   cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//     //slightly drier version below
//     (sums, cur) => {
//       sums[cur > 0 ? `deposits` : `withdrawals`] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(depositsAndWithdrawals);

//ex 4 - creat a function to convert a string to title case (capitalised other than a, the, and, an)
// const convertStringToTitle = function (string) {
//   const capitalise = function (string) {
//     return string[0].toUpperCase() + string.slice(1);
//   };
//   const exceptions = ['a', 'and', 'the', 'but', 'or', 'in', 'if', 'of', 'is'];
//   const titleCase = string
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalise(word)))
//     .join(' ');
//   return capitalise(titleCase);
// };

// console.log(convertStringToTitle('The is a title and I like the LOOK of it'));

// console.log(
//   convertStringToTitle(
//     'a long string requiring capitalisation of the main words'
//   )
// );

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects �

// Hints: Use many different tools to solve these challenges, you can use the summary lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const challenge4Function = function (dogs, ownerName) {
  dogs.forEach(dog => {
    dog.recommendedFood = dog.weight ** 0.75 * 28;
    dog.overFed = dog.curFood > dog.recommendedFood * 1.1 ? true : false;
    dog.underFed = dog.curFood < dog.recommendedFood * 0.9;
  });

  const toHighorLow = function (ownerName) {
    const currentDog = dogs.find(dog => dog.owners.includes(ownerName));

    if (currentDog.overFed) return 'this dog eats too much';
    else if (currentDog.underFed) return 'this dog eats to little';
  };
  console.log(toHighorLow(ownerName));
  const overFedOwners = dogs
    .filter(dog => dog.overFed)
    .flatMap(dog => dog.owners);

  const underFedOwners = dogs
    .filter(dog => dog.underFed)
    .flatMap(dog => dog.owners);
  console.log(overFedOwners, underFedOwners);
  console.log(
    `${overFedOwners.join(
      ' and '
    )}'s dogs eat too much and ${underFedOwners.join(
      ' and '
    )}'s dogs eat too little`
  );
  const anyCorrectlyFedDogs =
    dogs.filter(dog => dog.recommendedFood === dog.curFood).length > 0;
  const okFedDogs = dogs.filter(dog => !dog.overFed && !dog.underFed);
  const anyOKFedDogs = okFedDogs.length > 0;
  console.log(okFedDogs);
  console.log(anyCorrectlyFedDogs);
  console.log(anyOKFedDogs);
  const DogsCopyAscendingRecFood = dogs
    .slice()
    .sort((a, b) => a.recommendedFood - b.recommendedFood);

  console.log(DogsCopyAscendingRecFood);
};

challenge4Function(dogs, 'Sarah');
