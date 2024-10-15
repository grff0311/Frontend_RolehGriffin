//Author: Roleh, Griffin Noval

// Fungsi untuk menghitung umur
export const calculateAge = (birthYear) => 2019 - birthYear;

// Fungsi untuk menghitung waktu hingga pensiun
export const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;
  if (retirement > 0) {
    console.log(`${firstName} akan pensiun dalam ${retirement} tahun`);
  } else {
    console.log(`${firstName} sudah pensiun.`);
  }
};

// Fungsi untuk menjumlahkan angka
export const addNumbers = (...numbers) => {
  let sum = 0;
  numbers.map((num) => (sum += num));
  return sum;
};

// Fungsi untuk menghitung luas lingkaran
export const calculateArea = ({ radius, power }) => 3.14 * Math.pow(radius, power);

// Fungsi untuk membuat permintaan Ajax
export const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};
