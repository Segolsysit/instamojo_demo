

function handle(){

    var amount = 200;

    var options = {
        key:"rzp_test_1SnQnLm783h5Op",
        key_secret:"W3x1XiUXiyqIKQJrSBqaXGmE",
        "amount": amount * 100, // Example: 2000 paise = INR 20
        "name": "MERCHANT name",
        "description": "description",
        "image": "img/logo.png",// COMPANY LOGO
        "handler": function (response) {
            console.log(response);
            // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
        },
        "prefill": {
            "name": "ABC", // pass customer name
            "email": 'A@A.COM',// customer email
            "contact": '+919123456780' //customer phone no.
        },
        "notes": {
            "address": "address" //customer address 
        },
        "theme": {
            "color": "#15b8f3" // screen color
        }
    };
    console.log(options);
    var propay = new Razorpay(options);
    propay.open();
}

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA7zkS0bGtECDGGVDGahvoao_Z9EwiI0O8",
  authDomain: "auth-35f73.firebaseapp.com",
  databaseURL: "https://auth-35f73-default-rtdb.firebaseio.com",
  projectId: "auth-35f73",
  storageBucket: "auth-35f73.appspot.com",
  messagingSenderId: "276193603454",
  appId: "1:276193603454:web:b30e1664e1cf008088cd2f"
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  var database = firebase.database();

  let a =600;
var options = {
    "key": "rzp_test_FjtqgTIsWBgXxV", // Enter the Key ID generated from the Dashboard
    "amount": a, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    // "order_id": "rzp_test_FjtqgTIsWBgXxV", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
  
  
  const signup = () => {
  
    const email = document.getElementById('reg_email').value;
    const password = document.getElementById('reg_pass').value;
    const username = document.getElementById('user').value
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() {

        // var user = firebase.auth().currentUser
        var database_ref = database.ref() 

        var user_data = {
          Username : username,
          Email : email
        }

        database_ref.child('user/' + user.uid).set(user_data)
        // Signed in 
        alert("you signed up");
        // console.log(result);
        // ...
      })
      .catch((error) => { 
        console.log(error.code);
        console.log(error.message);
        // ..
      });
  }
  
  // signin function

  
  const signIn = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        rzp1.open();
        // e.preventDefault();
        // window.location.href="dashboard.html"
        // document.write("you signed in");
        console.log(result);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.code)
      });
  }