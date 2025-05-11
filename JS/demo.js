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
