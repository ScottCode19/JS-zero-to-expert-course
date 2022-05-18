'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-08-21T09:15:04.904Z',
    '2020-09-08T10:17:24.185Z',
    '2021-09-10T14:11:59.604Z',
    '2021-09-14T17:01:17.194Z',
    '2021-09-17T23:36:17.929Z',
    '2021-09-18T07:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Scott Hair',
  movements: [100, 200, 565, -55.63, 10000],
  interestRate: 1.2, // %
  pin: 3333,

  movementsDates: [
    '2021-06-18T21:31:17.178Z',
    '2021-07-23T07:42:02.383Z',
    '2021-08-04T09:15:04.904Z',
    '2021-09-08T10:17:24.185Z',
    '2021-09-10T14:11:59.604Z',
    '2021-09-14T17:01:17.194Z',
    '2021-09-17T23:36:17.929Z',
    '2021-09-18T07:51:36.790Z',
  ],
  currency: 'GBP',
  locale: 'en-GB',
};

const accounts = [account1, account2, account3];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatCurrency = function (amount) {
  const options = {
    style: 'currency',
    currency: currentAccount.currency,
  };
  return new Intl.NumberFormat(currentAccount.locale, options).format(amount);
};

const formatMovementsDate = function (currentAccount, date) {
  const now = new Date();
  const daysAgo = Math.floor((now - date) / 86400000);
  // return daysAgo;
  if (daysAgo === 0) return 'Within the last 24hrs';
  if (daysAgo === 1) return 'Yesterday';
  if (daysAgo <= 7) return `${daysAgo} days ago`;
  else return new Intl.DateTimeFormat(currentAccount.locale).format(date);
};

