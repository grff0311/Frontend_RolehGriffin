// let john = {
//     firstName: "john",
//     age: 30,
//     isMarried: true,
//     grade: [80, 90, 100],
//     sayGreetings: function () {
//         consele.log("Hello my name is " + this.firstName);
//     },
//     address: {
//         street: "Jl. Arnold Mononutu",
//         city: "Minihasa Utara",
//         province: "Sulawesi Utara",
//         postalCode: 95371,
//     },

// };
// console.log(john);


// // Mendefinisikan fungsi untuk mengecek bilangan ganjil atau genap
// function cekGanjilGenap(bilangan) {
//     // Mengecek apakah bilangan habis dibagi 2
//     if (bilangan % 2 === 0) {
//         // Jika ya, maka bilangan adalah genap
//         console.log(bilangan + " adalah bilangan genap.");
//     } else {
//         // Jika tidak, maka bilangan adalah ganjil
//         console.log(bilangan + " adalah bilangan ganjil.");
//     }
// }

// // Contoh penggunaan fungsi
// cekGanjilGenap(10); // Output: 10 adalah bilangan genap.
// cekGanjilGenap(7);  // Output: 7 adalah bilangan ganjil.


//Switc Case
let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah); // Output: kemeja putih bawahan merah