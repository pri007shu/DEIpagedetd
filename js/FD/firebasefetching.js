function updateUserName() {
    // Check if there is a current user
    const user = firebase.auth().currentUser;
    if (user) {
      // Fetch user data from Firestore and update the name
      const userId = user.uid;

      firebase.firestore().collection('faculty').doc(userId).get()
        .then((doc) => {
          if (doc.exists) {
            const userName = doc.data().name;
            const userEmail = doc.data().email;
            const userEmployee = doc.data().employeeNo;
            const userDesignation = doc.data().designation;
            const userDepartment = doc.data().department;
            const userAddress = doc.data().address;


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
            document.getElementById("name1").innerText = userName
              document.getElementById("email").innerText = userEmployee 
              document.getElementById("emailform").innerText = userEmployee 
              document.getElementById("employeeno").innerText = userEmail
              document.getElementById("employeenoform").innerText = userEmail 
              document.getElementById("designation").innerText = userDesignation
              document.getElementById("department").innerText = userDepartment
              document.getElementById("address").innerText = userAddress
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

