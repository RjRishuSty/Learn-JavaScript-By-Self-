// TODO:Event Bubbling.........
// TODO:What is Event Bubbling?
// TODO: Event bubbling is a fundamental concept in event handling within the DOM. It allows events to propagate up from the target element to its ancestors, enabling the ability to capture and handle events at different levels of the DOM hierarchy.
// TODO: Notes👉 Default is -> Clicked element to root element means bottom to top if h1 is clicked so (1) h1 => (2) => Parent Div (3) => Body (4) =>HTML.
// let div = document.querySelector('div');
// let button = document.querySelector('button');

// div.addEventListener('click',()=>{
//     console.log('Parent Div Container');
// });

// button.addEventListener('click',()=>{
//     console.log('Button is Clicked');
// });

// TODO: Capturing.................
// TODO:👉👉 But we can change the default Behaviour if we wants to event bubbling work on parent to child THAN add true.
// Example.....

// let div = document.querySelector('div');
// let button = document.querySelector('button');

// div.addEventListener('click',()=>{
//     console.log('Parent Div Container');
// },true); // true change the default Behaviour

// button.addEventListener('click',()=>{
//     console.log('Button is Clicked');
// },true); // true change the default Behaviour

// TODO: Stop.propagation............
// TODO: => means stop event bubbling default Behaviour. only work on click elemnet.

// let div = document.querySelector('div');
// let button = document.querySelector('button');

// div.addEventListener('click',()=>{
//     console.log('Parent Div Container');
// });

// button.addEventListener('click',(event)=>{
//     event.stopPropagation();  // This is stop propagation .
//     console.log('Button is Clicked');
// });

// TODO: Note Most Important => prevent Default..................
// TODO: Means if i add PreventDefault() function in any event listenr then perventDefault change the Browser Behaviour.
// TODO: Use case => Form Submition..

// TODO: 👇👇👇👇👇👇👇👇👇👇👇 Example...........

const name = document.getElementById("fullname");
const email = document.getElementById("email");
if (localStorage.length > 0) {
  name.setAttribute("value", localStorage.getItem("fullname"));
  email.setAttribute("value", localStorage.getItem("email"));
} else {
  name.setAttribute("value", "");
  email.setAttribute("value", "");
}

const formHandlerFunction = (event) => {
  event.preventDefault();
  let name = event.target.elements["fullname"].value;
  let email = event.target.elements["email"].value;
  localStorage.setItem("fullname", name);
  localStorage.setItem("email", email);
};

const form = document
  .getElementById("formSubmit")
  .addEventListener("submit", formHandlerFunction);
