var header = document.getElementById("header");
header.innerHTML = `Closures = function + lexical scope `;
// ----------------------------------------------------------------

function outerFunctionScope() {
    let outerFunctionVariable = "I'm coming from the outer scope";

    function innerFunctionClosure() {
        console.log("I am not declaring any local scope vars but: ", outerFunctionVariable);
    }
    innerFunctionClosure(); 
    
    // return function rather than calling it
}

outerFunctionScope();
// console.log(outerFunctionVariable);

// private methods -- see 03_05_modules
// loop closure mistake -- see 03_02_01_scope

// closure scope chain
// global scope
let e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}
console.log(sum(2)(2)(2)(2));

const obj = {
    myValue: 10,
    add10 : function () { 
        this.myValue+=10;
    }
};

add10 = function () {
    let myValue = 10;
    return {
        addTen: function () {
        myValue += 10;
       },
       value: function() { 
           return myValue;
        }
    }
}