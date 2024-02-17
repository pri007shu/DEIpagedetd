function updateUserName() {
    // Check if there is a current user
    const user = firebase.auth().currentUser;
    if (user) {
      // Fetch user data from Firestore and update the name
      const userId = user.uid;

      firebase.firestore().collection('students').doc(userId).get()
        .then((doc) => {
          if (doc.exists) {
            const userName = doc.data().name;
            const userEmail = doc.data().email;
            const userprofileRollno = doc.data().rollNo;
            const userCourse = doc.data().course;
            const userBranch = doc.data().branch;
            const userstudentAddress = doc.data().address;
            const userFaculty = doc.data().faculty;


            document.getElementById('username').innerText = "Hey! " + userName;
            document.getElementById('username1').innerText = "Hey! " + userName;
            document.getElementById('username2').innerText = "Hey! " + userName;
            document.getElementById('username3').innerText = "Hey! " + userName;
            document.getElementById('username4').innerText = "Hey! " + userName;
            document.getElementById('username5').innerText = "Hey! " + userName;
            document.getElementById('username6').innerText = "Hey! " + userName;
            document.getElementById('username7').innerText = "Hey! " + userName;
            document.getElementById('username8').innerText = "Hey! " + userName;
            document.getElementById('username9').innerText = "Hey! " + userName;
            document.getElementById("studentname").innerText = userName
            document.getElementById("studentemail").innerText = userEmail
            document.getElementById("studentrollno").innerText = userprofileRollno
            document.getElementById("studentcourse").innerText = userCourse
            document.getElementById("studentbranch").innerText = userBranch
            document.getElementById("studentaddress").innerText = userstudentAddress
            document.getElementById("studentemailform").innerText = userEmail
            document.getElementById("studentrollnoform").innerText = userprofileRollno
            document.getElementById("studentfaculty").innerText = userFaculty
              
          } else {
            console.error('User data not found in Firestore');
          }
        })
        .catch((error) => {
          console.error('Error fetching user data from Firestore:', error);
        });
    } else {
      console.error('No authenticated user');
    }
  }


  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      updateUserName(); // Update user name on page load and on authentication state change
    }
  });