const displayMovements = function (currentAccount, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? currentAccount.movements.slice().sort((a, b) => a - b)
    : currentAccount.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const now = new Date(currentAccount.movementsDates[i]);
    const formattedMov = formatCurrency(Math.abs(mov.toFixed(2)));
    const displayDate = formatMovementsDate(currentAccount, now);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const options = {
    style: 'currency',
    currency: currentAccount.currency,
  };
  const formattedBal = formatCurrency(acc.balance.toFixed(2));
  labelBalance.textContent = `${formattedBal}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes.toFixed(2));

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(Math.abs(out).toFixed(2));

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(interest.toFixed(2));
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//LOGOUT TIMER
//start timer
const startLogoutTimer = function () {
  let time = 600;
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const resetTimer = function () {
  clearInterval(timer);
  timer = startLogoutTimer();
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//fake always log in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

//LOGIN

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //format dates
    const now = new Date();
    const locale = navigator.language;
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    //get langauage codes by googling ISO language code table
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //start logout timer
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogoutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

// TRANSFER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    resetTimer();
  }
});

// LOAN
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    const approvalTimer = setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';
  resetTimer();
});

//CLOSE
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//SORT
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  resetTimer();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);
// //JS is weird
// console.log(0.1 + 0.2);

// console.log(+'23');
// //can also do
// console.log(+'23'); //type coersion;
// //parsing (needs to start with a number)(second argument is base of numbers use0 - not required)
// console.log(Number.parseInt('100px', 10));
// console.log(Number.parseInt('100px', 2));
// console.log(Number.parseInt('5.6'));
// console.log(Number.parseFloat('5.6'));
// //can do without Number but good practise to use it
// console.log(Number.isNaN('20')); //this is NOT not a number
// console.log(Number.isNaN(20 / 'e'));
// //infinity - best way to7 check if its a number
// console.log(20 / 0);
// console.log(Number.isFinite(20 / 0));
// console.log(Number.isFinite(25));
// console.log(Number.isFinite('25'));
// console.log(Number.isFinite(+'25x'));
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

// //square rt
// console.log(Math.sqrt(4));
// //cube route - pow of 1/3
// console.log(27 ** (1 / 3));

// console.log(Math.max(1, 2, 5, 6, 4, 2, 4, 9, 1));
// console.log(Math.max(1, 2, 5, 6, 4, '2', 4, 9, 1)); //fine
// console.log(Math.max(1, 2, 5, 6, 4, '23px', 4, 9, 1)); //not fine (NaN)

// console.log(Math.min(2, 1, 5, 6));

// console.log(Math.PI);
// console.log(Math.PI * parseFloat('10px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1);
// ///better way
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - (min - 1)) + min);

// console.log(randomInt(23, 40));

// console.log(Math.round(23.3)); //23
// console.log(Math.round(23.7)); //23
// console.log(Math.round(23.5)); //24

// console.log(Math.ceil(32.2)); //33
// console.log(Math.floor(32.9)); //32

// console.log((2.759).toFixed(2)); //string with decmial trunced
// console.log(+(2.759).toFixed(2)); //number with decmial trunced
// //boxing - the above is where JS coverts the primiitive with a an obeject to use methods then converts back

// %
// labelBalance.addEventListener('click', function () {
//   const els = [...document.querySelectorAll('.movements__row')].forEach(
//     function (row, i) {
//       if (i % 2 === 0) {
//         row.style.backgroundColor = 'orangeRed';
//       }
//       if (i % 3 === 0) {
//         row.style.backgroundColor = 'blue';
//       }
//     }
//   );
// });

//---------------BigInt--------------------

// console.log(Number.MAX_SAFE_INTEGER);
// //use n to denote a big number
// const bigNo = 123456789123456789n;
// const minusNo = 123456789100000000n;
// const result = bigNo - minusNo;
// console.log(result);

// console.log(Number(result)); ///convert to number

// //multiplying a big ass no
// const timesNum1 = 123456789;
// const timesNum2 = 100000000;
// const bigIntResult = BigInt(timesNum1) * BigInt(timesNum2);
// console.log(bigIntResult);

//---------------Date-----------------

// const now = new Date();
// console.log(now);

// console.log(new Date('Sep 10 2021 11:34:00')); //today logged literally
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5)); //Y,M,D,H,M,S (months are 0 based)
// console.log(new Date(2037, 10, 31, 15, 23, 5)); //autocorrects as Nov doesnt have 30 days//1st Dec
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// console.log(3 * 24 * 60 * 60 * 1000); //timestamp for 3 days after the unix time (1am, 01/01/1970)

//working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2022, 3, 6, 15, 21);
// console.log(+future);

// const daysPassed = function (date1, date2) {
//   return Math.abs(Math.floor((date2 - date1) / 86400000));
// };

// console.log(daysPassed(new Date(), future));

// Intl - date formatting

// const now = new Date();
// const locale = navigator.language;
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'numeric',
//   year: 'numeric',
// };
// //get langauage codes by googling ISO language code table
// console.log(
//   new Intl.DateTimeFormat(currentAccount.locale, options).format(now)
// );

//Internationalising numbers

// const num = 38456547.23;

// const options = {
//   style: 'unit', //percent + currency also
//   unit: 'mile-per-hour', //celcius (unit is ignored for currency),
//   currency: 'EUR', //example
// };
// console.log(new Intl.NumberFormat('en-US').format(num));
// console.log(new Intl.NumberFormat('ar-SY').format(num));
// console.log(new Intl.NumberFormat('de-DE').format(num));
// console.log(new Intl.NumberFormat(navigator.language).format(num));

// console.log(new Intl.NumberFormat('en-US', options).format(num));

// const options2 = {
//   style: 'currency', //percent + currency also
//   currency: 'GBP', //example
// };

// console.log(new Intl.NumberFormat(navigator.language, options2).format(num));

// SET TIMEOUT

// const ingredients = ['pepperoni', 'salami', 'spinach'];

// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your ${ing1} and ${ing2} pizza`),
//   2000,
//   ...ingredients
// );

// console.log('waiting...');

// if (ingredients.includes('spinach')) {
//   clearTimeout(pizzaTimer);
// }

// SET INTERVAL

// setInterval(function () {
//   const now = new Date();
//   const sec = now.getSeconds();
//   const min = now.getMinutes();
//   const hour = now.getHours();
//   console.log(`${hour}:${min}:${sec}`);
// }, 1000);
