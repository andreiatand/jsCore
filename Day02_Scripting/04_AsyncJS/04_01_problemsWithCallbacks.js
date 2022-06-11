var header = document.getElementById("header");
header.innerHTML = `Problems with sync callbacks `;
// ----------------------------------------------------------------
// blocking
function wait(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
function sayHello(wait) {
    wait(7000);
}
// sayHello(wait)

// callback hell, pyramid of doom
unction doStep1(init) {
    return init + 1;
  }
  
  function doStep2(init) {
    return init + 2;
  }
  
  function doStep3(init) {
    return init + 3;
  }
  
  function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
  }
  
  doOperation();