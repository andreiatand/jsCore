
// 'use strict' // classes, modules by default
var header = document.getElementById("header");
header.innerHTML = `Scope: global | local | block `;
//------------

// scope - current context of execution / values & expressions visibility
// global scope
globalVariable_Undeclared = "Undeclared global"; // use strict
var globalVariable_withVar = "Var global";
let globalVariable_withLet = "Let global";
const globalVariable_withConst = "Const global";

// local / function scope
function getScope() {
    localVariable_Undeclared = "Undeclared local";
    var localVariable_withVar = "Var local";
    let localVariable_withLet = "Let local";
    const localVariable_withScope = "Const local";
}
    //console.log(localVariable_Undeclared);
    //console.log(localVariable_withVar);
    //console.log(localVariable_withLet);
    //console.log(localVariable_withScope);

// problems with var - introducing block-scoped local variable : let, const
    var x = 1;
    console.log(x);
    if (x==1){
        var x = 2;
        console.log(x);
    }
    console.log(x);

// it gets worse
    var outsideTheFunction = "I am outside the function";
    console.log("Outside The Function: ", outsideTheFunction);
        function change() {
            outsideTheFunction="I am inside the function";
            console.log("Inside The Function: ", outsideTheFunction);
        };
        change();
    console.log("Outside The Function: ", outsideTheFunction);
// even still
    var box = document.getElementById("box");
    for (var i = 0; i < 5; i++) {
      let div = document.createElement("div");
      div.onclick = function () {
        alert("This is box # " +i);
      }
      box.appendChild(div);
    }

// const -> let -> var
