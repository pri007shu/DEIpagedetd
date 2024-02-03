firebase.auth().onAuthStateChanged(user => {
  if (user) {
      const userId = user.uid;
      // Use userId to update Firestore document or perform other actions
      console.log("Logged in user ID:", userId);
      // Now you can use userId in your Firestore update logic or other parts of your code
  } else {
      // User is not logged in
      console.log("No user logged in");
  }
});


const form = document.getElementById('myForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value;
    const designation = form.designation.value;
    const department = form.department.value;
    const address = form.address.value;
    const userId = firebase.auth().currentUser.uid;
    // Update Firestore data here
    try {
        await db.collection('faculty').doc(userId).update({
            name: name,
            designation: designation,
            department: department,
            address: address
        });
        alert('Data updated successfully!');
        console.log('Document successfully updated!');
        document.getElementById("myForm").reset();
        // Close the form or show a success message
    } catch (error) {
      alert('Data not updated !');
        console.error('Error updating document: ', error);
        // Show an error message
    }
});



  document.getElementById("myForm1").addEventListener("submit", function(event) {
    event.preventDefault();
    const venue = document.getElementById("venue").value;
    const date = document.getElementById("date").value;
    const organisation = document.getElementById("organisation").value;
    const theme = document.getElementById("theme").value;
    const userId = firebase.auth().currentUser.uid;
  
    // Add data to Firestore
    db.collection("faculty").doc(userId).collection("fdGuestLecture").add({
      venue: venue,
      date: date,
      organisation: organisation,
      theme: theme
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      updateTable(); // Update the table after submission
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  
    // Clear the form
    document.getElementById("myForm1").reset();
  });
  


  // Function to update the table with Firestore data
  function updateTable() {
    var table = document.getElementById("dataTable1");
    table.innerHTML = "<tr><th>Venue</th><th>Date</th><th>Organisation</th><th>Theme</th></tr>";
  
    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("faculty").doc(user.uid).collection("fdGuestLecture").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          var row = table.insertRow(-1);
          row.insertCell(0).innerHTML = data.venue;
          row.insertCell(1).innerHTML = data.date;
          row.insertCell(2).innerHTML = data.organisation;
          row.insertCell(3).innerHTML = data.theme;
        });
      });
    } else {
      console.error("User not logged in.");
    }
  }
  
  // Listen for authentication state changes
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("User is logged in:", user.uid);
      updateTable(); // Call updateTable when user is logged in
    } else {
      // User is signed out.
      console.log("User is not logged in.");
    }
  });