// JSON file
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

const cities = [];
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

// fetch works with a promise so you need to tell what to do next (.then)
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter( place => {
    // match search with cities
    // need to use regex to compare the word input
    // g => means will be global
    // i => means will insensitive
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMacthes() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place=> {
    const regex = new RegExp(this.value, "gi");
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">population ${numberWithCommas(place.population)}</span>
      </li>
    `;
  // this will transform in an array so we need join
  }).join("");
  suggestions.innerHTML = html;
}

// when you have change you need to click outside the input
searchInput.addEventListener("change", displayMacthes);
searchInput.addEventListener("keyup", displayMacthes);
