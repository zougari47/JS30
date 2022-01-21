const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

function strip(band) {
  return band.replace(/^(a |the |an )/i, '').trim();
}

let sorted = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
console.log(sorted);

document.querySelector('#bands').innerHTML = sorted
  .map(band => `<li>${band}</li>`)
  .join('');
