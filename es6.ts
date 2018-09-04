//variables
var a1; // function scoped
let a2;
const a3 = 10;

//hoisting

var x = 3;
function random(flag: boolean) {
  if (flag) {
    let x = Math.random();
  }
  return x;
}

console.log(random(true));

// destructuring
const product = { title: "iphone", price: 2000 };
// const title = product.title;
// const price = product.price;

const { title, price } = product;
const { title: productTitle, price: productPrice } = product;
console.log(title, price, productTitle, productPrice);

const team = ["jim", "kim", "lim", "pim"];
const [manager, lead, eng1, eng2] = team;
console.log(manager, lead, eng1, eng2);

//for-of
let numbers: Array<number> = [10, 20, 30, 40, 50];
for (const n of numbers) {
  console.log(n);
}

//template literals
