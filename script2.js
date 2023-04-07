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

var formdb = firebase.database();

document.getElementById('loginform').addEventListener('submit', submitSigninForm);

function submitSigninForm(e){
    e.preventDefault();

    var email = document.getElementById('inpMail').value;
    var password = document.getElementById('inpPass').value;
    
    // console.log(email+" "+password);

    formdb.orderByChild("email").equalTo(email)
    .once("value").then((snapshot) => {
        if(!snapshot.exists()){
            // console.log(`Email id doesn't exist`);
            alert(`Email id doesn't exist`);
            
        }
        snapshot.forEach((element) => {
            // console.log(element.val().password);
            console.log(password === element.val().password);
            if(password === element.val().password){
                alert(`Login Successful`);
                setTimeout(()=>{
                    location.href = "dashboard.html";
                }, 1500);
            }else
                alert(`Password doesn't match`);
        });
    });

    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
    var user = auth.currentUser
    
    database.ref().child('user-data/' + user.name).update({
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

function alert(s){
    const alert = document.querySelector(".alert");
    alert.innerHTML = s;
    console.log(alert.innerHTML);

    alert.style.display = 'block';

    setTimeout(()=>{
        alert.style.display = 'none';
    }, 3000);
}