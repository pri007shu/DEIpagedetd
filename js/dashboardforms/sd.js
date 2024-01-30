// FDGL LOGIC


         // Academic Performance




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
             const grades = document.getElementById('grades').value;
             const sgpa = document.getElementById('sgpa').value;
             
     
             // Upload form data to Firestore collection
             db.collection("students").doc(user.uid).collection("sdAcademicPerformance").add({
              grades: grades,
              sgpa: sgpa,
            
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




         // Projects Sanctioned



         // Add an event listener to the form submission
         document.getElementById('myForm2').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the form from submitting normally
          
          // Get the current user
          const user = auth.currentUser;
    
          if (user) {
            // User is signed in, proceed to upload form data
            
            const title = document.getElementById('title').value;
            const supervision = document.getElementById('supervision').value;
            const subject = document.getElementById('subject').value;
            const sdate = document.getElementById('sdate').value;
            const edate = document.getElementById('edate').value;
    
            // Upload form data to Firestore collection
            db.collection("students").doc(user.uid).collection("sdprojects").add({
              supervision: supervision,
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


        // Patents

          // Add an event listener to the form submission
          document.getElementById('myForm3').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            // Get the current user
            const user = auth.currentUser;
      
            if (user) {
              // User is signed in, proceed to upload form data
            
              const nameofproducts = document.getElementById('nameofproducts').value;
              const supervision = document.getElementById('supervision').value;
              const date = document.getElementById('date').value;
              
      
              // Upload form data to Firestore collection
              db.collection("students").doc(user.uid).collection("fdpatents").add({
                
                nameofproducts: nameofproducts,
               
                supervision: supervision,
                date: date
              })
              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("Form submitted successfully!");
                document.getElementById('myForm3').reset(); // Clear the form fields
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


          // Research Papers


          // complete from here okay //




          
            // Add an event listener to the form submission
         document.getElementById('myForm4').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the form from submitting normally
          
          // Get the current user
          const user = auth.currentUser;
    
          if (user) {
            // User is signed in, proceed to upload form data
            const subject = document.getElementById('subject').value;
            const title = document.getElementById('title').value;
            const publication = document.getElementById('publication').value;
            const author = document.getElementById('author').value;
    
            // Upload form data to Firestore collection
            db.collection("faculty").doc(user.uid).collection("fdbs").add({
              subject: subject,
              publication: publication,
              title: title,
              author: author
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
              alert("Form submitted successfully!");
              document.getElementById('myForm4').reset(); // Clear the form fields
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
          document.getElementById('myForm5').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            // Get the current user
            const user = auth.currentUser;
      
            if (user) {
              // User is signed in, proceed to upload form data
              const date = document.getElementById('date').value;
              const location = document.getElementById('location').value;
              const name = document.getElementById('name').value;
              const topic = document.getElementById('topic').value;
              const edate = document.getElementById('edate').value;
      
              // Upload form data to Firestore collection
              db.collection("faculty").doc(user.uid).collection("fdcf").add({
                date: date,
                location: location,
                name: name,
                topic: topic,
              })
              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("Form submitted successfully!");
                document.getElementById('myForm5').reset(); // Clear the form fields
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
         document.getElementById('myForm6').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the form from submitting normally
          
          // Get the current user
          const user = auth.currentUser;
    
          if (user) {
            // User is signed in, proceed to upload form data
            const workshoptitle = document.getElementById('workshoptitle').value;
            const subject = document.getElementById('subject').value;
            const date = document.getElementById('date').value;
            const modeofworkshop = document.getElementById('modeofworkshop').value;
            const location = document.getElementById('location').value;
    
            // Upload form data to Firestore collection
            db.collection("faculty").doc(user.uid).collection("fdws").add({
              workshoptitle: workshoptitle,
              subject: subject,
              date: date,
              modeofworkshop: modeofworkshop,
              location: location
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
              alert("Form submitted successfully!");
              document.getElementById('myForm6').reset(); // Clear the form fields
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
          document.getElementById('myForm7').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            // Get the current user
            const user = auth.currentUser;
      
            if (user) {
              // User is signed in, proceed to upload form data
              const date = document.getElementById('date').value;
              const cause = document.getElementById('cause').value;
      
              // Upload form data to Firestore collection
              db.collection("faculty").doc(user.uid).collection("fdfv").add({
                date: date,
                cause: cause,
               
              })
              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("Form submitted successfully!");
                document.getElementById('myForm7').reset(); // Clear the form fields
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
         document.getElementById('myForm8').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the form from submitting normally
          
          // Get the current user
          const user = auth.currentUser;
    
          if (user) {
            // User is signed in, proceed to upload form data
            const achievementtitle = document.getElementById('achievementtitle').value;
            const organisedby = document.getElementById('organisedby').value;
            const date = document.getElementById('date').value;
            const referencelink = document.getElementById('referencelink').value;
    
            // Upload form data to Firestore collection
            db.collection("faculty").doc(user.uid).collection("fdos").add({
              achievementtitle: achievementtitle,
               organisedby: organisedby,
               date: date,
               referencelink: referencelink,
              
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