// Import Firebase SDK (modular v10+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore, collection, addDoc, doc, updateDoc, deleteDoc,
  onSnapshot, getDocs, writeBatch
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// 🔹 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase + Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const booksRef = collection(db, "books");

// DOM references
const gridEl = document.getElementById("grid");
const formEl = document.getElementById("addBookForm");

// Helper: currency format
const currency = (val) => `₹${Number(val).toLocaleString("en-IN")}`;

// Render books
function renderBooks(docs) {
  gridEl.innerHTML = "";
  docs.forEach((d) => {
    const data = d.data();
    const id = d.id;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${data.coverImageURL || 'https://dummyimage.com/300x200/ccc/000&text=No+Image'}" alt="Cover">
      <div class="content">
        <h3>${data.title}</h3>
        <p>${data.author}</p>
        <p class="price">${currency(data.price)}</p>
        <div class="actions">
          <button class="warning" data-action="update" data-id="${id}">Update Author</button>
          <button class="danger" data-action="delete" data-id="${id}">Delete</button>
          <button class="primary" data-action="view" data-id="${id}">View Details</button>
        </div>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

// 🔹 Realtime listener
onSnapshot(booksRef, (snap) => {
  renderBooks(snap.docs);
});

// 🔹 Add book
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const price = parseFloat(document.getElementById("price").value);
  const imageUrl = document.getElementById("imageUrl").value;

  try {
    await addDoc(booksRef, { title, author, price, coverImageURL: imageUrl });
    formEl.reset();
  } catch (err) {
    console.error("Error adding book:", err);
  }
});

// 🔹 Card actions (Update, Delete, View)
gridEl.addEventListener("click", async (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const id = btn.getAttribute("data-id");
  const action = btn.getAttribute("data-action");
  const ref = doc(db, "books", id);

  if (action === "delete") {
    await deleteDoc(ref);
  } else if (action === "update") {
    const newAuthor = prompt("Enter new author name:");
    if (newAuthor) await updateDoc(ref, { author: newAuthor });
  } else if (action === "view") {
    alert(`Book ID: ${id}`);
  }
});

// 🔹 Dummy data insertion (optional)
async function seedDummyBooks() {
  const dummy = [
    { title: "Atomic Habits", author: "James Clear", price: 499, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/81b0HZwZ3SL.jpg" },
    { title: "Deep Work", author: "Cal Newport", price: 399, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg" },
    { title: "Clean Code", author: "Robert C. Martin", price: 749, coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg" }
  ];
  for (const b of dummy) {
    await addDoc(booksRef, b);
  }
}
// Uncomment to auto-seed
// seedDummyBooks();
