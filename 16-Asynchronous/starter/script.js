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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
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
    const neighbor = data.borders?.[0]; // optional chaining operator
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

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => response.json()
      // pass a second callback function to the then method, which will be called when the promise is rejected
      // err => alert(err)
    ) // available in the fetch API for all response objects, also an async function
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
      // What we got returned from the last promise will be the input for the next promise
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      // catch also returns a paomise
      console.error(`${err}💥💥`);
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); // resolved value of json()
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// 1. chain a catch method to the end of the promise chain
// 2.
