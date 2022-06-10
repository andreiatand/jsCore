// single line comments are useful for explaining clever code  - Command + /

/*
multi line comments are useful for documenting function signature - Shift + Option + A
for (let index = 0; index < array.length; index++) {
    const element = array[index];
} */

// whitespace - ignored by the browser, useful for reading code
const user = {
  name: 'John',
  age: 56,
};

const print = user => {
  console.log (`My name is ${user.name} and I'm ${user.age} young`);
};

print(user);

// semicolon - developer preference
print(user); //; print(user)

// quotation marks - pick one and be consistent
const singleQuotes = 'This works';
const doubleQuotes = "This also works";
console.log (singleQuotes+ '  ' + doubleQuotes);
