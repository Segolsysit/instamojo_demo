

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
    apiKey: "AIzaSyBcY40n3yG3zOqP_KxhdbZSH23E-SHErFc",
    authDomain: "auth-7f2bf.firebaseapp.com",
    projectId: "auth-7f2bf",
    storageBucket: "auth-7f2bf.appspot.com",
    messagingSenderId: "755909554015",
    appId: "1:755909554015:web:818cc0d7cac0306b6210ea"
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

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
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in 
        alert("you signed up");
        console.log(result);
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