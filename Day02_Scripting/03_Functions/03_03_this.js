var header = document.getElementById("header");
header.innerHTML = `This `;
// ----------------------------------------------------------------
// Global context - outside of any function
    console.log('Global context - global object/window: ', this === window); // global object
// Function context
    function sloppyMode() {
        console.log('Sloppy mode - global object/window :', this === window); 
    }
    sloppyMode();
    function strictMode() {
        'use strict';
        console.log('Strict mode - undefined:', this === undefined); 
    }
    strictMode();

// Class context - the object instantiated using this blueprint
    class Context {
        constructor(myProp) {
            this.myProp = myProp;
        }
        myPropFunction() {console.log("Class method this is the object instantiated using this blueprint: ", this);}
        static myStaticFunction() {console.log("Static class method this is the class definition: ", this);}
    }
    let context = new Context(12);
    context.myPropFunction();
    Context.myStaticFunction();
// Object method
    var o = {
        prop: 37,
        f: function() {
            console.log("Object method this is the object literal:", this.prop);
        return this.prop;
        }
    };
  
  console.log(o.f()); // 37

  // Derived classes
    class DerivedContext extends Context {
        // constructor() {
        //     //super(12)   
        // }
        derivedFunction() {
            console.log("Function in derived class this is the object instantiated using this blueprint: ", this);
        }
    }
    let derivedContext = new DerivedContext();
    derivedContext.derivedFunction();

// Arrow functions
const arrowFunction = () => this;
console.log("In arrow functions, this retains the value of the enclosing lexical context's this:", arrowFunction() === this);

    function outerScope() {
        let outerScopeVar = "test";
        let arrowFunction = () => {console.log("Same in nested arrow function: ",this);}
        arrowFunction();
    }
    outerScope();

    class Test {
        constructor(){
            this.name="test";
        }
        testMethodArrow = () => {console.log("Same in arrow method", this.name);}
        testMethodFunction() {console.log("Same in method declaration", this.name);}
    }
    let test = new Test();
    test.testMethodArrow();
// yes but: 
    // test.testMethodArrow();
    // test.testMethodFunction();
    // let testMF = test.testMethodFunction;
    // testMF();
    // let testMA = test.testMethodArrow;
    // testMA();

// DOM event handlers
var box = document.getElementById("box");
for (let i = 0; i < 5; i++) {
  let div = document.createElement("div");
  div.onclick = function () {
      console.log("this is set to the DOM element on which the listener is placed: ", this);
    alert("This is box # " +i);
  }
  box.appendChild(div);
}

// change this during function execution with bind, call & apply
 // Function.prototype.bind
 const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope

  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());