document.addEventListener("DOMContentLoaded", function () {
  const graph = document.querySelector('#myPieChart').getContext('2d');
  const data = {
      labels: ['Food', 'Travel', 'Household', 'Health', 'Education', 'Others'],
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
  apiKey: "AIzaSyAh391JmV8sMQMsG4GM-d5YYDW9B2Wm02Q",
  authDomain: "student-stake.firebaseapp.com",
  projectId: "student-stake",
  storageBucket: "student-stake.firebasestorage.app",
  messagingSenderId: "30261368491",
  appId: "1:30261368491:web:15cfe37fda0a38620489ee",
  measurementId: "G-D7WLWT2CFH"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();


document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Logged in user:', user.email);
    } else {
      window.location.href = '../index.html';
    }
  });
});

// const signOut = document.getElementById('logout');

// signOut.addEventListener('click', async () => {
//   await auth.signOut();
//   window.location.href = "../index.html";
//   console.log('User signed out')
// });