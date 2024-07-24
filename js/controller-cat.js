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

const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('id');
let docsArray = [];
const itemsPerPage = 12;

getDocs(colRef).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        docsArray.push({ id: doc.id, data: doc.data() });
    });

    // Sort the array by timestamp in ascending order (oldest to newest)
    docsArray.sort((a, b) => a.data.Date + b.data.Date);

    if (docId) {
        // Filter docsArray based on the presence of docId in the Genre array
        docsArray = docsArray.filter(doc => doc.data.Genre && doc.data.Genre.includes(docId));
        renderItems(1); // Render filtered items
    } else {
        renderItems(1); // Render items for the first page
    }
}).catch((error) => {
    console.error("Error getting documents: ", error);
});

// Function to render items based on the current page
function renderItems(page) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const selectedDocs = docsArray.slice(start, end);

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

    renderPagination(page);
}

// Function to render pagination controls
function renderPagination(currentPage) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(docsArray.length / itemsPerPage);
    const maxPagesToShow = 11;
    let startPage = Math.max(currentPage - 5, 1);
    let endPage = Math.min(currentPage + 5, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
        if (currentPage < Math.ceil(maxPagesToShow / 2)) {
            endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
        } else if (currentPage > totalPages - Math.ceil(maxPagesToShow / 2)) {
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.classList.add('current-page');
        }
        pageLink.addEventListener('click', (event) => {
            event.preventDefault();
            renderItems(i);
        });
        pagination.appendChild(pageLink);
    }

    if (currentPage < totalPages) {
        const nextPageLink = document.createElement('a');
        nextPageLink.href = '#';
        nextPageLink.innerHTML = '<i class="fa fa-angle-double-right"></i>';
        nextPageLink.addEventListener('click', (event) => {
            event.preventDefault();
            renderItems(currentPage + 1);
        });
        pagination.appendChild(nextPageLink);
    }
}

// Fetch top views data and initialize
getDocs(colRef).then((querySnapshot) => {
    const productList = document.getElementById('product-top');
    const topDocsArray = [];

    querySnapshot.forEach((doc) => {
        topDocsArray.push({ id: doc.id, data: doc.data() });
    });

    // Sort by views in descending order
    topDocsArray.sort((a, b) => b.data.Views - a.data.Views);

    // Slice the first 8 items
    const selectedDocs = topDocsArray.slice(0, 8);

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
