// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import {getDatabase,
    ref,
    set,
    get,}from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA11hgk-Jvh52K49nnvvi5NmXwXhyh0SuI",
    authDomain: "arthavault.firebaseapp.com",
    databaseURL: "https://arthavault-default-rtdb.firebaseio.com",
    projectId: "arthavault",
    storageBucket: "arthavault.firebasestorage.app",
    messagingSenderId: "1083248966716",
    appId: "1:1083248966716:web:eab34f24a63b6630d49739",
    measurementId: "G-SBL20CEHEB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const databaseRef = ref(database, "users");
