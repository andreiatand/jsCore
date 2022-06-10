// object creation
let obj = {objProp: "test"};
console.log('Objected created through object literal: ', obj); // obj.__proto__

const FuncObj = function () { // FuncObj.prototype
    this.objProp = "test";
} 
let fObj = new FuncObj();
console.log('Object created through ctor function: ', fObj); // fObj.__proto__

// extending the prototype
// let extendedObj = {ownProp: 2,  __proto__: obj}

// FuncObj.prototype.display = function () {
//     console.log(this.objProp);
// }
// third option of creating objects using the built-in Object
let secondObj = Object.create(obj);
//console.log('Object created through built-in Object and using prototype of obj: ', secondObj); // secondObj.__proto__

// prototype chain
//Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(window)))))

// don't do monkey patching - breaks encapsulation
