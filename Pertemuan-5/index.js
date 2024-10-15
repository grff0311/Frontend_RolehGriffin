// //No params & arg
// (function (){
//     console.log("hello word");
// })();

// //with params & arg
// let output=(function (fullName) {
//     return "hello " + fullName
// })("john doe");

// console.log(output);

// Call back function
function sayHello(callback) {
    let output = callback("john doe");
    return output;
}



sayHello (function (fullName) {
    return "hello" + fullName;
});
