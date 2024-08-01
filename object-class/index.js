// TODO: Normal Object..........

// const students = {
//     //TODO: 👇 Properties......
//     fullName:'Rishu Raj',
//     email:'rishuraj@gmail.com',
//     //TODO: 👇Method......
//     showEmail:function(){
//         console.log(`Email is ${this.email}`);
//     }
// }
// console.log(students)
// console.log(students.showEmail());

// TODO: __proto__ ..............
// TODO: Prototypes in js......
//TODO: A javaScript object is an entity having state and behavior(properties and method).
// TODO: JS objects have a special property called prototype.
// TODO: We can set prototype using __proto__. 

// const employee = {
//     calTax() {
//       console.log("Tax rate is 10%");
//     },
//     //   calTax2: () => {
//     //     console.log("Tax rate is 10%");
//     //   },
//   };
//   const karanArjun = {
//     salery: 50000,
//   };
//   const karanArjun2 = {
//     salery: 50000,
//   };
//   const karanArjun3 = {
//     salery: 50000,
//   };
  
//   // TODO: If we want to add prototypes methods then apply __proto__
//   // TODO: __proto__ => reference of object.
//   karanArjun.__proto__ = employee;
//   karanArjun2.__proto__ = employee;
//   karanArjun3.__proto__ = employee;
  
//   console.log(employee);
//   console.log(karanArjun);



// TODO: Class in js......................
// TODO: 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

// TODO: Class is program-code template for creating objects.
// TODO: Those object will have some state (variables) and Some behaviour (function) inside it.
// TODO: class object is written in PascalCase.

// class Car{
//     constructor(brand,color,mileage){
//         this.brandName = brand;
//         this.color = color;
//         this.mileage = mileage;
//     }
//     start = function (){
//         console.log(`${this.brandName} is Start.`);
//     }
//     stop = function(){
//         console.log(`${this.brandName} is Stop.`)
//     }
// }

// const fortuner = new Car('Fortuner','White',20);
// console.log(fortuner);
// console.log(fortuner.start());
// console.log(fortuner.stop());


// const tata = new Car('Tata','White',20);
// console.log(tata);
// console.log(tata.start());
// console.log(tata.stop());

// TODO: Inheritance in js....................
// TODO: Inheritance is passing down properties and method from parent class to child class.
// TODO: If child and parent have some method, child method will be used.[Method overriding].

// class Person{
//     constructor(personName){
//         this.personName = personName;
//     }
//     eat = function(){
//         console.log(`${this.personName} is eating`);
//     }
//     sleep(){
//         console.log(`${this.personName} is Sleeping`);
//     }
//     work(){
//         console.log(`Doing Nothing.`)
//     }
// }

// class Enginer extends Person{
//     work(){
//         console.log(` is solve problem, build something`);
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log(` treate the pasents`);
//     }
// }

// const Mukesh= new Doctor('Doctor');
// console.log(Mukesh);
// console.log(Mukesh.sleep());



// TODO: Super Keyword ..............
// TODO: The super keyword is used to call the constructor of its parent class to access the parents properties and methods.

// class Person{
//     constructor(name){
//         this.role = 'Person';
//         this.name = name;
//     }
//     eat(){
//         console.log(`${this.name} is Eating.`);
//     }
// }

// class Enginer extends Person{
//     constructor(name){
//         super()
//         this.name = name;
//     }
//     work(){
//         super.eat()  //call parent methods.
//         console.log(`${this.name} Solve the problem and build somethigs`);
//     }
// }

// const engObj = new Enginer('Rishu Enginer');
// console.log(engObj)
// console.log(engObj.work())


// TODO: Lets Pratice............
// You are creating a website for your college. create a class user with 2 properties, name and email. it also has a method called viewData() that allow user to view website data.
// TODO: Example...... 
// let websiteData = 'General Store Data'
// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData = ()=>{
//         console.log(`Hey ${this.name} Your are login to our Website. your registered email is ${this.email}. Welcome to our ${websiteData}`);
//     }
// }

// const firstUser = new User('Rishu Raj','rishuraj@gmail.com');
// console.log(firstUser);
// console.log(firstUser.viewData());


// TODO: Lets Pratice............

let Data = 'General Store';
let websiteData = 'General Store Data'
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData = ()=>{
        console.log(`Hey ${this.name} Your are login to our Website. your registered email is ${this.email}. Welcome to our ${websiteData}`);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData = function(){
        Data = "FlipKart";
        console.log('Update website data is '+Data)
    }
}
const firstUser = new Admin('Admin','admin@gmail.com');
console.log(firstUser);
console.log(firstUser.editData());






