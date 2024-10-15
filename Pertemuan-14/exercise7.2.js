//Author: Roleh, Griffin Noval

//1. Fungsi yearUntilRetirement di ES5
//1.1 Sebelum diubah (ES5)
function yearUntilRetirement(object) {
    var age = calculateAge(object.year);
    var retirement = 60 - age;
  
    if (retirement > 0) {
      console.log(object.firstName + ' retires in ' + retirement + ' years');
    } else {
      console.log(object.firstName + ' is already retired.');
    }
  }
  
  yearUntilRetirement({ year: 1987, firstName: 'John' });

//1.2 Setelah diubah (menggunakan destructuring ES5)
function yearUntilRetirement({ year, firstName }) {
    var age = calculateAge(year);
    var retirement = 60 - age;
  
    if (retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
      console.log(firstName + ' is already retired.');
    }
  }
  
  yearUntilRetirement({ year: 1987, firstName: 'John' });
  