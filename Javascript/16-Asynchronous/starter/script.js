'use strict';

// https://countries-api-836d.onrender.com/countries/
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  const html = `<article class= "country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1_000_000
    ).toFixed(1)} million people </p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  ///////////////////////////////////////
  // Old way of doing AJAX
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText); // json is a string, so we need to parse it with JSON.parse(). The result is an array of objects, so we use destructuring to get the first element
    // console.log(data); // the object
    renderCountry(data);

    // Get neighbor country
    const neighbor = 'alala'; // optional chaining operator
    // console.log(neighbor);
    if (!neighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};
// The order of the countries is not guaranteed, because the requests are asynchronous, whichever request finishes first will trigger the event listener first.
// getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');
// getCountryAndNeighbor('canada');
// getCountryAndNeighbor('usa');

// to make the requests in order, we can nest the requests

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// // The modern way of making an AJAX call: with the fetch API
// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request); // returns a promise stored in the request variable

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       response => {
//         if (!response) throw new Error('Country not found!');
//         return response.json();
//       }
//       // pass a second callback function to the then method, which will be called when the promise is rejected
//       // err => alert(err)
//     ) // available in the fetch API for all response objects, also an async function
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = 'alala';
//       // const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//       // What we got returned from the last promise will be the input for the next promise
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (!data) return;
//       return renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       // catch also returns a paomise
//       console.error(`${err}💥💥`);
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); // resolved value of json()
// };

const getJSON = (url, errMsg) => {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Error ${response.status}: ${errMsg}`);
    return response.json();
  });
};

// const getCountryData = country => {
//   return getJSON(
//     `https://restcountries.com/v2/name/${country}`,
//     'Country not found!'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) throw new Error('${country} has no neighbour!');
//       return getJSON(
//         `https://restcountries.com/v2/name/${neighbor}`,
//         'Neighbour not found in our database!'
//       );
//     })
//     .then(data => {
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .catch(err => {
//       console.error(err);
//       renderError(err);
//     });
// };

// const lotteryPromise = new Promise(function (resolve, reject) {
//   // creating an instance of the Promise class
//   // executor function
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win!'); // fulfilled, the value will be passed to the then() method
//     } else {
//       reject(new Error('You lost your money!')); // rejected, the value will be passed to the catch() method
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // Promisifying setTimeout

// wait(1)
//   .then(() => {
//     console.log('I waited for 1 second');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 second!');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 second!');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 4 second!');
//   });

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// // const whereAmI = () => {
// //   getPosition()
// //     .then(res =>
// //       fetch(
// //         `https://geocode.xyz/${res.coords.latitude},${res.coords.longitude}?geoit=json&auth=876832653189406248097x49051`
// //       )
// //     )
// //     .then(res => res.json())
// //     .then(data => {
// //       console.log(`You are in ${data.country}`);
// //       return fetch(
// //         `https://restcountries.com/v2/name/${data.country.toLowerCase()}`
// //       );
// //     })
// //     .then(res => res.json())
// //     .then(data => renderCountry(data[0]));
// // };

// // btn.addEventListener('click', whereAmI);

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// function createImage(imgPath) {
//   return new Promise((resolve, reject) => {
//     const newImg = document.createElement('img');
//     newImg.src = imgPath;
//     newImg.addEventListener('load', () => {
//       document
//         .querySelector('.images')
//         .insertAdjacentElement('afterbegin', newImg);
//       resolve(newImg);
//     });

//     newImg.addEventListener('error', () => {
//       reject(new Error('Image not found'));
//     });
//   });
// }

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 3 loaded');
//   })
//   .catch(err => console.error(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // location
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // reverse geoCoding
//     const response = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=876832653189406248097x49051`
//     );
//     const position = await response.json();
//     const country = position.country;
//     // country data
//     const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`Something went wrong ${err.message}`);
//   }
// };
// console.log(whereAmI());

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('taiwan', 'japan', 'canada');

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/japan`),
//     getJSON(`https://restcountries.com/v2/name/taiwan`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, s * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(3)])
//   .then(res => console.log(res[0]))
//   .catch(err => {
//     console.log(err);
//   });

// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('success'),
// ]).then(res => console.log(res));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const newImg = document.createElement('img');
    newImg.src = imgPath;
    newImg.addEventListener('load', () => {
      document
        .querySelector('.images')
        .insertAdjacentElement('afterbegin', newImg);
      resolve(newImg);
    });

    newImg.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
}
// let currentImg;
// const loadPause = async () => {
//   try {
//     const img1 = await createImage('./img/img-1.jpg');
//     console.log('image 1 loaded');
//     currentImg = img1;
//     await wait(2);
//     currentImg.style.display = 'none';
//     const img2 = await createImage('./img/img-2.jpg');
//     console.log('image 2 loaded');
//     currentImg = img2;
//     await wait(2);
//     currentImg.style.display = 'none';
//     const img3 = await createImage('./img/img-3.jpg');
//     console.log('Image 3 loaded');
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadPause();

const loadAll = async imgArr => {
  const imgs = imgArr.map(async img => await createImage(img));
  const imgsel = await Promise.all(imgs);
  imgsel.forEach(img => img.classList.add('parallel'));
  console.log(imgsel); // async function returns a promise instead of the fullfilled value
  // If we want the fullfilled value
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 3 loaded');
//   })
//   .catch(err => console.error(err));
