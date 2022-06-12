var header = document.getElementById("header");
header.innerHTML = `Retrieve data async`;
// ----------------------------------------------------------------
const products = () => {
    return new Promise((resolve, reject) => {
        const api = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => {
            if (request.status === 200) {
                resolve(JSON.parse(request.response));
            } else {
                reject(Error(request.statusText));
            }
        };
        request.onerror = (err) => reject(err);
        request.send();
    })
}
products().then(console.log, (err) => console.error(new Error('Something happened!!', err)));

// fetch - natively in the browser | cleaner wrapper around Promises
const api = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
fetch(api).then (response => response.json()).then(console.log);
let productsFetch = () => fetch(api).then (response => response.json());
productsFetch().then(console.log);

let productNames = () =>  
productsFetch().
then(products => products.map(p=>p.name)).
then(names => names.join(', '));
productNames().then(console.log);

// async / await - use in pair  | syntactical write async code in sync fashion 

// fetch(api).
// then (response => response.json()).
// then(products => products.map(p=>p.name)).
// then(names => names.join(', ')).
// then(console.log);

const productNamesAsync = async () => {
    const response = await fetch(api);
    const json = await response.json();
    console.log(json.map(p=>p.name).join(', '));
    //return json.map(p=>p.name).join(', ');
}

productNamesAsync();
//.then(console.log);