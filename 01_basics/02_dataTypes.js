"use strcit"; // treat all JS code as a newer version

/*alert( 3 + 3 )*/ 
// we are using Nodejs, not a Browser, that's why it gives an error!

// now we run it with console

/*console.log( 3 
+ 3 )*/        //we can write the code like this too but by managing the code makes code readable!!!
console.log( 3 + 3 )
//here we also talk about the code readability which should be high

console.log("Masham")

// Few datatypes of JavaScript are discussed:
let name = "Masham" // this is a String datatype
let age = 21 // this is a number value  *number datatype* 
let isLoggedIn = false // this is called a *boolean type datatypes*

// number => 
// having a range of 2 to power of 53

// bigint => 
// this datatype is used when your number is big *especially used in trading,stockmarket or in big websites like "reddit or facebook"

// string =>
// we can use this datatype in *single '' cots* or *double "" cots(preferred)*

// boolean =>
// in boolean we got only two values: 'true' or 'false' (yes or no)

// null =>
// this is a 'standalone value' datatype
// representation of an empty value
// we can also defined it's value by for example *let state = null;*

// undefined =>
// in this we can only declare the variable without giving the value 
// for example *let state;* in this state is just a variable having no value assign which is called undefined!

// symbol => unique
// to find the uniqueness this datatype is used
                            /*these are called premitive datatypes*/

// now we discuss about the OBJECT

console.log(typeof "Masham")
// the output will show the type of Masham is *string* because Masham is written in the string double cots ""
console.log(typeof age)
// the output will show the type of age is *number* because age is written in the number

// now the real thing
// also an interview question
console.log(typeof null)
// the output will show the type of null is *object*
