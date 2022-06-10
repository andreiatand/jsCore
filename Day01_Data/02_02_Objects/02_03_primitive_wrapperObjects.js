let stringWrapperObject = new String("wrapper object string");
console.log("Wrapper Object string: ", stringWrapperObject.valueOf());
// string methods intellisense
//console.log("mystring".) 

const bigIntValue = BigInt(Number.MAX_SAFE_INTEGER); // not a constructor function
console.log(bigIntValue);

const number = Number(34);  // or new Number(34)
console.log(number, Number.NEGATIVE_INFINITY, Number.NaN);

const booleanWrapper = new Boolean(false); // falsy, truthy, for boolean logic use Boolean(value)
console.log(booleanWrapper);