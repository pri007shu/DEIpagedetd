// FDGL LOGIC

         // Get a reference to the Firestore service
         const db = firebase.firestore();
         const auth = firebase.auth();
     
         // Add an event listener to the form submission
         document.getElementById('myForm1').addEventListener('submit', function(event) {
           event.preventDefault(); // Prevent the form from submitting normally
           
           // Get the current user
           const user = auth.currentUser;
     
           if (user) {
             // User is signed in, proceed to upload form data
             const venue = document.getElementById('venue').value;
             const date = document.getElementById('date').value;
             const organisation = document.getElementById('organisation').value;
             const theme = document.getElementById('theme').value;
     
             // Upload form data to Firestore collection
             db.collection("faculty").doc(user.uid).collection("fdgl").add({
               venue: venue,
               date: date,
               organisation: organisation,
               theme: theme
             })
             .then(function(docRef) {
               console.log("Document written with ID: ", docRef.id);
               alert("Form submitted successfully!");
               document.getElementById('myForm1').reset(); // Clear the form fields
             })
             .catch(function(error) {
               console.error("Error adding document: ", error);
               alert("An error occurred. Please try again later.");
             });
           } else {
             // User is not signed in, prompt them to sign in first
             alert("Please sign in before submitting the form.");
           }
         });


         // Add an event listener to the form submission
         document.getElementById('myForm2').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the form from submitting normally
          
          // Get the current user
          const user = auth.currentUser;
    
          if (user) {
            // User is signed in, proceed to upload form data
            const sanctioningbody = document.getElementById('sanctioningbody').value;
            const title = document.getElementById('title').value;
            const fund = document.getElementById('fund').value;
            const sdate = document.getElementById('sdate').value;
            const edate = document.getElementById('edate').value;
    
            // Upload form data to Firestore collection
            db.collection("faculty").doc(user.uid).collection("fdps").add({
               sanctioningbody: sanctioningbody,
              sdate: sdate,
              title: title,
              fund: fund,
              edate: edate
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
              alert("Form submitted successfully!");
              document.getElementById('myForm2').reset(); // Clear the form fields
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
              alert("An error occurred. Please try again later.");
            });
          } else {
            // User is not signed in, prompt them to sign in first
            alert("Please sign in before submitting the form.");
          }
        });