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

const auth = firebase.auth();
const database = firebase.database();

function register(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    name = document.getElementById('name').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(()=>{

        var user = auth.currentUser
        database.ref().child('users/' + user.uid).set({
            email: email,
            name: name,
            password: password,
            last_login: Date.now()
        });
        console.log("Success");

    }).catch((error)=>{
        console.log(error.code);
        console.log(error.message);
    });
}

function login(){
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    var user = auth.currentUser
    
    database.ref().child('users/' + user.uid).update({
        last_login : Date.now()
    })

    alert('User Logged In!!')
    location.href="/dashboard.html"
    

  })
  .catch(function(error) {
    console.log(error.code);
    console.log(error.message);
  })
}