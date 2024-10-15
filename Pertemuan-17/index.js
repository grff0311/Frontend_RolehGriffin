// Author: Roleh, Griffin Noval

// 1. Promise
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }
  messages();

  
// 2. Fetch
function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json(); // Mengubah response menjadi format JSON
      })
      .then((users) => {
        users.data.forEach((user) => {
          console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }
  ambilDataUser();


// 3.Async Await
async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json(); // Mengubah response menjadi format JSON
  
      users.data.forEach((user) => {
        console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
      });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  
  ambilDataUser();



// 4.Axios
function ambilDataUser() {
    axios.get("https://reqres.in/api/users")
      .then((response) => {
        const users = response.data; // Mengambil data dari response
        users.data.forEach((user) => {
          console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }
  
  ambilDataUser();
  
  