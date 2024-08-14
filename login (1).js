// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAquyWfpVEf9l6QbfhHURsH-M4y0QTdRnk",
  authDomain: "login-47405.firebaseapp.com",
  projectId: "login-47405",
  storageBucket: "login-47405.appspot.com",
  messagingSenderId: "620776440770",
  appId: "1:620776440770:web:c207ec05ea49ac285b8c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    console.error("Email and password must be provided");
    return;
  }

  // Sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log('User signed in:', user);
      // Optionally, redirect or update the UI
      window.location.href = 'home.html'; // Redirect to a dashboard or another page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error [${errorCode}]: ${errorMessage}`);
      // Handle the error appropriately
      alert(`Error: ${errorMessage}`);
    });
});
