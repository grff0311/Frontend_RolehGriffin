//Author: Roleh, Griffin Noval
import {
    calculateAge,
    yearUntilRetirement,
    addNumbers,
    calculateArea,
    makeAjaxRequest,
  } from './utils';
  
  // Menggunakan fungsi yearUntilRetirement
  yearUntilRetirement({ year: 1987, firstName: 'John' });
  
  // Menggunakan fungsi addNumbers
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));
  
  // Menggunakan fungsi calculateArea
  let radius = 21;
  let area21 = calculateArea({ radius, power: 2 });
  radius = 7;
  let area7 = calculateArea({ radius, power: 2 });
  console.log(`Luas dengan radius 21: ${area21}, dan luas dengan radius 7: ${area7}`);
  
  // Menggunakan fungsi makeAjaxRequest
  makeAjaxRequest('www.google.com');
  