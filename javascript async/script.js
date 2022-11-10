"use strict";

const countriesContainer = document.querySelector(".countries");

// function renderCountry(country) {
//   const html = `
//     <article class="country">
//         <img class="country__img" src="${country.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${country.name}</h3>
//         <h4 class="country__region">${country.region}</h4>
//         <p class="country__row"><span>👫</span>${
//           (country.population / 1000000).toFixed(1) + " M"
//         }</p>
//         <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
//         </div>
//     </article>
//   `;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// }

// function getCountry(country) {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v2/name/${country}`);

//   request.send();

//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     const country = data[0];

//     if (!country.borders) {
//       return;
//     }

//     const neighbour = country.borders[0];

//     const neighbourRequest = new XMLHttpRequest();

//     neighbourRequest.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);

//     neighbourRequest.send();

//     neighbourRequest.addEventListener('load', function(){
//         const country = JSON.parse(this.responseText);
//         renderCountry(country);
//     })

//     renderCountry(country);
//   });
// }

// getCountry("china");

fetch(`https://restcountries.com/v2/name/china`).then((data) =>
  console.log(data.json())
);
