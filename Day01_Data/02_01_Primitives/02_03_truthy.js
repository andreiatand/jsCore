/* In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN. */
const truthyValues  = [
    true,
    {},
    [],
    42,
    "0",
    "false",
    new Date(),
    -42,
    12n,
    3.14,
    -3.14,
    Infinity,
    -Infinity
];

truthyValues.forEach(value =>console.log(`Truthy value: ${value}`));

//type coercion
console.log(truthyValues[0] && 'render component');