/*
operators in JS

1. Arithmetic
2. Logical
3. Comparison
4. Logical
5. Bitwise
*/

//Arithmetic Operators ->

let x = 10;
let y = 7;

console.log(x + y); //Addition
console.log(x - y); //substraction
console.log(x / y); //Multiplication
console.log(x * y); //Division
console.log(x % y); //Modulus
console.log(x ** y); //Expontiation

//increment operator

console.log(x++);
console.log(x);

//Decrement Operators
console.log(y--);
console.log(y);



// Assignment Operators ->

let a = 10;

a = a + 1;
a+=1;

console.log(a);


//comparision operator ->
let r = 10;

// relational operators
console.log(r > 0);
console.log(r >= 10);
console.log(r < 11);
console.log(r <= 10);

//eqality 
console.log(r === 2);
console.log(r !== 2);


//Strict equality operator (same type + same value)
let t = 1;
console.log(t === 1);


//Loose equality operator
console.log(t == 1);