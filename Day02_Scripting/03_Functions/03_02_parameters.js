var header = document.getElementById("header");
header.innerHTML = `Function parameters `;
// ----------------------------------------------------------------


// undefined by default
add = (a,b) => {
    console.log(`We have a as ${a} and b as ${b}`);
    return a + b
} 
// default values ES6
add2 = (a=0,b=1) => {
    console.log(`We have a as ${a} and b as ${b}`);
    return a + b
}
// arguments - doesn't work in =>
 let add3 = function () {
    console.log(arguments[0]);
}

// rest parameters -> variadic functions
let add4 = function (a, ...restOfArgs){
    return restOfArgs.map(arg => arg+a);
}
let add4arrow = (a, ...restOfArgs) =>{
    return restOfArgs.map(arg => arg+a);
}
// object destructuring
let add5 = ({a,b}) => a + b