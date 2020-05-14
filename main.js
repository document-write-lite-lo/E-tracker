var contactRef = firebase.database().ref().child("addincome");
document.getElementById('addform').addEventListener('submit',submitform);


function submitform(e){
    e.preventDefault();

    var name = getInputVal('name');
    var purpose = getInputVal('purpose');
    var address = getInputVal('address');
    var phone = getInputVal('phone');
    var mode = getInputVal('mode');
    var category = getInputVal('category');
    var amount = getInputVal('amount');
    var bank = getInputVal('bank');
    var branch = getInputVal('branch');
    var cheque = getInputVal('cheque');
    var description = getInputVal('description');
    var dates = getInputVal('dates');
     

              saveForm(name,purpose,address,phone,mode,category,amount,bank,branch,cheque,description,dates);

              document.getElementById('addform').reset();
    
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveForm(name,purpose,address,phone,mode,category,amount,bank,branch,cheque,description,dates){
    var newContactRef = contactRef.push();
    newContactRef.set({
        name : name,
        purpose : purpose,
        address : address,
        phone : phone,
        mode : mode,
        category : category,
        amount : amount,
        bank : bank,
        branch : branch,
        cheque : cheque,
        description : description,
        dates : dates
    });
}


contactRef.on("child_added",snap=>{
var name = snap.child("name").val();
var purpose = snap.child("purpose").val();
var address = snap.child("address").val();
var mode = snap.child("mode").val();
var phone = snap.child("phone").val();
var bank = snap.child("bank").val();
var branch = snap.child("branch").val();
var cheque = snap.child("cheque").val();
var description = snap.child("description").val();
var dates = snap.child("dates").val();
var amount = snap.child("amount").val();
var category = snap.child("category").val();



$('#table_bdy').append("<tr><td>"+name+"</td><td>"+amount+"</td><td>"+category+"</td><td>"+purpose+"</td><td>"+branch+"</td><td>"+bank+"</td><td>"+dates+"</td><td>"+cheque+"</td><td>"+mode+"</td><td>"+address+"</td><td>"+description+"</td><td>"+phone+"</td></tr>");
});

