const accountId = 1234;
let accountEmail = "me1234@gmail.com";
var accountPassword = "1234";
accountCity = "Dhaka";
let accountState;
// accountId = 2345;

accountEmail = "kaka@gmail.com";
accountPassword = "4321";
accountCity = "Chittagong";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* Not use var preferred
because of issue in block scope and function scope{} */