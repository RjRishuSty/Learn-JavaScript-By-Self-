
// 😊😊😊 

let score = "33";
console.log(typeof score);
console.log(typeof(score));

// 😊😊😊  String to Number;
let strToNumber= Number(score);
console.log(typeof strToNumber);

// 😊😊 if I reassign the score value 33Abc;

score = "33Abc"; //reassing 
strToNumber = Number(score); //reassign 
console.log(typeof strToNumber); //Number
console.log(strToNumber) //NaN


// 😊😊 if i try to convert number to boolean

let userLogIn = 1;
let numToBoolean = Boolean(userLogIn);
console.log(numToBoolean); //true

// if reassing userLogIn = ""
userLogIn = "";
numToBoolean = Boolean(userLogIn);
console.log(numToBoolean); //false

/*
 true => 1 and false => 0;
 "" =>false
 "rishu" =>true
 */

//  😊😊 if try number to string

let rankNumber = 45;
let numToString = String(rankNumber);
console.log(typeof numToString);
console.log(numToString);