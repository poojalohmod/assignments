let books = [];

const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const sortAsc = document.getElementById("sortAsc");
const sortDesc = document.getElementById("sortDesc");
const filterCategory = document.getElementById("filterCategory");

function renderBooks(list) {
  bookList.innerHTML = "";
  list.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${book.imageUrl}" alt="Book Image">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Category: ${book.category}</p>
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    bookList.appendChild(card);
  });
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  const newBook = {
    title,
    author,
    category,
    imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
  };

  books.push(newBook);
  renderBooks(books);
  bookForm.reset();
});

function deleteBook(index) {
  books.splice(index, 1);
  renderBooks(books);
}

sortAsc.addEventListener("click", () => {
  books.sort((a, b) => a.title.localeCompare(b.title));
  renderBooks(books);
});

sortDesc.addEventListener("click", () => {
  books.sort((a, b) => b.title.localeCompare(a.title));
  renderBooks(books);
});

filterCategory.addEventListener("change", () => {
  const value = filterCategory.value;
  if (value === "All") {
    renderBooks(books);
  } else {
    renderBooks(books.filter(book => book.category === value));
  }
});
