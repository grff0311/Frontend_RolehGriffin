// Author: Roleh, Griffin Noval


function hitungBMI(berat,tinggi){
    if(tinggi>10){
        tinggi = tinggi/100
    }
    let bmi = berat/(tinggi*tinggi);
    return bmi
}

let berat = 65;
let tinggi = 170;

let bmi = hitungBMI(berat,tinggi);
console.log("BMI anda adalah: "+ bmi.toFixed(2));