//Author: Roleh, Griffin Noval

//Contoh Konsep Destructuring
//1. Destructuring (Array & Object)
//1.1 Array Destructuring
const array = [1, 2, 3];
const [a, b, c] = array;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//1.2 Object Destructuring
const obj = { x: 10, y: 20 };
const { x, y } = obj;

console.log(x); // 10
console.log(y); // 20


//2. Destructuring dengan mengambil sebagian item (Array & Object)
//2.1 Array Destructuring (Hanya Mengambil Sebagian)
const arrayy = [10, 20, 30, 40];
const [first, , third] = array; // Skip elemen kedua

console.log(first); // 10
console.log(third); // 30

//2.2 Object Destructuring (Hanya Mengambil Sebagian Properti)
const objj = { name: 'Alice', age: 25, city: 'Jakarta' };
const { name, city } = obj;

console.log(name); // Alice
console.log(city); // Jakarta


//3. Destructuring dengan Menggunakan Default Value (Array & Object)
//3.1 Array Destructuring dengan Default Value
const arrayyy = [10];
const [d = 5, e = 20] = array;

console.log(d); // 10 (nilai array)
console.log(e); // 20 (default value)

//3.2 Object Destructuring dengan Default Value
const objjj = { name: 'Alice' };
const { namee, age = 18 } = obj;

console.log(namee); // Alice
console.log(age);  // 18 (default value)


//4. Destructuring dengan Menggunakan Rest Operator (Array & Object)
//4.1 Array Destructuring dengan Rest Operator
const arrayyyy = [1, 2, 3, 4, 5];
const [firstt, ...rest] = array;

console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

//4.2 Object Destructuring dengan Rest Operator
const objjjj = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...rest } = obj;

console.log(a);    // 1
console.log(b);    // 2
console.log(rest); // { c: 3, d: 4 }





