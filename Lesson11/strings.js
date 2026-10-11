const name = "Musfiq"
const repoCount = 2

// console.log(name + repoCount);

// console.log(`Hello, this is ${name} and my repo count is ${repoCount}`);


const gameName = new String('miki-mouse-new-game')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,4)

// console.log(newString);

const anotherString = gameName.slice(-5 , 4)

// console.log(anotherString);

const newStringOne = "    Sanim    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sanim.com/sanim%20website"


console.log(url.replace('%20', '-'));

console.log(url.includes('sanim'));

console.log(gameName.split('-'));

