// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBP8NWuRxDY0jEk3z1Gw_ZNb8akYxGGahI",

  authDomain: "database2023-7371a.firebaseapp.com",

  projectId: "database2023-7371a",

  storageBucket: "database2023-7371a.appspot.com",

  messagingSenderId: "608618523193",

  appId: "1:608618523193:web:6202ab6dbcadb0386b7be8",

  measurementId: "G-Z7HY77XX0S"

};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//global vars
var currentUser = "";
var currentEmail = "";

//cheack id user is logged in
firebase.auth().onAuthStateChanged((user) =>{
if(user){
  currentuser = user.displayName;
  currentEmail = user.email;
  console.log("Looged in ", currentUser, currentEmail)

}else{
  console.log("user is loogged out")
  window.location.href = "Login.html";
}

});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method

  



});


//signout
$("#signout").click(function(){
  firebase.auth().signOut().then(()=>{
    console.log("user loged out")
    window.location.href = "index.html";
  })
})

// update the result in table
