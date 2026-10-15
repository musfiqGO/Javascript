//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);


// let myBirthDate = new Date(2003,2,31)

// console.log(myBirthDate.toDateString());

// let myDate1 = new Date("2026-10-14")
// console.log(myDate1.toLocaleString());


let myDate2 = new Date("10-14-2026")
// console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myDate2.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getTime());
// console.log(`${newDate.getDay()} and the time`)

 newDate.toLocaleString('default',{
   weekday: "long", 
 })

