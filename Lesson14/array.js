//array

const myArr = [0,1,3,5,7,true, 'musfiq']

const myHero = ["Batman","Superman"]

const myArr2 = new Array(1,5,8)

// console.log(myArr[2]);

// console.log(myArr2[1]);

// Array method

// myArr.push(12)
// myArr.push(99)
// myArr.push(391)
// myArr.pop()

myArr.unshift(9)
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.includes(true));

// console.log(myArr.indexOf('musfiq'));
// console.log(myArr.indexOf(55));// result -1

const newArr = myArr.join()// converts to string

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);

// slice,splice

console.log("A ", myArr);
const mynewAr = myArr.slice(1,3)

console.log(mynewAr);
console.log("B " ,myArr);

const mynewAr2 = myArr.splice(1,3)
console.log(mynewAr2);
console.log("C ", myArr);

 







