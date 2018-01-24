// normal function
function sayHello() {
    console.log("Hello att");
}
sayHello();

// function là tham số của 1 function khác (truyền function như 1 tham số)
function callAnotherFunction(fn) {
    fn();
}
callAnotherFunction(sayHello);

// function là 1 biến
var sayGoodbye = function() {
    console.log("Goodbye att");
}
sayGoodbye();

// function như 1 expression
callAnotherFunction(function() {
    console.log("Good morning");
})

// invoking a module from another file
var sayDtvtIsShit = require("./moduleDemo");    //we can write: ./moduleDemo.js
sayDtvtIsShit();

// gọi module2.js
require("./module2.js");