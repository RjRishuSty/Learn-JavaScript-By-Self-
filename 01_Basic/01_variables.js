
// 😊😊 Reassignment: means changing the value of a variable.
//  For example, the following code reassigns the value of the variable x from 10 to 20:
// let x = 10;
// x = 20;

// 😊😊 Redeclaration: means creating a new variable with the same name as an existing variable. 
// For example, the following code redeclares the variable x:
// let x = 10;
// let x = 20;



const accountId = 1524563;
// accountId = 598655; // 😊😊 const variables :- Cannot be reassigned or redeclared. it is Block scope variables.

let accountEmail = "rishuraj@gmail.com";
accountEmail = "raj@gmail.com" // 😊😊 let variables :- Can be reassigned but it cannot be redeclared. it is Block scope variables.

var accountPassword = "Rishu@123";
accountPassword = "12563"; // 😊😊 var variables :- Can be reassigned or redeclared. it is Global and function scope variables.

let accountState; //😊😊 Default value is undefined
accountAddress= "Bihar"; 
accountAddress = "Mumbai";// 😊😊 accountAddress :- Default variables is var.

console.log(accountId); //😊😊 it helps to print message in console.

console.table([accountId,accountEmail,accountPassword,accountAddress,accountState]) //😊😊 This function takes one  argument data, which must be an array or an object, 


// 👉👉👉 This Lession notes is 👉👉👉 
/*
Prefer not use to var keyword
because issue in block and function scope
*/

var testing = "abc";
