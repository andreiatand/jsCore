// global object = an object that exists in the global scope
console.log(`In the browser, the Global Object is: `, window);
// all var variables are added on this object

// interact with the DOM
var box = document.getElementById("box"); // or window.document
for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    div.onclick = function () {
        alert("This is box # " + i);
     };
    box.appendChild(div);
}

// Date
console.log('Current date from factory function: ', Date()); // equal to new Date().toString()
console.log('Current date from ctor: ', new Date()); // ctor with params, with instance methods
console.log('Current date milliseconds from Jan 1, 1970 ', Date.now()); // static methods
console.log('');

// Math
console.log(`Largest integer less than or equal: ${Math.floor(-3.34)}`);
const min = 10;
const max=20;
console.log(`random integer between two bounds: ${Math.floor(Math.random() * (max - min + 1)) + min}`);

// Map & Set - look into it