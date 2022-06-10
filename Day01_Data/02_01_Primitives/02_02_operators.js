/* JavaScript is a loosely typed and dynamic language.
 Variables in JavaScript are not directly associated with any particular value type, 
 and any variable can be assigned (and re-assigned) values of all types */
 
let myNumber = 20; // assignment
console.log('typeof operator: ', typeof myNumber);

// comparison: =, ==, ===, >, <, >=, <=, !=, !==
let a  = 3;
let b = '3';
console.log('Semiotic equivalence', a==b);
console.log('Strict equivalence', a===b);

// math: +, -, /, *, %, **, ++/--, NaN
let c = 5;
let cs = '5';
console.log('YES BUT: ', c + cs, c-cs, c*cs)

// logical operators: &&, ||,
let iAmHungry = true;
let iHaveFood = false;
console.log(`${iAmHungry} && ${iHaveFood}: `, iAmHungry && iHaveFood);
console.log(`${iAmHungry} || ${iHaveFood}: `, iAmHungry ||  iHaveFood);
console.log(`Double bang ${iAmHungry}: `, !!(iAmHungry));
console.log(`Double bang ${iHaveFood}: `, !!(iHaveFood));

// conditional operators: if/else, ?:
if(iAmHungry && iHaveFood) {
    console.log('gonna eat');
}
else {
    console.log('will not eat');
}

(iAmHungry && iHaveFood) ? console.log('gonna eat'):  console.log('will not eat');

// switch statement - to replace nested if/else statements
switch (new Date().getDay()) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
       day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
    default:
        day = 'Oh no, this can\'t be'
  }
  console.log(day);