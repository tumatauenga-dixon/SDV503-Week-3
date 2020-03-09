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

///////

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

//In the case of pre-decrement operators, the value decrements and then 
//the expression is executed. However in the case of post-decrement 
//opperators, the value's expression is evaluated first and then 
//decremented.

for(let i = 0; i<=10; i++)
{
    console.log(i);
}

//Increment/ Decrement Operator inside an expression

let a = 1;
console.log(5 * ++a); //10let a = 1;
console.log(5 * a++); // 5, because a returns the previous value

console.log("Pre-Increment");
let z = 1;
console.log(z);
console.log(10 * ++z);
console.log(z);

console.log("Post-Increment");
let n = 1;
console.log(n);
console.log(10 * n++);
console.log(n);

//“Unary”, “Binary” Operators
console.log("Unary Operator");
let un = 1;
un = -un;
console.log(un);     //-1, Here the operator is unary minus

console.log("Binary Operator");
let bi = 10;
let bi2 = 5;
console.log(bi + bi2);  // 15, binary plus adds the value

//Activity
const firstword = "Hello"
const secondword = "World"

console.log(firstword + secondword);
console.log(`${firstword} ${secondword}`);