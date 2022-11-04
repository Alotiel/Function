let fruits = ["orange", "apple", "mango"];
fruits.push("banana");
fruits.unshift("cherry");
fruits.pop();
fruits.shift();
for (let fruit of fruits) {
  console.log(fruit);
}

let multidimensional = [
  [1, 2, 3],
  [2, 5, 6],
  [7, 8, 9]
];
console.log(multidimensional[0][0]);
console.log(multidimensional[0][1]);
console.log(multidimensional[0][2]);
console.log(multidimensional[1][0]);
console.log(multidimensional[1][1]);
console.log(multidimensional[1][2]);
console.log(multidimensional[2][0]);
console.log(multidimensional[2][1]);
console.log(multidimensional[2][2]);

function a() {
  console.log("Hello world");
}

a();

function b() {
  let message = "hi";
  console.log(message);
}

b();

let message = "commander Shepard";
function c() {
  console.log(message);
}

c();

function d(message) {
  console.log(message);
}
d("MassEffect");

function e(a, b, c) {
  console.log(a * b + c);
}
e(4, 5, 2);

function multiply(a, b = 1) {
  return a * b;
}
let result = multiply(5);
console.log(result);

let pet = {
  name: "Lulu",
  age: 2
};
pet.sound = "Mau Mau";

console.log(pet.sound);
