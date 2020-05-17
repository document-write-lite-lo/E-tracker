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
  


function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;

        if(userSIEmail=="")
        {
            document.querySelector('#userSIEmailError').style.display ='block';
        }
        else{
            document.querySelector('#userSIEmailError').style.display ='none';
        }
        if(userSIPassword=="")
        {
            document.querySelector('#userSIPasswordError').style.display ='block';
        }
        else{
            document.querySelector('#userSIPasswordError').style.display ='none';
        }


        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            alert("u r signed in");
            window.location.href="home.html";
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           alert(errorMessage);
        });
    }
