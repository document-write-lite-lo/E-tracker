

var firebaseConfig = {
  apiKey: "AIzaSyCC-S-FGj_TNifH_bYhJPizkbF96LvgPec",
  authDomain: "login-afc02.firebaseapp.com",
  databaseURL: "https://login-afc02.firebaseio.com",
  projectId: "login-afc02",
  storageBucket: "login-afc02.appspot.com",
  messagingSenderId: "289947048676",
  appId: "1:289947048676:web:acf11588fc257336852af1",
  measurementId: "G-2H0EMJLMY7"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

firebase.analytics();



function signup(){
  var userFullName = document.getElementById("userFullName").value;
  var userSurname = document.getElementById("userSurname").value;
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  


  
  
  if(userEmail=="")
  {//to display message if this field is empty
    document.querySelector('#userEmailError').style.display ='block';
    
     
  }
  else{

    //if field is filled then remove this message
    document.querySelector('#userEmailError').style.display ='none';
  }
  
  if(userPassword=="")
  {
    //to display message if this field is empty
    document.querySelector('#userPasswordError').style.display ='block';
      
      
  }
  else{

     //if field is filled then remove this message
    document.querySelector('#userPasswordError').style.display ='none';
  }
  
 
  
      firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
          var user = firebase.auth().currentUser;
          var uid;
          if (user != null) {
              uid = user.uid;
          }
          var firebaseRef = firebase.database().ref();
          var userData = {
              userFullName: userFullName,
              userSurname: userSurname,
              userEmail: userEmail,
              userPassword: userPassword,
              userFb: "https://www.facebook.com/",
              userTw: "https://twitter.com/",
              userGp: "https://plus.google.com/",
              userBio: "User biography",
          }
          //storing data in database
          firebaseRef.child(uid).set(userData);
          alert('Your Account Created Your account was created successfully, you can log in now.'
          );
          
          
      }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
         
          alert(errorMessage);
      });
  
}








