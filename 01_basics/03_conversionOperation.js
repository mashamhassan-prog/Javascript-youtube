// NUMBER CONVERSION 

/*let score = 33*/
// this will called 'number' when we execute the output value

// /* if we write the number in the ""*/

// let score = "33"
// this will called 'string' when we execute the output value

// if we write the number with the aplhabet

// let score = "33abc"
// this will called "NaN" which is known as not a number

// if we give the value of "null"

// let score = nul
// then it will return "0"

// if we give the value of "undefined"

// let score = undefined
// then it will return "NaN"

// if we give the boolean value like "true" or "false"

// let score = false
// then it will return "1" for true and "0" for false

// and for example there's a string which cannot be convert into the number

// let score = "Masham"
// then it will return "NaN" coz Masham is not a number tho

// here we have two kinds of writing console for the output
// console.log(typeof score);
// console.log(typeof(score));

// here we can declare a new variable for the execution of the number (output)
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// it declares the type

// console.log(valueInNumber)
// it is for the execution of the value


// *Notes for conversion*

// "33" => 33
// "33abc" => NaN(but the type of NaN is a "number")
// true => 1; false => 0

/*these are basic conversions*/


// More conversions
// BOOLEAN CONVERSION 
// now here we give variable a value and we want to convert it through boolean expression like in true or false
// let isLoggedIn = 1
// here variable(isLoggedIn) having a value of 1 we apply boolean conversion:
// and it comes true!!! ; if there's is "0" then it come false!!!

// let isLoggedIn = ""
// here variable(isLoggedIn) having a no value we apply boolean conversion:
// then it comes false!!!

// let isLoggedIn = "Masham"
// here variable(isLoggedIn) having a value "masham" we apply boolean conversion:
// then it comes true!!!

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// we declare new variable of Booleanisloggedin and we want to convert its value in boolean we give it with its value 
// console.log(booleanIsLoggedIn);
// here for the execution we write the variable name in the console which we have to execute!


// Now,
// STRING CONVERSION
let someNumber = 33 
// it will return "33"

let stringNumber = String(someNumber);
// console.log(stringNumber);

// console.log(typeof stringNumber);
// here we wanted to know that it's a string or not!






// ************************************ Operations *******************************************
// What is Operations?
// (2 + 2 = 4) this is called an operation.
// (if a number is 2 and we convert 2 into -2) this is called an operation.
// (if there's two strings and we merge them both) this is called an opeartion.

// Now we discuss about some important Operations!

let value = 3 
let negValue = -value
// here we assign that we want the negative value (-value)
// console.log(negValue);
// then it will return -3 negative value


// Basic Opeartions

// console.log(2+2) addition
// console.log(2-2) subtraction
// console.log(2*2) multipliation
// console.log(2**2) if we use two * then it goes for the power like 2 rays to power 2
// console.log(2/2) division
// console.log(2%2) for finding the remainder!



// we discuss about the tricky things
let str1 = "hello"
let str2 = " masham" //we give space here coz when we execute the output it will return side by side(with space)!
// if we want to compare these two (like addition) so then we can write this command:
let str3 = str1 + str2 //here it is only add no subtraction will be used here!
// console.log(str3);
// this is the basic in which we know that how we join the strings together!

// here we talk about the complex situation 
// PROBLEM
// console.log("1" + 2);
//here we want to add the value 2 in "1"!
// console.log(1 + "2");
//here we want to add the value 1 in "2"!
// it returns the value of "12" for both!!

// if
// console.log("1" + 2 + 2);
//it returns 122!!

// now we apply the reverse command 
// console.log(1 + 2 + "2");
//it returns 32!! (command adds the fisrt two numbers 1+2 =3 and it return 2 as the string with 3)

// differnce if there's the string value first then the other values will execute by the string value repectively(no function will apply)
// and if
// there's the other values first then it executes first (their given function) and then the string value will appear with the output!!


// NOW we can execute some special types of conerversions which are called "TRICKY Conversions"
// console.log(true);
//it returns "true"
// console.log(+true);
// if we write code like this(which is not good but it is tricky)
// and it returns "1"

// if
// console.log(true+);
// it gives the error!

// if
// console.log(+"");
// it returns "0"
// it doesn't makes sense and should not preferred to use this!

// now here we talk about the assignment operator!
// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);
// it returns 101


// sometimes we write like
// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100
// ++gameCounter;
// here it also returns 101
// console.log(gameCounter);

// for these prefix and postfix operators we have to read it on mdn!
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment



// Here we solve some examples of postfix and prefix increments
// 1 Postfix increment:
// let x = 3;
// const y = x++;
// console.log (x , y );
// it returns x is "4" and y is "3"


// 2 Prefix increment
let x =4
const y = ++x
console.log ( x , y );
// it returns x is "5" and y is also "5"