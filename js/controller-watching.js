// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

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
const colRefa = collection(db, 'Chaptere');

// Get the ID and chapter number from the URL
const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('id');
const chapterNumber = urlParams.get('chapter');
if (docId && chapterNumber) {
    console.log("Document ID found:", docId);
    console.log("Chapter number found:", chapterNumber);

    // Fetch the manga document with the specified ID
    const docRefmanga = doc(db, 'manga', docId);
    let name = '';
    let ids = '';

    getDoc(docRefmanga).then((docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            name = data.title;
            // Fetch all documents in 'Chaptere' collection
            return getDocs(colRefa);
        } else {
            throw new Error("No such document in 'manga' collection!");
        }
    }).then((querySnapshot) => {
        let found = false;
        querySnapshot.forEach((doc) => {
            if (name === doc.data().name && chapterNumber === doc.data().number+"") {
                ids = doc.id;
                console.log(ids);
                found = true;
            }
        });

        if (found) {
            // Fetch the document with the specified ID in 'Chaptere' collection
            const docRef = doc(db, 'Chaptere', ids);
            
            return getDoc(docRef);
        } else {
            throw new Error("No matching chapter document found!");
        }
    }).then((docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            
            // Create a container for images
            const productItem = document.createElement('div');
            
            // Check if data.image is an array and iterate over it
            if (Array.isArray(data.image)) {
                data.image.forEach(imageUrl => {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imgElement.alt = 'Image';
                    productItem.appendChild(imgElement);
                });
            }

            document.getElementById('product-imag').appendChild(productItem);
            
            // Apply background images
            document.querySelectorAll('.set-bg').forEach(element => {
                const bg = element.getAttribute('data-setbg');
                element.style.backgroundImage = `url(${bg})`;
            });
        } else {
            console.log("No such document in 'Chaptere' collection!");
        }
    }).catch((error) => {
        console.error("Error: ", error);
    });
} else {
    console.log("No ID or chapter number found in URL");
}
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
                        <h5>جميع الفصول</h5>
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
                        <h5>جميع الفصول</h5>
                    </div>
                    <div id="chapter-links"></div>
                </div>
            `;
            document.getElementById('product-EP-1').appendChild(productItem);

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
