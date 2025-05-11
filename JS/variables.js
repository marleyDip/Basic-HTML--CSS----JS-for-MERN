console.log("Welcome to Akand NextGen Stack");

console.log(`${2 + "2" - 1}${1 * "2" + 3}`);

//When using the - operator, JavaScript attempts to convert both operands to numbers.

//Template literals evaluate expressions inside ${} and concatenate the results into a single string.

console.log([] + [] + "1" + 0);

//Both operands are empty arrays. When using the + operator, JavaScript attempts to convert operands to primitives.

//An empty array, when converted to a string, becomes an empty string ''.

//So, [] + [] becomes '' + '', which results in ''.

console.log(true + false + "2");

//In JavaScript, boolean values are coerced to numbers when used with arithmetic operators:

//true becomes 1

//false becomes 0

//So, true + false becomes 1 + 0, which equals 1.

console.log(+"1" + +"2" + "3" + +"4");

//The unary plus (+) operator converts the string "1" to the number 1.

var n = 10;
console.log(n);

console.log("n"); // double contention variable does not exits

let a = 20;
a = 30; // reassigned variable value
//let a= 30; // can not redeclare within Same scope
console.log(a);

var b;
{
  b = 150;
  let c = 250;
  console.log(c);
}

console.log(b);

//console.log(c);  // let block scope can not console outside block

//let abc hello = 20; // invalid formate of declare variable
//console.log(abc hello)

let abc_hello = "Myself";
let p = 70,
  q = 60,
  //r = a + c; // its not possible bcz c declare in block scope
  //r = a + b; // its possible bcz let a, var b declared

  r = p + q;

console.log("The sum of :", p + q + r + abc_hello);

/* Const -- can not redeclared variable & reassigned value.....its value constant */

const d = 500;

//const d = 40; // x
//d = 40; // x

console.log(d);

/* Strings & Template Literals */

let w = 10;
let z = `welcome ${w} to ${10 + 30} Akand NextGen`;
console.log(z);
