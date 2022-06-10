var header = document.getElementById("header");
header.innerHTML = `Function declaration: 4 ways of declaring functions`;
//------------

// function declaration/statement
    // function logEvent() {
    //     console.error("test");
    //     //return undefined
    // }
    // function sum(a, b) {
    //     console.log("Total: ", a + b);
    //     //return undefined
    // }
// params passed by sharing
    // function multiply(x) {
    //     x = x*x;
    // return x;   
    // }
    // function changeObject(myObj) {
    //     myObj.newProp = "23";
    //     // myObj = {test:23}; // move this up
    // }
    // function changeArray(arrayToChange) {
    //     arrayToChange.push(23);
    //     // arrayToChange = []; // move this up
    // }
// function expressions - whenever you need a function you can type it in
 //unnamed / anonymous
    // const unnamedExpression  = function(params) {
    //     return params;
    // }
 // named - reference itself
    // const fib = function fibonacci(num) {
    //     return num ==  0 ?  0 :
    //                 num == 1  ? 1 : 
    //                 fibonacci(num - 1) + fibonacci(num - 2);
    // }

    // const arrayToBeFiltered = [1,2,3,4,5];
    // console.log( arrayToBeFiltered.filter(function (item) { return item <=3;}));

// arrow functions : Identifier => Expression
    //console.log(arrayToBeFiltered.filter(item => item <= 3));
    // const colors = {color: 'black', bodyColor: 'red', textColor:'blue'};
    // const viewColors = ({color, bodyColor}) => {console.log(`${color} ${bodyColor}`);}
    // console.log(viewColors(colors));

// IIFE - Immediately Invoked Function Expression - runs as soon as defined
   //Grouping Operator + Invocation: (<function or arrow>)()
    // (function() {
    // console.log("I am executing");
    // })();

    // creating a module with an IIFE
    // import { makeWithdraw } from "./03_05_modules.js";
    // makeWithdraw(23);