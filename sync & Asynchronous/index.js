// TODO: Synchronous code........
// TODO: what is Synchronous?
// TODO:=> Synchronous means the code runs in a particular sequence of instructions given in the program.Each instruction waits for the previous instruction to complete its execution.

// console.log("One");
// console.log("Two");
// console.log("Three");
// console.log("Four");
// console.log("Five");

// TODO: Asynchronous...............
// TODO: What is Asynchronous?
// TODO:=> Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and does not block the flow.

// console.log('ONE')
// console.log('Two')
// setTimeout(()=>{
//     console.log("Asynchronous code.......")
// },2000);
// console.log('THREE')
// console.log('FOUR')

// TODO: CallBacks...............
// TODO: What is Callbacks?
// TODO:=> A Callback is a function passed as a argument to another function.

// function sum(a,b){
//     console.log(a+b);
// }
// function showAnswer(a,b,sumCallback){
//     sumCallback(a,b);
// }
// showAnswer(2,2,sum) // Passed as a Argument...

// TODO: Second Example...........
// function message(){
//     console.log('This is Callback');
// }
// setTimeout(message, 2000);

// TODO: Callback Hell............
// TODO: What is callback hell?
// TODO: => Nested callbacks stacked below one another formimg a pyramid structure.
// TODO: Beginer Lavel.......
// function getData(data, getNextData){
//     setTimeout(()=>{
//         console.log('data',data);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// TODO: Callback Hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// });

// TODO: Call back hell ko solve karna ka laya promise ka use karta ha.

//  TODO: Promises..........
//  TODO: What is promises?
//  TODO:=> Promise is for "eventual " completion of task. it is a object in js. it is a solution to callback hell.
//  TODO: syntex => let promise = new promise((resolve,reject)=>{...........})
//  TODO: promises are three stage => When a promise is created (1) Pending.
//  TODO: (2) When promises give success status => fullfield.
//  TODO: (3) When promise give error status => rejected.

let promise = new Promise((resolve, reject) => {
    console.log("Promises is created. it is pending status"); // TODO: pending status
    // resolve("Data sent success") // this is fullfield status
    reject("Get some error") // this is reject status.
});





