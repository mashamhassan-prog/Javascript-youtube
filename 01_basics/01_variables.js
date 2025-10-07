const accountId = 7704
// const value will not be changed 

// we can declare the variables by two methods which are "let,var"
let accountEmail = "masham@gmail.com"
// let value should be change
var accountPassword = "12345"
// var value should be change
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountCity = "Lahore"
// it is also possible in JS to write the content without giving the value
let accountState;
// if we just declare the value in js without giving any content so then its default value will be "undefined"


/* Investigation */
// accountId = 2 //not allowed 

console.log(accountId);



accountEmail = "hassan@gmail.com"
accountPassword = "627426"
accountCity = "Karachi"

// a fastest way to execute the output by 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
