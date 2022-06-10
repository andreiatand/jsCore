// Array object
    console.log('`The Array object: ', Array.prototype);
// fits a mixture of different data types
   let mixedArray = [1, "one", true, NaN, {testProp: "testProp"}];
   console.log("Fits a mixture of different data types: ", mixedArray);
// resizable
    // mixedArray.length = 3
    // mixedArray.length = 10 - sparse arrays

// elements accessed through indexes
   // mixedArray[2]     

   // zero-index - off by one error
 // mixedArray[1]

 // looping: for, for..of, foreach

// built-in functions: pop, push, shift, unshift, reverse, sort, slice, splice, join, map, filter, find

// spread operator - expand values
//  let secondArray = [1, 2, ...mixedArray, 3, 4, 5]
//function sum(x,y,z) { return x+y+z;}

// destructuring - unpack values
// let [firstElement, secondElement] = secondArray;
// let [one, two, ...rest] = secondArray;