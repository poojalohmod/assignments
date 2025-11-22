// Q: Assignment - Solve all in single file

// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `This is line one
This is line two
This is line three`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

// 2. Arrow Functions & this
const square = (n) => n * n;
console.log(square(5)); // 25

// Explanation: Arrow functions do not bind their own 'this'.
// 'this' inside an arrow function refers to the outer scope, not the object.
const obj = {
  value: 50,
  test: () => console.log(this.value) // undefined
};
obj.test();

// Correct version using normal function
const obj2 = {
  value: 50,
  test: function () {
    console.log(this.value); // 50
  }
};
obj2.test();

// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };
console.log(mergedObj);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(10, 20, 5, 30)); // 30

// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1); // 10 20

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand); // Dell

const info = {};
console.log(info?.user?.details); // undefined (safe)

// 5. Scoping (let/var/const)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 → var is function/global scoped

for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError → let is block scoped

// const is used for values that should not be reassigned
const PI = 3.14159;
// PI = 3; ❌ Error

// 6. Ternary Operator – Practice
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

let age = 18;
console.log(age >= 18 ? "Adult" : "Minor");

let num = -5;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1,2,3,4,5]

const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log(combined); // ["x","y","z"]

const printNames = (...names) => names;
console.log(printNames("A", "B", "C")); // ["A","B","C"]

// 8. Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
const { id: userId, status } = user;
console.log(userId, status);

const id = 101;
const role = "admin";
const user2 = { id, role };
console.log(user2);

const person = {
  name: "Alice",
  age: 22,
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};
person.greet();

// 9. Template Literals (More Practice)
console.log(`Today's date is ${new Date().toDateString()}`);

const NAME = "Alice";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands
const add = (a, b) => a + b;
console.log(add(5, 7)); // 12

const isAdult = (age) => age >= 18;
console.log(isAdult(20)); // true
console.log(isAdult(15)); // false

const double = (n) => n * 2;
console.log(double(10)); // 20

// 11. Spread Operator (Arrays & Objects)
const arrClone = [1, 2, 3];
const cloneArr = [...arrClone];
console.log(cloneArr); // [1,2,3]

const newArr = [100, ...arrClone];
console.log(newArr); // [100,1,2,3]

const obj1 = { name: "Sam", age: 25 };
const obj2 = { age: 30, city: "Delhi" };
const mergedObj2 = { ...obj1, ...obj2 };
console.log(mergedObj2); 
// { name: "Sam", age: 30, city: "Delhi" }

// 12. Optional Chaining (More Practice)
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user3?.address?.city); // Bangalore

console.log(user3?.job?.title); // undefined (safe)

const company = {
  name: "TechCorp",
  location: {
    city: "Delhi"
    // no 'address' object here
  }
};
console.log(company?.location?.address?.street); // undefined
