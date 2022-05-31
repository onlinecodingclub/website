
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBd_j6Qv0A9SreisvjEHiww1gN9HfO09d8",
    authDomain: "ccweb-ae4de.firebaseapp.com",
    projectId: "ccweb-ae4de",
    storageBucket: "ccweb-ae4de.appspot.com",
    messagingSenderId: "563685804229",
    appId: "1:563685804229:web:310e1c63a20df7874b08ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
   
  }

  //signIN function




  //OG SIGN IN 15/05
  function  signIn(){
    console.log("signed in successsfully")
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));


}
  

    //tring to check uername and pwd bfore log in 
    // const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    // if( email == document.getElementById("email") &&  password  == document.getElementById("password")){
    //   window.location.href = "new.html";
    
    //     }else{
    //       promise.catch(e=>alert(e.message));
    //     }


  


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  // //active user to homepage
  // firebase.auth().onAuthStateChanged((user)=>{
  //   if(user){
  //     var email = user.email;
  //     alert("Active user "+email);

  //   }else{
  //     alert("No Active user Found")
  //   }
  // })