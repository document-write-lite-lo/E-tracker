var firebaseConfig = {
    apiKey: "AIzaSyC6VCTehXwPu4obiXlo8SSs3hxktR4OSE0",
    authDomain: "contact-b6ffb.firebaseapp.com",
    databaseURL: "https://contact-b6ffb.firebaseio.com",
    projectId: "contact-b6ffb",
    storageBucket: "contact-b6ffb.appspot.com",
    messagingSenderId: "509968803691",
    appId: "1:509968803691:web:c03188ccbddfc875cf0e2e",
    measurementId: "G-KSZGMF7PPH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var messageref=firebase.database().ref('messages');


document.getElementById("contactform").addEventListener('submit',submitform);
//sumit form
function submitform(e){
    e.preventDefault();

    //getting values
    var name=getInputVal('name');
    var company=getInputVal('company');
    
    var email=getInputVal('email');
    var phone=getInputVal('phone');
    var message=getInputVal('message');


   
    //save message
    savemessge(name,company,email,phone,message);

    //show alert
    document.querySelector('.alert').style.display ='block';

    //hiding alert after some time
    setTimeout(function(){
        document.querySelector('.alert').style.display ='none';
    },4000);
    //clear details
    document.getElementById('contactform').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}

//save mesage to firebase
function savemessge(name,company,email,phone,message)
{
    var newmessageref=messageref.push();
    newmessageref.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message


    });
}