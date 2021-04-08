// App.js has been editted using arrow functions too
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// // Verbose form of using map function
// function square(x){
//   return x*x
// }
// const newNumber = numbers.map(square)

// //shorter form of using map function
// const newNumber = numbers.map(function(x){
//   return x*x
// })

// // shortest form of using map fnctions (using ES6 arrow functions)
const newNumber1 = numbers.map((x) => x * x);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const newNumbers2 = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const newNumbers3 = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
var newNumber4 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const newNumber5 = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const newNumber6 = numbers.findIndex((num) => num > 10);
