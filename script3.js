const firebaseConfig = {
    apiKey: "AIzaSyBVzR3zsP7MbU5B5_oGNsLX5UVtTSK-bEc",
    authDomain: "database-5b5ce.firebaseapp.com",
    databaseURL: "https://database-5b5ce-default-rtdb.firebaseio.com",
    projectId: "database-5b5ce",
    storageBucket: "database-5b5ce.appspot.com",
    messagingSenderId: "1058646393950",
    appId: "1:1058646393950:web:6872e469cea67e94cf20cf",
    measurementId: "G-FCKBJST9NB"  
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var formdb = firebase.database();


let mailid = document.querySelector('.usermailid');
setTimeout(()=>{
    if(auth.currentUser!=null) {

        mailid.innerHTML = auth.currentUser.email;
    }
    else{
        mailid.innerHTML = "Login";
        var link = document.createElement('a');
        link.href="index.html";
        link.appendChild(mailid);
        document.getElementById("user").appendChild(link);
    }
}, 1500);

// function logout(){

// }