function updateUserName() {
    // Check if there is a current user
    const user = firebase.auth().currentUser;
    if (user) {
      // Fetch user data from Firestore and update the name
      const userId = user.uid;

      firebase.firestore().collection('alumini').doc(userId).get()
        .then((doc) => {
          if (doc.exists) {
            const userName = doc.data().name;
            const userEmail = doc.data().email;
            const userprofileAADEIno = doc.data().aadeiNo;
            const userYearofpassing = doc.data().yearofpassing;
           
            const userAluminiAddress = doc.data().address;
            const userCourse = doc.data().aluminicourse;
            
            


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
            document.getElementById("alumininame").innerText = userName
            document.getElementById("aluminiemail").innerText = userEmail
            document.getElementById("aadeino").innerText = userprofileAADEIno
            document.getElementById("aluminicourse").innerText = userCourse
            document.getElementById("aluminiaddresss").innerText = userAluminiAddress
            document.getElementById("aluminiformemaill").innerText = userEmail
            document.getElementById("aadeinoo").innerText = userprofileAADEIno
            document.getElementById("yop").innerText = userYearofpassing
              
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

