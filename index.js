//Arithmetic Operator

let x = 10;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//1 Increment Operator
//Pre-Increment

let c = 5;

console.log(c);
console.log(++c);
console.log(c);
console.log(++c);
console.log(c);
console.log(++c);
console.log(c);

//Post-Increment

let b = 5;

console.log(b);
console.log(b++);
console.log(b);
console.log(b++);
console.log(b);
console.log(b++);
console.log(b);
console.log(b++);

//In the case of pre-increment operators, the value increments and then 
// the expression is executed. However in the case of post-increment 
//opperators, the value's expressions is evaluated first and then 
//incremented.

//2 Decrement Operator
//Pre-decrement

console.log(c);
console.log(--c);
console.log(c);
console.log(--c);
console.log(c);
console.log(--c);
console.log(c);

//Post-decrement

console.log(b);
console.log(b--);
console.log(b);
console.log(b--);
console.log(b);
console.log(b--);
console.log(b);
console.log(b--);

//Increment/ Decrement Operator inside an expression

let a = 1;
console.log(5 * ++a); //10let a = 1;
console.log(5 * a++); // 5, because a returns the previous value

let o = 5;
let p = o;

console.log("Pre - Increment");

p = ++o
console.log(o);
console.log(p);

console.log("Post-Increment");

p = o++;
console.log(o);
console.log(p);