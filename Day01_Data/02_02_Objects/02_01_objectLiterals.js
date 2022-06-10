// object literals
const myEmptyObject = {};

// name:value pairs
//  a property name can only contain letters, digits, dollar signs, and underscores.
const guitar = {
    name: "Jaguar Bass",
    type: "Electric",
    make: "Fender",
    color:"Black",
    bodyMaterial: "Poplar",
    bodyShape: "Jaguar Bass",
    neck: {
        material: "Maple",
        shape: "C",
        frets: "20",
        scaleLength: 32
    },
    electronics: {
        configuration: "H",
        controls: ["Master Volume", "Tone Volume"]
    },
    strings: {
        type: "Nickel Plated Steel",
        numberOf: 4,
        used: true,
    },
    refurbished: true,
    // methods
    isRefurbished: function () {console.log(`Guitar is refurbished: ${this.refurbished}`);},
    changeStrings() {
        this.strings.used = false; 
        // call changeStrings with param
    }
}

// dot notation, bracket notation and for..in statement
// for (prop in guitar) {
//     console.log(`Property name is: ${prop} and property value is ${guitar[prop]}`);
// }

// how can I create another guitar object?

// object literal enhancements - E6
const name = "Jaguar Bass",  type = "Electric", make = "Fender", refurbished=true, 
         strings = {
            type: "Nickel Plated Steel",
            numberOf: 4,
            used: true,
        };
const newGuitar = {
 name,
 type,
 make,
 refurbished,
 strings,
 color:"Black",
bodyMaterial: "Poplar",
bodyShape: "Jaguar Bass",
 isRefurbished() {console.log(`Guitar is refurbished: ${this.refurbished}`);},
 changeStrings () { this.strings.used = false; }
};

// destructuring
// const {color, bodyMaterial, bodyShape} = newGuitar;
// console.log(`${color} ${bodyMaterial} ${bodyShape}`);

// spread operator
// const obj2 = {...newGuitar};
// console.log(obj2);