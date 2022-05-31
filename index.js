// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDm-Wfj3kAN4AwwwWNrrRr4ihsvtceC2X4",
  authDomain: "insta-clone-try.firebaseapp.com",
  projectId: "insta-clone-try",
  storageBucket: "insta-clone-try.appspot.com",
  messagingSenderId: "894919873648",
  appId: "1:894919873648:web:72475f1c00ec0fd30310b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  firstname = document.getElementById('firstname').value
  lastname = document.getElementById('lastname').value
  phone = document.getElementById('phone').value
  college = document.getElementById('college').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  // if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
  //   alert('One or More Extra Fields is Outta Line!!')
  //   return
  // }
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()
   
    // Create User data
    var user_data = {
      email : email,
      firstname : firstname,
      lastname : lastname,
      phone : phone,
      password: password,
      college: college,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data).then((er) => {
      alert('User Created!!')
      window.location.href = "new.html";
    })
   

    // DOne
  
    // window.location.href = "new.html";
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
  
    alert('User Logged In!!')
    window.location.href = "new.html";
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}


//forget password

document
  .querySelector("#forgot-password")
  .addEventListener("click", () => {
    const email = document.querySelector("#email").value;
    if (email.trim() == "") {
      alert("Enter Email");
    } else {
      forgotPassword(email);
    }
  });

const forgotPassword = (email) => {
  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      alert("email sent");
    })
    .catch(function (error) {
      alert("invalid email or bad network connection");
    });
};