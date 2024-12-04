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
  document.getElementById('subscribeForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(name, email);

    db.collection('subscribers').add({
        name: name,
        email: email
    })
    .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        alert('Thank you for subscribing!');
    })
/*
    try {
        // Save data to Firestore
        await addDoc(subscribersCollection, { name, email });
        alert('Thank you for subscribing!');
    } 
    catch (error) {
        console.error('Error adding document: ', error);
        alert('Subscription failed. Please try again.');
    }
*/
    // Clear the form
    e.target.reset();
});



