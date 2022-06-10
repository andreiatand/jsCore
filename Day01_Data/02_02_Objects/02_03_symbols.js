// Symbol - ES6 - unique ids
/* A Symbol is a unique and immutable primitive value and 
may be used as the key of an Object property */
let id = Symbol('propertyKey'); // factory function
console.log('Symbol: ', id);

const jsSeminar = {
  title: 'Core JavaScript Seminar',
  topics: ['data', 'primitives', 'arrays', 'objects'],
  id: 'js-course'
};

courseInfo[id] = 12324;
console.log(courseInfo);