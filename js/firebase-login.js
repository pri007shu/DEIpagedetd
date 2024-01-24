// firebase-login.js

document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            var user = userCredential.user;
            console.log('User signed in:', user);

            // Redirect to dashboard.html after successful login
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            // Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Authentication failed:', errorCode, errorMessage);
        });
});
