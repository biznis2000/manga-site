// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMbL4z3cchR6FhBqLWZRVOWSif3nw8bEk",
    authDomain: "managa-site.firebaseapp.com",
    databaseURL: "https://managa-site-default-rtdb.firebaseio.com",
    projectId: "managa-site",
    storageBucket: "managa-site.appspot.com",
    messagingSenderId: "30254231613",
    appId: "1:30254231613:web:d48d98f9f8deb93f2e7a54",
    measurementId: "G-GYLL5C44EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'Category');


getDocs(colRef).then((querySnapshot) => {
    const productList = document.getElementById('product-blog');
    const docsArray = [];

    querySnapshot.forEach((doc) => {
        docsArray.push({ id: doc.id, data: doc.data() });
    });

    // Shuffle the array
    for (let i = docsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [docsArray[i], docsArray[j]] = [docsArray[j], docsArray[i]];
    }

    // Slice the first 12 items
    const selectedDocs = docsArray.slice(0, 120000);

    selectedDocs.forEach((doc) => {
        const data = doc.data;
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-4', 'mb-4');
        productItem.innerHTML = `
                <div class="card">
                    <a href="categories.html?id=${doc.data.Category}" class="card-body">
                        <h5 class="card-title">${data.Category}</h5>
                    </a>
                </div>     
        `;
        productList.appendChild(productItem);
    });

    // Apply background images
    document.querySelectorAll('.set-bg').forEach(element => {
        const bg = element.getAttribute('data-setbg');
        element.style.backgroundImage = `url(${bg})`;
    });
}).catch((error) => {
    console.error("Error getting documents: ", error);
});
