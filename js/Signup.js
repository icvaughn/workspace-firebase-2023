const firebaseConfig = {

  apiKey: "AIzaSyBP8NWuRxDY0jEk3z1Gw_ZNb8akYxGGahI",

  authDomain: "database2023-7371a.firebaseapp.com",

  projectId: "database2023-7371a",

  storageBucket: "database2023-7371a.appspot.com",

  messagingSenderId: "608618523193",

  appId: "1:608618523193:web:6202ab6dbcadb0386b7be8",

  measurementId: "G-Z7HY77XX0S"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username =  $('input[name = "fullname"]').val();
  var email =  $('input[name = "username"]').val();
  var password = $('input[name = "password"]').val();
  var password = $('input[name = "cpassword"]').val();
  // create a user with email address and password
  // cheack if both paswords are the same
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      // ...
      let user = result.user;
      user.updateProfile({
        displayName: username,
        email: email,
        password: password
      });

      console.log(user.displayName," You are signed up");
      window.location.href = "Login.html";
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
