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

var formdb = firebase.database().ref("user-data");

document.getElementById('regform').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    savedata(name, email, password);

    console.log("Success..!!");

    document.querySelector(".alert").style.display = 'block';
    setTimeout(()=>{
        document.querySelector(".alert").style.display = 'none';
    }, 3000);

    document.getElementById('regform').reset();
}

function savedata(name, email, password){
    formdb.orderByChild("email").equalTo(email)
    .once("value").then((snapchat) => {
        if(snapchat.exists())
            console.log("Email allready exists");
        else
            formdb.push().set({
                email: email,
                name: name,
                password: password,
            });
    });
    
}
