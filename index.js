console.log(firebase)
firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    // ...
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      // ...
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });

async function handleLogin(event) {
    event.preventDefault();
    const [email, password] = event.target.elements;
    try {
        await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        // history.push("/game.html"); // redirect after login
        window.location.href = "/home.html"
    } catch (error) {
        alert(error);
    }
};

async function handleSignup(event) {
    event.preventDefault();
    debugger;
    const [email, password] = event.target.elements;
    try {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        alert("Signed up as " + email.value)
        // history.push("/login"); // redirect after login
    } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    alert(error) // dev
    // alert(errorMessage)
    }
}

document.querySelector("form#login").addEventListener("submit", handleLogin)
document.querySelector("form#signup").addEventListener("submit", handleSignup)