
document.addEventListener("DOMContentLoaded", function () {
  let listArr = [0, 0, 0, 0, 0, 0];

  let btn = document.querySelector(".btn");
window.onload = function () {
  btn.onclick = function () {
    window.location.href = "../arthaGpt/arthaGpt.html";
  };
};

  const graph = document.querySelector("#myPieChart").getContext("2d");
  const data = {
    labels: ["Food", "Travel", "Household", "Health", "Education", "Others"],
    datasets: [
      {
        label: "Colors Distribution",
        data: listArr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
  };
  
  
  
  let list = document.querySelector("#submitBtn");
  let totalExpense
  let ch
  list.addEventListener("click", (e) => {
    if (ch) {
      ch.destroy();
    }
    totalExpense = 0;
    let totalIncome = parseInt(document.querySelector("#Income").value);
    listArr[1] = parseInt(document.querySelector("#Travel").value);
    listArr[0] = parseInt(document.querySelector("#Food").value);
    listArr[2] = parseInt(document.querySelector("#Household").value);
    listArr[3] = parseInt(document.querySelector("#Health").value);
    listArr[4] = parseInt(document.querySelector("#Education").value);
    listArr[5] = parseInt(document.querySelector("#Others").value);
    console.log(listArr);
    ch = new Chart(graph, config);
    listArr.forEach(a=>{
      totalExpense+=a;
      console.log(totalIncome-totalExpense)
    })
    if(totalIncome-totalExpense>0){
      document.querySelector(".remaining").textContent=(totalIncome-totalExpense)
    }
    else{
      document.querySelector(".remaining").textContent=0;
    }
  });

  
});

import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA11hgk-Jvh52K49nnvvi5NmXwXhyh0SuI",
  authDomain: "arthavault.firebaseapp.com",
  projectId: "arthavault",
  storageBucket: "arthavault.firebasestorage.app",
  messagingSenderId: "1083248966716",
  appId: "1:1083248966716:web:eab34f24a63b6630d49739",
  measurementId: "G-SBL20CEHEB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in user:", user.email);
    } else {
      window.location.href = "../index.html";
    }
  });
});

const signOut = document.getElementById("logout");

signOut.addEventListener("click", async () => {
  await auth.signOut();
  window.location.href = "../index.html";
  console.log("User signed out");
});

let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".guide");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

let navLinks = document.querySelectorAll(".guide a");

navLinks.forEach((link) => {
  link.onclick = () => {
    menu.classList.remove("bx-x");
    nav.classList.remove("active");
  };
});
