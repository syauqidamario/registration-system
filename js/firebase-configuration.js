var firebaseConfig = {
      apiKey: "AIzaSyCUKG9LFIFy2ckWZS79PbguV5yUTxrB6u0",
      authDomain: "project-registration-sys-5a635.firebaseapp.com",
      databaseURL: "https://project-registration-sys-5a635-default-rtdb.firebaseio.com",
      projectId: "project-registration-sys-5a635",
      storageBucket: "project-registration-sys-5a635.appspot.com",
      messagingSenderId: "943565306740",
      appId: "1:943565306740:web:ded7dc8470cf0e027b8a21",
      measurementId: "G-Z9G1WHDDRL"
};

  // Inisialisasi Firebase
  firebase.initializeApp(firebaseConfig);

  // Access the form element
  var login_form = document.getElementById('login-form');
  
  // Get a reference to the Firebase Firestore database
  var database = firebase.firestore();
  
  // Form submission
  var form = document.getElementById("registration-form");
  
  form.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent form submission
  
      // Get values from the form
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var userType = document.getElementById("user_type").value;
  
      // Store new registration data in the database
      database.collection("registrations").add({
          name: name,
          email: email,
          userType: userType
      })
      .then(function() {
          alert("Registration successful!");
          form.reset(); // Reset the form
      })
      .catch(function(error) {
          console.error("Error adding registration: ", error);
      });
  });
  