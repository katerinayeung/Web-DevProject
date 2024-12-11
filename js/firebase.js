// firebase.js

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
const auth = firebaseApp.auth();

  // Handle form submission
  document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('commentTextarea').value;
    console.log(fname,lname,email,comment);

    db.collection('subscribers').add({
        fname: fname,
        lname: lname,
        email: email,
        comment: comment
    })
    .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        alert('Thank you for feedback!');
    })

    e.target.reset();
});



