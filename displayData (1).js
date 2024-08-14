// Import the necessary Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd2CxrbHAz3GbkmU9r7nLgJat8QdeeV9w",
    authDomain: "contactform-2e680.firebaseapp.com",
    databaseURL: "https://contactform-2e680-default-rtdb.firebaseio.com",
    projectId: "contactform-2e680",
    storageBucket: "contactform-2e680.appspot.com",
    messagingSenderId: "885971549430",
    appId: "1:885971549430:web:f4488ff149b263b39680d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const contactFormDB = ref(database, 'contactForm');

// Fetch and display the data
onValue(contactFormDB, (snapshot) => {
    const data = snapshot.val();
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';  // Clear any previous data

    if (data) {
        for (let id in data) {
            const record = data[id];
            const recordElement = document.createElement('div');
            recordElement.className = 'record';
            recordElement.innerHTML = `
                <h3>Name: ${record.names}</h3>
                <p>Issue: ${record.issues}</p>
                <p>Target Amount: ${record.target_amount}</p>
                <p>Payment Info: ${record.payment_info}</p>
                <p>Contact: ${record.contact}</p>
                <p>Id_Proof: ${record.Id_Proof}</p>
                <p>Proof_of_authentication: ${record.Proof_of_authentication}</p>
                 

            `;
            dataContainer.appendChild(recordElement);
        }
    } else {
        dataContainer.innerHTML = '<p>No data available</p>';
    }
}, (error) => {
    console.error("Error fetching data: ", error);
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
});
