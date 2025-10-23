// here we want know about the comparisons in JS
// for EXAMPLE

// console.log(2 > 1);
// 2 greater than 1 or not?
// and it's answer will be execute in boolean value (true/false)!

// console.log(2 >= 1);
//2 greater than equals to

// console.log(2 < 1);
//2 less than 1

// console.log(2 == 1);
//here we compare equals

// console.log(2 != 1);
// here we compare about "not equals"
                        // or more than that about = "equals"
                        

    // here we compare for different data types!
    // like we add the string data type!
// console.log("2" > 1);
// console.log("02" > 1);
// both will return true! //because 2 is greater than 1

    // now we compare with the null data type
// console.log(null > 0);
// is 0 is greater than null? 
// it returns false 

// console.log(null == 0);
// is null is equals to 0?
// it returns false

// console.log(null >= 0);
// is null greater than equals to 0?
// it returns true //because javascript converts the null data type in value(0)
//and it is not a predictable result!!!


    // now we compare with the undefined data type
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);
// in all cases in returns the answer false in undeifined data type!
                                   
                                                                           //NOTE 
                                                                           /* in javascript  the "Comparison" and the "Equality check" are two differnt things! */
                                                                        //Example
                                                                        /* "==" can work differnetly because it's havin an expression method! 
                                                                        and more:*/


    // Now here comes the important thing which is "STRICT CHECK"
    // which means we check with the "===" triple equal
    // and the use of === is that it not only check the value but also checks the value's datatype strcitly
// IF
// console.log("2" == 2);
// by this it only execute the conversion

// but if we 
console.log("2" === 2);
// then it does not convert (conversion not runs) NOW it checks also its datatype which is string and number
// and then it executes that both are not same!!! because their datatypes are different!!
