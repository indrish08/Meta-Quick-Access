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

document.getElementById('regform').addEventListener('submit', submitSignupForm);

function submitSignupForm(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    formdb.orderByChild("email").equalTo(email)
    .once("value").then((snapshot) => {
        if(snapshot.exists())
            alert("Email allready exists");
        else{
            formdb.push().set({
                email: email,
                name: name,
                password: password,
            });
            alert("Registeration Successful");
        }
    });

    document.getElementById('regform').reset();
}

function alert(s){
    const alert = document.querySelector(".alert");
    alert.innerHTML = s;
    console.log(alert.innerHTML);

    alert.style.display = 'block';

    setTimeout(()=>{
        alert.style.display = 'none';
    }, 3000);
}