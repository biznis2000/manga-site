// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection,doc, getDocs,getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Get the ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('id');

if (docId) {
    // Fetch the document with the specified ID

    const docRef = doc(db, 'manga', docId);

    getDoc(docRef).then((doc) => {
        if (doc.exists()) {
            const data = doc.data();
            const productItem = document.createElement('div');
            console.log(data.url);
            const dateaa = new Date(data.Date.seconds * 1000 + data.Date.nanoseconds / 1000000);
            const formattedDate = `${dateaa.toLocaleDateString()}`;

            productItem.innerHTML = `
                <div class="anime__details__content">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="anime__details__pic set-bg" data-setbg="${data.url}">
                                <div class="comment"><i class="fa fa-comments"></i> ${data.Rating}</div>
                                <div class="view"><i class="fa fa-star"></i> ${data.Views}</div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="anime__details__text">
                                <div class="anime__details__title">
                                    <h3>${data.title}</h3>
                                </div>
                                <div class="anime__details__rating">
                                    <div class="rating">
                                        <a href="#"><i class="fa fa-star"></i></a>
                                        <a href="#"><i class="fa fa-star"></i></a>
                                        <a href="#"><i class="fa fa-star"></i></a>
                                        <a href="#"><i class="fa fa-star"></i></a>
                                        <a href="#"><i class="fa fa-star-half-o"></i></a>
                                    </div>
                                </div>
                                <p>${data.dis}</p>
                                <div class="anime__details__widget">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <ul>
                                                <li><span>Type:</span> ${data.Type}</li>
                                                <li><span>Date aired:</span> ${formattedDate}</li>
                                                <li><span>Status:</span> ${data.Status}</li>
                                                <li><span>Genre:</span> ${data.Genre}</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <ul>
                                                <li><span>Rating:</span> ${data.Rating}</li>
                                                <li><span>Views:</span> ${data.Views}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="anime__details__btn">
                                    <a href="anime-watching.html?id=${doc.id}&chapter=1" class="watch-btn"><i class="fa fa-angle-left"></i><span>First</span></a>
                                    <a href="anime-watching.html?id=${doc.id}&chapter=${data.chap}" class="watch-btn"><span>Last</span> <i class="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('product-det').appendChild(productItem);
            // Apply background images
            document.querySelectorAll('.set-bg').forEach(element => {
                const bg = element.getAttribute('data-setbg');
                element.style.backgroundImage = `url(${bg})`;
            });
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.error("Error getting document: ", error);
    });
} else {
    console.log("No ID found in URL");
}



// Assuming docId is already defined
if (docId) {
    console.log("Document ID found:", docId);

    // Fetch the document with the specified ID
    const docRef = doc(db, 'manga', docId);

    getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const data = docSnap.data();

            const productItem = document.createElement('div');
            productItem.innerHTML = `
                <div class="anime__details__episodes">
                    <div class="section-title">
                        <h5>List Name</h5>
                    </div>
                    <div id="chapter-links"></div>
                </div>
            `;
            document.getElementById('product-EP').appendChild(productItem);

            // Assuming 'chapters' is a field in the document data
            const chapters = data.chap;
            console.log("Number of chapters:", chapters);

            const chapterLinksContainer = productItem.querySelector('#chapter-links');
            const baseUrl = 'anime-watching.html'; // Base URL of the destination page

            for (let i = 1; i <= chapters; i++) {
                const chapterLink = document.createElement('a');
                chapterLink.href = `${baseUrl}?id=${docSnap.id}&chapter=${i}`; // Append doc.id and chapter number as query parameters
                chapterLink.textContent = i < 10 ? `0${i}` : i; // Add leading zero for single-digit numbers
                chapterLinksContainer.appendChild(chapterLink);
            }

            // Apply background images
            document.querySelectorAll('.set-bg').forEach(element => {
                const bg = element.getAttribute('data-setbg');
                console.log("Setting background image for element:", element, "with background:", bg);
                element.style.backgroundImage = `url(${bg})`;
            });
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.error("Error getting document:", error);
    });
} else {
    console.log("No ID found in URL");
}
