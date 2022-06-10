/* A falsy (sometimes written falsey) value is a value that is considered false when 
encountered in a Boolean context.
JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, 
such as conditionals and loops. */

const falsyValues  = [
    false,
    0,
    -0, 
    0n,
    '',
    ``,
    null,
    undefined,
    NaN
];

falsyValues.forEach(value =>console.log(`Falsy value: ${value}`));

//type coercion
console.log(falsyValues[0] && 'render component');