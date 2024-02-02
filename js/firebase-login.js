// Replace with your Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyCu3Jlxe8Ao3SphePEMG6qXE1f1_YYjb7o",
    authDomain: "deipage-detd.firebaseapp.com",
    projectId: "deipage-detd",
    storageBucket: "deipage-detd.appspot.com",
    messagingSenderId: "830390951653",
    appId: "1:830390951653:web:92ad43a7a52c844c18be0c",
    measurementId: "G-QFX4F832FE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

// Get the form
document.querySelector('.login-form').addEventListener('submit', function (e) {
e.preventDefault();

var email = document.getElementById('username').value;
var password = document.getElementById('password').value;

firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
    var user = userCredential.user;

    // Check user role based on Firestore data
    checkUserRole(email);
})
.catch((error) => {
    // Handle errors
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error('Authentication failed:', errorCode, errorMessage);
});
});

function checkUserRole(email) {
// Check in the students collection
firebase.firestore().collection("students").where("email", "==", email)
.get()
.then((querySnapshot) => {
    if (!querySnapshot.empty) {
        // User is a student, redirect to student dashboard
        window.location.href = "studentdashboard.html";
    } else {
        // Check in the faculty collection
        firebase.firestore().collection("faculty").where("email", "==", email)
            .get()
            .then((facultySnapshot) => {
                if (!facultySnapshot.empty) {
                    // User is faculty, redirect to faculty dashboard
                    window.location.href = "facultydashboard.html";
                } else {
                    // Check in the alumni collection
                    firebase.firestore().collection("alumini").where("email", "==", email)
                        .get()
                        .then((alumniSnapshot) => {
                            if (!alumniSnapshot.empty) {
                                // User is alumni, redirect to alumni dashboard
                                window.location.href = "aluminidashboard.html";
                            } else {
                                // User data not found in any collection
                                console.log("User data not found.");
                            }
                        })
                        .catch((error) => {
                            console.error("Error getting alumni collection:", error);
                        });
                }
            })
            .catch((error) => {
                console.error("Error getting faculty collection:", error);
            });
    }
})
.catch((error) => {
    console.error("Error getting students collection:", error);
});
}
