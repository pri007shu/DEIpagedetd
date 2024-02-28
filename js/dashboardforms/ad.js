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

// PROFILE PAGE

const form = document.getElementById('myForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value;
    const aluminicourse = form.aluminicourse.value;
    const yearofpassing = form.yearofpassing.value;
    const address = form.address.value;
    const userId = firebase.auth().currentUser.uid;
    // Update Firestore data here
    try {
        await db.collection('alumini').doc(userId).update({
            name: name,
            aluminicourse: aluminicourse,
            yearofpassing: yearofpassing,
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

// GUEST LECTURE

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
      updateTable1(); // Update the table after submission
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  
    // Clear the form
    document.getElementById("myForm1").reset();
  });
  


  // Function to update the table with Firestore data
  function updateTable1() {
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
      updateTable1(); // Call updateTable when user is logged in
    } else {
      // User is signed out.
      console.log("User is not logged in.");
    }
  });


  // PROJECTS SANCTIONED

  document.getElementById("myForm2").addEventListener("submit", function(event) {
    event.preventDefault();
    const sanctioningbody = document.getElementById("sanctioningbody").value;
    const title = document.getElementById("title").value;
    const fund = document.getElementById("fund").value;
    const sdate = document.getElementById("sdate").value;
    const edate = document.getElementById("edate").value;
    const userId = firebase.auth().currentUser.uid;
  
    // Add data to Firestore
    db.collection("faculty").doc(userId).collection("fdProjectsSanctioned").add({
      sanctioningbody: sanctioningbody,
      title: title,
      fund: fund,
      sdate: sdate,
      edate: edate
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      updateTable2(); // Update the table after submission
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  
    // Clear the form
    document.getElementById("myForm2").reset();
  });
  


  // Function to update the table with Firestore data
  function updateTable2() {
    var table = document.getElementById("dataTable2");
    table.innerHTML = "<tr><th>Sanctioning Body</th><th>Title</th><th>Fund</th><th>Start-Date</th><th>End-Date</th></tr>";
  
    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("faculty").doc(user.uid).collection("fdProjectsSanctioned").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          var row = table.insertRow(-1);
          row.insertCell(0).innerHTML = data.sanctioningbody;
          row.insertCell(1).innerHTML = data.title;
          row.insertCell(2).innerHTML = data.fund;
          row.insertCell(3).innerHTML = data.sdate;
          row.insertCell(4).innerHTML = data.edate;
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
      updateTable2(); // Call updateTable when user is logged in
    } else {
      // User is signed out.
      console.log("User is not logged in.");
    }
  });

  // PATENTS 

  document.getElementById("myForm3a").addEventListener("submit", function(event) {
    event.preventDefault();
    const tittle = document.getElementById("tittle").value;
    const appnumber = document.getElementById("appnumber").value;
    const status = document.getElementById("status").value;
    const fdate = document.getElementById("fdate").value;
    const validityupto = document.getElementById("validityupto").value;
    const userId = firebase.auth().currentUser.uid;
  
    // Add data to Firestore
    db.collection("faculty").doc(userId).collection("fdPatents").add({
      tittle: tittle,
      appnumber: appnumber,
      status: status,
      fdate: fdate,
      validityupto: validityupto
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      updateTable3(); // Update the table after submission
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  
    // Clear the form
    document.getElementById("myForm3a").reset();
  });
  


  // Function to update the table with Firestore data
  function updateTable3() {
    var table = document.getElementById("dataTable3");
    table.innerHTML = "<tr><th>Title</th><th>Application Number</th><th>Status</th><th>Date</th><th>ValidityUpto</th></tr>";
    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("faculty").doc(user.uid).collection("fdPatents").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          var row = table.insertRow(-1);
          row.insertCell(0).innerHTML = data.tittle;
          row.insertCell(1).innerHTML = data.appnumber;
          row.insertCell(2).innerHTML = data.status;
          row.insertCell(3).innerHTML = data.fdate;
          row.insertCell(4).innerHTML = data.validityupto;
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
      updateTable3(); // Call updateTable when user is logged in
    } else {
      // User is signed out.
      console.log("User is not logged in.");
    }
  });