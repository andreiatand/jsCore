// String:
let stringDemo = 'A string of text.';
console.log('String:', stringDemo);
console.log('string concat: ', 'one' + ' ' + 'the other');
console.log(`Template literals: ${stringDemo} and ${stringDemo}`);

// Numbers:
let integerDemo = 4;
console.log('Integer:', integerDemo);

let floatDemo = 5.6;
console.log('Floating point number:', floatDemo);

console.log(`Ranges of Number: ${Number.MIN_VALUE} and ${Number.MAX_VALUE}`);

//BigInt
let bigIntDemo =2n;
console.log('BigInt: ', bigIntDemo+1n);

// Boolean:
let booleanDemo = true;
console.log('Boolean value:', booleanDemo, !booleanDemo);

// Null value (nothing):
let nullDemo = null;
console.log('Null value:', nullDemo);

// Undefined:
let undefinedDemo;
console.log('Undefined:', undefinedDemo);

let undefinedAssignedDemo = undefined;
console.log('Undefined assigned:', undefinedAssignedDemo);

// Symbol - ES6 - unique ids
/* A Symbol is a unique and immutable primitive value and 
may be used as the key of an Object property */
let id = Symbol('propertyKey'); // factory function
console.log('Symbol: ', id);
