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
