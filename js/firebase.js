const firebaseConfig = {
  apiKey: "AIzaSyAmxXFwSk2eq_Shbknil2FhUHUWGnxpW1g",
  authDomain: "database225-e1028.firebaseapp.com",
  projectId: "database225-e1028",
  storageBucket: "database225-e1028.firebasestorage.app",
  messagingSenderId: "829875280769",
  appId: "1:829875280769:web:713ba7a1401086f490a680",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle form submission
document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form data
  const fname = document.querySelector('input[name="fname"]').value;
  const lname = document.querySelector('input[name="lname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const comment = document.querySelector("#commentTextarea").value;
  const subscribe = document.querySelector("#subscribecheck").checked;

  try {
    // Add data to Firebase
    const docRef = await db.collection("feedback").add({
      fname,
      lname,
      email,
      comment,
      subscribe,
      submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    console.log("Document written with ID:", docRef.id);
    alert("Thank you for your feedback!");
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("An error occurred while submitting your feedback. Please try again.");
  }

  // Reset the form
  e.target.reset();
});
