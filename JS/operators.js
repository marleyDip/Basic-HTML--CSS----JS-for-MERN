/* Arithmetic Operators --> +, -, *, /, % = modulus/reminder, **, ++, -- */

let v1 = 10;
let v2 = 20;

console.log(v1 + v2);
console.log(v1 - v2);
console.log(v1 * v2);
console.log(v1 / v2);
console.log(v1 % v2);
console.log(v1 ** v2);

let x = 5;
x++;
let y = x;

console.log(y);

// Always (Right) value assign to variable (Left)....if variable assign a value is called initialization.

let x1 = 5;
x1--;
let y1 = x1;

console.log(y1);

let w = 5;

console.log(Math.pow(w, 2));

/* Assignment Operators --> =, +=, -=, *=, /=, %=, **=  */

let n = 20;

console.log(n);

let m = 20;
m += 10; // m = m + 10 => m = 30
m -= 10; // m = 30; m= 30 - 10 = 20

console.log(m);

/* Logical Assignment Operator --> x &= y => x = x && (x = y); x ||= y => x || (x = y); x ??= y => x ?? (x = y) */

let p = 5;
let q = (p &&= 100);

console.log(q);

// if (p = true) { p = q }

// If x were falsy (e.g., 0, -0, 0n (BigInt Zero) null, undefined, false, NaN, or an empty string ""), the assignment would not occur.

let p1 = "";
let q1 = (p1 ||= 100);

console.log(q1);

// if (!p1 = true) { x = y }

let p2;
let q2 = (p2 ??= 100);

console.log(q2);

// if (undefined or null) { p2 = q2 }

// If you want to assign a value only when the variable is null or undefined (but not other falsy values like 0 or ""), consider using the nullish coalescing assignment (??=) operator:

/* Comparison Operators ---> ==, ===, !=, !===, >,  <, >=, <=  */

let f = 10;
let f1 = 20;

console.log(f == f1); // false
console.log(f != f1); // true

// == --> Check Equal value
let f2 = 10;
let f3 = "10";

console.log(f2 == f3); // true
console.log(f2 != f3); // false

// === --> Check Equal value & Equal Type
let f4 = 10;
let f5 = "10";

console.log(f4 === f5); // false
console.log(f4 !== f5); // true

//  greater than & equal

let f6 = 100;

console.log(f6 > 100); // false
console.log(f6 >= 100); // true

// smaller than & equal

let f7 = 50;

console.log(f7 < 40); // false
console.log(f7 <= 50); // true

/* Logical Operators --> && - and, || - or, ! - not */

// Logical And Operator...Both condition true = True; otherwise false

let userName = "Deep";
let password = "123";

console.log(userName == "Deep" && password == "123"); // true

let per = 75;

console.log(per >= 60 && per < 70); // false...1st condition true and 2nd condition false

// Logical Or Operators...both of one conditions true = true; both condition false = false

let b = 60;

console.log(b != "" || b > 60); // true....1st condition true or 2nd condition false

let sub1 = 90;
let sub2 = 85;
let sub3 = 70;

console.log(sub1 < 35 || sub2 < 35 || sub3 < 35); // false...whole condition are false

// Logical Not Operator...reverse the result

console.log(!false); // true

console.log(!(100 == 100)); // false

/* Conditional Operators ? Ternary  */

// condition ? true : false

let l = 10;
let output = l % 2 == 0 ? "Even Number" : "Odd Number";

console.log(output);

let l1 = 10;
let l2 = 20;
let l3 = l1 > l2 ? l1 : l2;

console.log(l3);

let l4 = 50;
let l5 = 20;
let l6 = l1 > l2 ? "Left Value" : "Right Value";

console.log(l6);

/* Strings Operator ---> +, += */

// Concatenation... a string + a number = String ["dip" + 10 = dip10]

console.log(10 + 10 + "hello");
console.log("10" + 10 + "hello"); // 1st declare string whole treat as string
console.log(+"10" + 10 + "hello"); // the unary (+..) operator turns the string into number

/* interpret means Top ...to... Bottom === Left ...to... Right */

/* Type Conversion */

// Implicit Conversion ---> automatic type conversion

console.log("10" - "20");

console.log("10*5");

console.log("10" * "20");

console.log("10" / 2);

console.log(true + 5);

console.log("10" + 5);

// Explicit Conversion ---> manual type conversion

let o = "105.76";

console.log(o, typeof o);

let o1 = parseInt(o);
let o2 = parseFloat(o);
let o3 = Number(o); // in js, number is double (64 bit floating point)

console.log(o1, typeof o1);
console.log(o2, typeof o2);
console.log(o3, typeof o3);

console.log(Number("30"), typeof Number("30"));

// Most used [Number] for explicit type conversion....strings == number
