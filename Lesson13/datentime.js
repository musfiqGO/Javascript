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

//Time

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myDate2.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getTime());
// console.log(`${newDate.getDay()} and the time`)

 newDate.toLocaleString('default',{
   weekday: "long", 
 })


 let myDateB = new Date()
// console.log(myDateB);
// console.log(myDateB.toLocaleString());
// console.log(typeof myDateB);

let today = new Date(2026,9,16)

// console.log(today.toDateString());
// console.log(today.toLocaleDateString());

let myToday = new Date("10-16-2026")
// console.log(myToday.toLocaleString());

let myTime = Date.now()

// console.log(myTime);
// console.log(myToday.getTime());

// console.log(Math.floor(Date.now()/1000));

let getxdate = new Date()

console.log(getxdate);

console.log(getxdate.getFullYear());


// ctrl + space = suggestion