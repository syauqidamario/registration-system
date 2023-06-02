// main.js

function registerParticipant(row) {
      const personNameInput = document.getElementById(`person_name${row}`);
      const nameInput = document.getElementById(`name${row}`);
  
      const personName = personNameInput.value;
      const name = nameInput.value;
  
      const registrationData = {
          personName: personName,
          name: name
      };
  
      const registrationsRef = firebase.database().ref("registrations");
      registrationsRef.push(registrationData)
          .then(() => {
              console.log("Registration successful!");
              // Reset the form or perform any other necessary actions
          })
          .catch((error) => {
              console.error("Error adding registration: ", error);
          });
  }
  