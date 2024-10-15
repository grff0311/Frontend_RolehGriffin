// Autohor : Roleh,Griffin Noval

//IIFE
(function(berat, tinggi) {
    function hitungBMI(berat, tinggi) {
        if (tinggi > 10) {
            tinggi = tinggi / 100;
        }
        let bmi = berat / (tinggi * tinggi);
        return bmi;
    }

    let bmi = hitungBMI(berat, tinggi);
    console.log("BMI anda adalah: " + bmi.toFixed(2));
})(65, 170);


//CallBack
function tampilkanBMI(bmi) {
    console.log("BMI anda adalah: " + bmi.toFixed(2));
}
function hitungBMI(berat, tinggi, callback) {
    if (tinggi > 10) {
        tinggi = tinggi / 100; 
    }
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}


let berat = 65;
let tinggi = 170;
hitungBMI(berat, tinggi, tampilkanBMI);
