// // let value = 3
// // let negValue = -value
// // console.log(negValue) 

// // console.log(2+2)
// // console.log(2%3)

// // let str1 = "Hello"
// // let str2 = " Musfiq"
// // let str3 = str1+str2
// // console.log(str3)

// // console.log("1"+2)
// // console.log(1+"2")
// // console.log("1"+"2")
// // console.log("1"+2+2)
// // console.log(1+2+"2")


console.log(+true)
console.log(+"");

let gameCounter = 100
// gameCounter ++;
// console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

// prefix and postfix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n


let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n


let apples = 5;

// Postfix: use the value first, then increment
let myApples = apples++; 

console.log(myApples); // Output: 5 (it used the original value)
console.log(apples);   // Output: 6 (it has now increased)

let bananas = 5;

// Prefix: increment first, then use the value
let myBananas = ++bananas; 

console.log(myBananas); // Output: 6 (it increased immediately)
console.log(bananas);   // Output: 6