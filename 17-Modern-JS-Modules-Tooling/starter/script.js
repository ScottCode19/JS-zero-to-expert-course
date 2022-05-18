// //importing module
// // import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // addToCart('bread', 5);
// // console.log(price, tq);
console.log('importing module');

// // import * as ShoppingCart from './shoppingCart.js';

// // ShoppingCart.addToCart('milk', 5);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// import { array1 as array2 } from './shoppingCart.js';

// array2.push(5);
// console.log(array2);

// //top level await only works in modules (await outside of an async function - blocks execution of entire module)
// // console.log('starting');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data[0]);
// // console.log('finshed');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// //module pattern that used to be implemented

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippinCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from the supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('mushrooms', 4);

// // shoppingCart2.orderStock('mushrooms', 4);
// //doesnt work as not in public API

// console.log(shoppingCart2);

// ////commonJS//////////
// doesnt work in browser, does with nodeJS

// //export
//   export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart`);
//   };

// //import
// const {addToCart} = require(".shoppingCart.js")

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);
//changing original obj also changes clone so use cloneDeep from lodash

state.user.loggedIn = false;
console.log(state);
console.log(stateClone);

// console.log(stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const scott = new Person('Scott');

import 'core-js/stable';
