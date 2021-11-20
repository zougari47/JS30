// odd and even 
// rotate x , fetch(), then , promis
// presective
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const prom = fetch(endpoint);
fetch(endpoint).then(blob => blob.json())
.then(data => cities.push(...data));
console.log(cities);

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        // here we need figure out if the city or sate matches 
        //what was searched
    });
}
