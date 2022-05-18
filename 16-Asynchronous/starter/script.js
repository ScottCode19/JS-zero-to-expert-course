'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// // https://restcountries.eu/rest/v2/  is now: https://restcountries.com/v2/

// ////////////////////////////////////////

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
// <img class="country__img" src="${data.flags.png}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.common}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )} million people</p>
//   <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//   <p class="country__row"><span>💰</span>${data.currencies}</p>
// </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// // const getCountryAndNeighbour = function (countryName) {
// //   //AJAX call country 1
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/{${countryName}}`);
// //   request.send();

// //   //load event listener

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     //render country 1
// //     renderCountry(data);

// //     ///get neighbour

// //     const [neighbour] = data.borders;
// //     console.log(neighbour);

// //     if (!neighbour) return;

// //     //AJAX call country 2
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     request2.send();
// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);
// //       console.log(data2);
// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryAndNeighbour('germany');
// // // getCountryData('ukraine');

// // const request = new XMLHttpRequest();
// // request.open('GET', `https://restcountries.com/v3.1/name/{${countryName}}`);
// // request.send();

// // const request3 = fetch(`https://restcountries.com/v3.1/name/portugal`);

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// const getJSON = function (url, errorMsg = 'something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // conutry 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     'main country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found');
//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         ' Neighbour country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => {
//       console.error(`This error happened - ${error}`);
//       renderError(`Something went wrong 😯 ${error.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
// ///////////coding challenge///////

// const countryFromCoords = function (lat, lng) {
//   fetch(
//     `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//   )
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Something really went wrong (${res.status})`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       console.log(data.address);
//       if (!data.address.town && !data.address.city)
//         throw new Error('These coordinates arent inside a town or city');
//       console.log(
//         `You are in ${
//           data.address.city ? data.address.city : data.address.town
//         }, ${data.address.country}`
//       );
//       return data.address.country;
//     })
//     .then(coun => {
//       console.log(coun);
//       getCountryData(coun);
//     })
//     .catch(error => console.log(`something went wrong (${error})`));
// };

// // countryFromCoords(55.51515, -4.37317);

// ///proving microtasks can starve the call back queue

// console.log('test start');
// setTimeout(() => console.log('0 seconds'));
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Promise.resolve('Resolved Promise 2').then(res => {
//   for (let i = 0; i < 3000000000; i++) {}
//   console.log(res);
// });
// console.log('test end');

/////bulding promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery is about to be drawn');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win!');
//     } else {
//       reject(new Error('You lost 😥'));
//     }
//   }, 3000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// /////promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(1);
//   });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('abc').catch(x => console.error(x));

//////promisifying the geolocation api

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => console.error(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const countryFromCoords = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//       );
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Something really went wrong (${res.status})`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       console.log(data.address);
//       if (!data.address.town && !data.address.city)
//         throw new Error('These coordinates arent inside a town or city');
//       console.log(
//         `You are in ${
//           data.address.city ? data.address.city : data.address.town
//         }, ${data.address.country}`
//       );
//       return data.address.country;
//     })
//     .then(coun => {
//       console.log(coun);
//       getCountryData(coun);
//     })
//     .catch(error => console.error(`something went wrong (${error})`));
// };

// const getCountryData = function (country) {
//   // conutry 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     'main country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found');
//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         ' Neighbour country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => {
//       console.error(`This error happened - ${error}`);
//       renderError(`Something went wrong 😯 ${error.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getJSON = function (url, errorMsg = 'something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
<img class="country__img" src="${data.flags.png}" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} million people</p>
  <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
  <p class="country__row"><span>💰</span>${data.currencies}</p>
</div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// btn.addEventListener('click', countryFromCoords);

// //////coding challenge 2////////////

// const images = document.querySelector('.images');

// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       images.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error(`Image not found`));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     console.log('image 1 unloaded');
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     console.log('image 2 unloaded');
//   })
//   .catch(error => console.error(error));

///////async await////////////

const whereAmI = async function () {
  //Geolocation
  try {
    const position = await getPosition();
    let { latitude: lat, longitude: lng } = position.coords;

    //reverse Geocode
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );

    if (!resGeo.ok) throw new Error('Location response is not ok');
    const data2 = await resGeo.json();
    if (!data2.address) {
      throw new Error('not a country');
    }
    const country = data2.address.country;
    //get country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Country response is not ok');
    const [data] = await res.json();

    renderCountry(data);
    return `2: You are in ${data2.address.town}`;
  } catch (error) {
    renderCountry(`This error occurred: ${error.message}`);

    //reject promise returned from async function
    throw error;
  }
};

// console.log('1: will get location');
// // const city = whereAmI();
// // console.log(city);

// whereAmI()
//   .then(town => console.log(town))
//   .catch(error => console.error(`2: error (${error.message})`))
//   .finally(() => console.log('3: finished getting location'));

///iffe

// (async function () {
//   try {
//     console.log('1: Getting Location');
//     const town = await whereAmI();

//     console.log(town);
//   } catch (err) {
//     console.error(err);
//   }
//   console.log('3: Finished');
// })();

///Promises in parallel - promise.all(where order doesnt matter)

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    // console.log(data.map(el => el[0].capital[0]));

    // console.log(data1.capital[0], data2.capital[0], data3.capital[0]);
  } catch (err) {
    console.error(err);
  }
};

const getJSON = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

get3Countries('portugal', 'france', 'germany');

//////promise.race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);

  // console.log(res[0].name.common);
})();

// racing against a timeout
// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('request took to long'));
//     }, s * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

///Promise.allSettled
/// works the same as promise.all but doesnt short circuit for rejected promises

// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject(new Error('Error')),
//   Promise.resolve('success'),
// ]).then(res => console.log(res));

// ///promise.any

// Promise.any([
//   Promise.resolve('success 1'),
//   Promise.reject(new Error('Error')),
//   Promise.resolve('success 2'),
// ]).then(res => console.log(res));

///////////code challenge 3/////////////

const images = document.querySelector('.images');
let currentImg;

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      images.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error(`Image not found`));
    });
  });
};

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     console.log('image 1 unloaded');
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     console.log('image 2 unloaded');
//   })
//   .catch(error => console.error(error));

// const loadNPause = async function () {
//   try {
//     //load image 1
//     let img = await createImage('img/img-1.jpg');
//     console.log(`image 1 loaded`);
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     console.log(`image 2 loaded`);
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgEls = await Promise.all(imgs);
    console.log(imgEls);

    imgEls.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
