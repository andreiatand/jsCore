// emmet refactoring
// class declaration
function Guitar() {
    this.name="Jaguar Bass";
    this.type="Electric";
    this.make="Fender";
    this.color="Black";
    this.bodyMaterial="Poplar";
    this.bodyShape="Jaguar Bass";
    this.neck={
        material:"Maple",
        shape:"C",
        frets:"20",
        scaleLength:32
    };
    this.electronics={
        configuration:"H",
        controls:["Master Volume","Tone Volume"]
    };
    this.strings={
        type:"Nickel Plated Steel",
        numberOf:4,
        used:true,
    };
    this.refurbished=true;
    // methods
    this.isRefurbished=function () {console.log(`Guitar is refurbished=${this.refurbished}`);};
    this.changeStrings = function() {
        this.strings.used = false; 
        // call changeStrings with param
    }
}

const guitar = new Guitar();
const newGuitar = new Guitar();
console.log(guitar == newGuitar);
console.log(guitar === newGuitar);


// extend classes - you can extend both a class or a function
class AcousticGuitar extends Guitar {
//  static version = 12;
//   #property = 12;
 constructor() {
     super();
     this.type = "acoustic";
     this.acousticSound = "Warm";
 }
//  constructor(test, test) {
//   console.error("this doesn't work");  
//  }

//  get privateProperty () {
//      return this.#property;
//  }

//  set privateProperty(newValue) {
//      this.#property = newValue;
//  }

// static Version()  {return this.version;}
 play() {
    console.log("Playing acoustic guitar and it sounds: ", this.acousticSound);
    // return example;
  }
}

// class expression - unnamed
let ExpressionClass = class {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
}
console.log("Unnamed class name: ", ExpressionClass.name);
// class expression - named
let ExpClassNamed = class ExpressionClassNamed {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
}

console.log("Named class name: ", ExpClassNamed.name);

// extend more than one class
// let calculatorMixin = function (Base) {
//    return  class extends Base {
//         calc() {}
//     }
// }
// let randomizerMixin = function (Base) {
//     return  class extends Base {
//         randomize() {}
//      }
//  }
//  class Foo { }
// class Bar extends calculatorMixin(randomizerMixin(Foo)) { }