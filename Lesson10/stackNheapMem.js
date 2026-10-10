//Stack (primitive)
//Heap (Non-primitive)

// Stack Memory
// numbers , booleans etc
let myCyclename = "Duranta"

let newCycle = myCyclename
console.log(newCycle);

newCycle = "Veloce" 

console.log(myCyclename);
console.log(newCycle);



//Heap Memory

let userOne = {
    email: "user@go.com",
    uid : "user@pay.com" 
}

let userTwo = userOne
console.log(userOne);

userTwo.email = "new@go.com"
userTwo.uid = "12@pay.com"
console.log(userOne);
console.log(userTwo);