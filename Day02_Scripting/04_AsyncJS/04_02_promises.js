var header = document.getElementById("header");
header.innerHTML = `Promises`;
// ----------------------------------------------------------------

// waiting is happening / delay between request & response
const prepareCoffee = (seconds) => new Promise((resolve, reject) => {
    if (typeof seconds !== 'number') {
        reject(new Error("seconds must be number"));
    } // rejected
    setTimeout(resolve, seconds * 1000); // pending
    // fulfilled
})

orderCappuccino = () => {
 console.log("One Cappuccino coming up, please wait on the left");
prepareCoffee(5).then(() =>console.log("Your Cappuccino is ready"));
}
orderMochaccino = () => {
    console.log("One Mochaccino coming up, please wait on the left");
   prepareCoffee(7).then(() =>console.log("Your Mochaccino is ready"));
}
orderFlatWhite = () => {
    console.log("One Flat White coming up, please wait on the left");
   prepareCoffee("7").
   then(() =>console.log("Your Flat White is ready")).
   catch(error => {
       console.log("We cannot make any Flat White: ", error);
       console.log("Maybe we can give you something else?");
       console.log("Can I get a Cappuccino, please?");
      orderCappuccino();
    });
   }

console.log("Can I get a Cappuccino, please?");
orderCappuccino();

console.log("Can I get a Mochaccino, please?");
orderMochaccino();

console.log("Can I get a Flat White, please?");
orderFlatWhite();

// chaining | combine with Promise.all()