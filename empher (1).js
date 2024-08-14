const firebaseConfig = {
    apiKey: "AIzaSyAd2CxrbHAz3GbkmU9r7nLgJat8QdeeV9w",
    authDomain: "contactform-2e680.firebaseapp.com",
    databaseURL: "https://contactform-2e680-default-rtdb.firebaseio.com",
    projectId: "contactform-2e680",
    storageBucket: "contactform-2e680.appspot.com",
    messagingSenderId: "885971549430",
    appId: "1:885971549430:web:f4488ff149b263b39680d7"
  };
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
  
    var names = getElementVal("names");
    var issues = getElementVal("issues");
    var target_amount = getElementVal("target_amount");
    var payment_info = getElementVal("payment_info");
    var contact = getElementVal("contact");
    var Id_Proof = getElementVal("Id_Proof");
    var Proof_of_authentication = getElementVal("Proof_of_authentication");

    saveMessages(names,issues,target_amount,payment_info,contact,Id_Proof,Proof_of_authentication);
    document.querySelector('.alert').style.display='block';
    setTimeout(()=>{
        document.querySelector('.alert').style.display='none';
    },3000);
    document.getElementById('contactForm').reset();
  }
  const saveMessages =(names,issues,target_amount,payment_info,contact,Id_Proof,Proof_of_authentication) => {
    var newcontactForm = contactFormDB.push()
    newcontactForm.set({
        names : names,
        issues: issues,
        target_amount:target_amount,
        payment_info:payment_info,
        contact:contact,
        Id_Proof:Id_Proof,
        Proof_of_authentication:Proof_of_authentication


    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };