//start with strings, numbers and boleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "ahmed";
let name2 = name;
console.log(name, name2);
name = "aziz";
console.log(name, name2);

//let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

//and we want to make a copy of it
const team = players;

console.log(players, team);
//you might think we can just something like this:
// team[3] = "Ahmed";

//the orginal one also change because is an array refernce,
// not an array copy
// to make a copy we use slice method
const team2 = players.slice();

//or we create a new array and concat the old one in
const team3 = [].concat(players);

//or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

//the same thing goes for objects,
const person = {
  name: "Ahmed Zougar",
  age: "21",
};

//and think we make a copy:
const captian = person;
// captian.number = 90;

//how do we take a copy insted?
const cap2 = Object.assign({}, person, { number: 45 });

//spread
const cap3 = { ...person };

// Object to assign work for 1 level not in deep level
//What your can do
const cap4 = JSON.parse(JSON.stringify(captian));
