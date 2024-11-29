document.addEventListener("DOMContentLoaded", function () {
    const graph = document.querySelector('#myPieChart').getContext('2d');
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Colors Distribution',
          data: [12, 19, 3, 5, 2, 20], // Data values
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderWidth: 1
        }]
      };
      const config = {
        type: 'pie', // Type of the chart
        data: data
      };

      new Chart(graph,config);

})

// Checking if the user is signed in or not

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyA11hgk-Jvh52K49nnvvi5NmXwXhyh0SuI",
    authDomain: "arthavault.firebaseapp.com",
    projectId: "arthavault",
    storageBucket: "arthavault.firebasestorage.app",
    messagingSenderId: "1083248966716",
    appId: "1:1083248966716:web:eab34f24a63b6630d49739",
    measurementId: "G-SBL20CEHEB"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth();


document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {

      window.location.href = '../index.html';
    } else {
      console.log('Logged in user:', user.email);
    }
  });
});

const signOut = document.getElementById('logout');

signOut.addEventListener('click', async () => {
  await auth.signOut();
  window.location.href = "../index.html";
  console.log('User signed out')
});