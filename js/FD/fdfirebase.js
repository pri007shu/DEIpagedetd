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
  const db = firebase.firestore();
const auth = firebase.auth();