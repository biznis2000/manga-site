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
const colRef = collection(db, 'manga');

getDocs(colRef).then((querySnapshot) => {
    const productList = document.getElementById('product-list');
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
    const selectedDocs = docsArray.slice(0, 12);

    selectedDocs.forEach((doc) => {
        const data = doc.data;
        const productItem = document.createElement('div');
        productItem.classList.add('col-lg-4', 'col-md-6', 'col-sm-6');
        productItem.innerHTML = `
            <div class="product__item">
                <a href="anime-details.html?id=${doc.id}">
                    <div class="product__item__pic set-bg" id="image-card" data-setbg="${data.url}">
                        <div class="ep">${data.chap}</div>
                        <div class="comment"><i class="fa fa-star"></i> ${data.Rating}</div>
                        <div class="view"><i class="fa fa-eye"></i> ${data.Views}</div>
                    </div>
                </a>
                <div class="product__item__text">
                    <ul>
                        <li>${data.Type}</li>
                    </ul>
                    <h5><a href="anime-details.html?id=${doc.id}">${data.title}</a></h5>
                </div>
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


getDocs(colRef).then((querySnapshot) => {
    const productList = document.getElementById('product-top');
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
    const selectedDocs = docsArray.slice(0, 8);

    selectedDocs.forEach((doc) => {
        const data = doc.data;
        const productItem = document.createElement('div');
        productItem.classList.add('filter__gallery');
        productItem.innerHTML = `
        <a href="anime-details.html?id=${doc.id}">
             <div class="product__sidebar__view__item set-bg mix day years" data-setbg="${data.url}">
                <div class="ep">${data.chap}</div>
                <div class="view"><i class="fa fa-eye"></i> ${data.Views}</div>
                <h5><a href="anime-details.html?id=${doc.id}">${data.title}</a></h5>
            </div>
        </a>
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
