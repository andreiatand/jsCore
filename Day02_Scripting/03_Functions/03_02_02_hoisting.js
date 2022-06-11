var header = document.getElementById("header");
header.innerHTML = `Hoisting `;
//------------

// moving declarations of functions, variables and classes
// variables
    console.log(x);
    x=2;
    console.log(x)
    // console.log(y);
    // y=3;
    // console.log(y);
    // function doSomethingWithY() {
    //     console.log(y);
    // }
    // console.log(z);
    // z=3;
    // console.log(z);
    // function doSomethingWithZ() {
    //     console.log(z);
    // }
   
   
// functions
printMyParam("param");

// class
    //var  myClass = new MyClass(1,2,3);
    //let  myClass = new MyClass(1,2,3);
    //const  myClass = new MyClass(1,2,3);
    function doSomethingWithMyClass() {
        let  myClass = new MyClass(1,2,3);
        console.log(myClass);
    }
    // console.log(typeof MyClass);
    //doSomethingWithMyClass();
// function and class expressions - not hoisted
    //let myClassExpression = MyClassExpression(1,2,3);
    function doSomethingWithMyClassExpression() {
        console.log(MyClassExpression.name);
    }
     //doSomethingWithMyClassExpression();

    // fib(34);

// declaration
var x; // undefined by default, can use before initialize
let y=3; // need to initialize before using
// doSomethingWithY();

const z=3; // need to initialize before using
// doSomethingWithZ();

function printMyParam(param) {
    console.log("My param is: ", param);
}

class MyClass {
    constructor(name, type, value) {
       this.name= name;
       this.type=type;
       this.value=value;
    }
}
//doSomethingWithMyClass();

let MyClassExpression = class {
    constructor(name, type, value) {
        this.name= name;
        this.type=type;
        this.value=value;
     }
}
//doSomethingWithMyClassExpression();

const fib = function fibonacci(num) {
    return num ==  0 ?  0 :
                num == 1  ? 1 : 
                fibonacci(num - 1) + fibonacci(num - 2);
}
//console.log(fib(34));