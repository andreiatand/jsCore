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
function doStep1(init) {
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

  function doStep1WithCallback(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2WithCallback(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3WithCallback(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperationWithCallback() {
    doStep1WithCallback(0, result1 => {
      doStep2WithCallback(result1, result2 => {
        doStep3WithCallback(result2, result3 => {
          console.log(`result: ${result3}`);
        });
      });
    });
  
  }
  
  doOperationWithCallback();