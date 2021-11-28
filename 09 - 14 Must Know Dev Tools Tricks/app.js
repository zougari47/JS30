const dogs = [{
    name: 'Snickers',
    age: 2
},{
    name: 'hugo',
    age: 8
}];

//Regular 
console.log('hello');

//Interpolated
console.log('Hello I am a %s string!', '🎃');

//styled
console.log('%c I am some great text', 'color:red;')

//wrning!
console.warn('OH NOOO');

//Error
console.error('OH NOOO');

//Info
console.info('fun fact')

//Testing
const h1 = document.querySelector('h1');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

//clearing
// console.clear()


//Viewing DOM Elements 
console.log(h1);
console.dir(h1);


//Grouping together
dogs.forEach(dog => {
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 10} years old`);
});



//counting
console.count('ahmed');
console.count('zougari');
console.count('ahmed');
console.count('zougari');
console.count('ahmed');
console.count('ahmed');
console.count('zougari');
console.count('ahmed');


//timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data')
});

//table
console.table();

