//java function
//cara 1

// function greetings(){
//     console.log("Hello word");
// };

// let greetings = function() {
//     return "Hello"
// };

// //cara 2
// console.log(greetings())

// function operasiperkalian(angka1, angka2){
//     return angka1*angka2;
// }

// console.log(operasiperkalian(2,6))

//Global dan local scop
let x=10;

function foo() {
    let y=20
    let z=40
    console.log(x);
    console.log(y);
    if (z > x) {
        let a=50; //Block scope
        console.log(a);
    }
}
