//Author: Roleh, Griffin Noval



//1.2 Sytax ES6
const calculateAge = (birthYear) => 2019 - birthYear;
const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });




//2.2 Syntax ES6
const addNumberr = (...numbers) => {
    let sum = 0;
    numbers.map((num) => sum += num);
    return sum;
  };
  
  console.log(addNumberr(1, 2, 3, 4, 5, 6, 7));




//3.2 Syntax ES6
const phi = 3.14;
const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);
let radius = 21;
const area21 = calculateArea({ radius, power: 2 });
radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);



//4.2 Sytax ES6
const makeAjaxRequestt = (url, method = 'GET') => {
    console.log(url, method);
  };
  
  makeAjaxRequestt('www.google.com');
  

  