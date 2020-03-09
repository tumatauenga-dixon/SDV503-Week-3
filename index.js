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

console.log("String Concatenation")

console.log(10 + 5);
//Both operands are numbers. Addition operation performed.

console.log(10 + '5');
//10 is Number and 5 is a String. So both operands are concatenated.

console.log('10' + 5);
//10 is a String and 5 is a number. So both operands are concatenated.

console.log(10 + 10 + '5');
//Both 10s are Numbers and 5 is a String. 10s are added and concatenated with String 5.

console.log('10' + '10');
//Both 10s are String. So both concatenated together. 

console.log("Booleans to Numbers");
console.log( +true );  // 1, true is converted to 1 using unary plus
console.log( +false ); // 0, false is converted to 0
console.log( +"" );   // 0, empty string converted to 0

console.log("Comma Operator in a Variable");
let comma =(1 + 2, 3 + 4);
console.log(comma);


console.log("Assignment Operator");
//x = 10
//y = 5

//The = operator assigns y to x.
console.log(x = y);

//The += operator adds x to y and then assigns the total value back to x.
console.log(x += y);

//The -= operator subtracts x from y and then assigns the total value back to x.
console.log(x -= y);

//The *= operator multiplies x with y and then assigns the total value back to x.
console.log(x *= y);

//The /= operator divides x from y and then assigns the total value back to x.
console.log(x /= y);

//The %= operator divides x from y and then assigns the remainder back to x.
console.log(x %= y);


console.log("Comparison Operator")

let compareOne = 10;
let compareTwo = 55;

if (compareOne == compareTwo) {
   console.log("Equal") 
}

if (compareOne === compareTwo) {
    console.log("Identical") 
 }

if (compareOne != compareTwo) {
    console.log("Not Equal") 
 }

if (compareOne !== compareTwo) {
    console.log("Not Identical") 
 }

if (compareOne < compareTwo) {
    console.log("Less than") 
 }

if (compareOne > compareTwo) {
    console.log("Greater than") 
 }

if (compareOne >= compareTwo) {
    console.log("Greater than or Equal to") 
 }

if (compareOne <= compareTwo) {
    console.log("Less than or Equal to") 
 }

console.log(10 == 5); // equal to
console.log(10 != 5); // not equal to
console.log(10 < 5); // less than
console.log(10 > 5); // greater than
console.log(10 <= 5); // less than or equal to
console.log(10 >= 5); // greater than or equal to

console.log(10 == '5'); // equal to
console.log(10 == '10');
console.log(10 != '5'); // not equal to
console.log(10 != '10');
console.log(10 < '5'); // less than
console.log(10 < '10');
console.log(10 > '5'); // greater than
console.log(10 > '10');
console.log(10 <= '5'); // less than or equal to
console.log(10 <= '10');
console.log(10 >= '5'); // greater than or equal to
console.log(10 >= '10');

console.log(10 === 10)

console.log("Boolean and Number Comparison");

console.log(true == 1); // equal to
console.log(true == "1");
console.log(true == 0);
console.log(false == 1); // equal to
console.log(false == 0);
console.log(false == "0");

console.log(" ");

console.log(true != 1); // not equal to
console.log(true != "1");
console.log(true != 0);
console.log(false != 1); // not equal to
console.log(false != 0);
console.log(false != "0");