/* Primitive */

const { use } = require("react");

/* Strings & Numbers */
let num = 20;
console.log(num);
console.log(typeof num);

let num2 = "20";
console.log(typeof num2);

let num3 = 20.5;
console.log(num3, typeof num3);

let cName = "DeepAkand!123@gmail.com";
console.log(cName, typeof cName);

/* Boolean */
let s = true;
console.log(s, typeof s);
console.log(s + 5); // true = 1, false = 0
console.log(s + "5"); // true5

/* when -, /, *, **... Strings turns into Numbers */
console.log(s - "5"); // -4
console.log(s * "5"); // 5
console.log(s / "5"); // 0.2
console.log(s % "5"); // 1
console.log(s ** "5"); // 1

/* the unary operator also turns strings into number  */
console.log(+"5" + s); // 6

/* Null */
let n = "";
console.log(n, typeof n); // string // An empty string has both a legal value and a type.

let n1 = null;
console.log(n1, typeof n1); // object // null means not 0...its means doesn't giving a value

/* Undefined */
let num1;
console.log(num1, typeof num1); //undefined undefined // declare variable but not initialize

/* Symbol */
let uid = Symbol("123");
let cid = Symbol("123");
console.log(uid == cid); // check unique or not

/* BigInt */
let BigInt = 3847432847372876278532n;
console.log(BigInt, typeof BigInt);

/* Non-Primitive --Object, Array, Function */

let users = ["dip", "sofian", 50, 100];
users = ["dip", "akand", 5440, 100]; // X, not change the direct values but change the element of the array
console.log(users, typeof users); //

let obj = {
  cName: "Deep Akand",
  courseName: "Js",
};
// here change the properties of the Object
console.log(obj, typeof obj);
