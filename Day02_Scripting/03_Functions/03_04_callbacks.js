var header = document.getElementById("header");
header.innerHTML = `Callbacks `;
// ----------------------------------------------------------------

// synchronous callbacks
function inEnglish(name) {
    console.log("Hello ", name);
}

function inFrench(name) {
    console.log("Bonjour  ", name);
}

// functions as parameters
function sayHello(languageCallback) {
    let name = prompt("Please enter your name: ");
    languageCallback(name);
}

sayHello(inFrench);
//sayHello(inEnglish);

// async callbacks -> see 04_AsyncJS