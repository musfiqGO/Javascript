const score = 400

const balance = new Number(1000)
// console.log(balance);

// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 1.489734

// console.log(othernumber.toPrecision(3));


const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

//-----------------------Maths----------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(2.9));
console.log(Math.floor(9.9));

console.log(Math.min(2,4,5,1,9));
console.log(Math.max(11,43,575674,452345));
console.log(Math.random());//0-1 value, decimal value

console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)