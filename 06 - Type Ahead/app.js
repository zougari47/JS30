// *odd & even 
//      div:nth-child(odd/even)
//      Odd and even are keywords that can be used to match child elements whose index is odd or even (the index of the first child is 1).

// *rotate x 
// The rotateX() CSS function defines a transformation that rotates an element around the abscissa (horizontal axis) without deforming it.
// , *fetch(), 
// The fetch() method in JavaScript is used to request to the server and load the information in the webpages. The request can be of any APIs that returns the data of the format JSON or XML. 
// *then ,
// The then() method in JavaScript has been defined in the Promise API and is used to deal with asynchronous tasks such as an API call.
//  *promis
//  A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
// *.json() 
// The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON
// presective


const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint).then(blob => blob.json())
.then(data => cities.push(...data));
// console.log(cities);

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        // here we need figure out if the city or sate matches 
        //what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}



function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `
            <span class="hl">${this.value}</span>
        `);
        const stateName = place.city.replace(regex, `
            <span class="hl">${this.value}</span>
        `);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
        </li>
        ` ;
    }).join('');
    suggestions.innerHTML = html;
}

const input = document.querySelector('#search');
const suggestions = document.querySelector('.suggestions');




input.addEventListener('keyup', displayMatches);
input.addEventListener('change', displayMatches);