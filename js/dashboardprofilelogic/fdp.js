
    const auth = firebase.auth();
    const db = firebase.firestore();

    // Function to fetch user data and update profile
    function fetchUserProfile(userId) {
        const userDocRef = db.collection('faculty').doc(userId);
        userDocRef.get().then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                // Update the HTML with the user's name
                document.getElementById('user-name').textContent = userData.name;
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    // Check if user is logged in
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, get the user's ID and fetch profile
            const userId = user.uid;
            fetchUserProfile(userId);
        } else {
            // No user is signed in.
            console.log("No user signed in.");
        }
    });
