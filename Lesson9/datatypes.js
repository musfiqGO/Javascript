//Datatypes 
// - primitive(Copied from memory , memory refference not given)
//      -7 types : string,Number,Boolean, Null, undefined , symbol, BigInt. 
const score = 100
const scoreValue = 11.3

const inLoggedin = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anId = Symbol('123')

console.log(id===anId);

const bigNumber = 32894534654673756723875n //bigInt

console.log(bigNumber);


// -nonprimitive ( memory refference given)
//      - Array, Object, Functions
const heros = ["superman", "batman", "spiderman"] // array

 let myObj ={
    name: "Musfiq",
    age: 23,
} // Object

const myFunction = function(){
    console.log("This is a function");
    
} 

console.log(typeof anId);





// master javascript 1) Master obeject 2) master browser/web events

