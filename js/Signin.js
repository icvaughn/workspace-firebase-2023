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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  var username = $("#login").val();
  var pswrd = $("#pwd").val();
  // You need to change this.
  console.log(username + " " + pswrd + " LLL");
  //var email = 'manman@gmail.com';
  //var password = 'manmanman';

  firebase
    .auth()
    .signInWithEmailAndPassword(username, pswrd)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
        
        window.location.herf = 'surveyresult.html';
      }
    }).catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});


$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // The signed-in user info.
    var user = result.user;
    console.log("sign in through google", user);

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});