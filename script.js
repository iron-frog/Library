let myLibrary = [
  new Book("Foundation", "Issac Asimov", "189", true),
  new Book("Second Foundation", "Issac Asimov", "227", false),
  new Book("The Naked Sun", "Issac Asimov", "242", true),
];

const bookDisplay = document.querySelector(".book-display");
const form = document.querySelector("form");
const formButton = document.querySelector("button[type='submit']");
const bTitle = document.getElementById("input-title");
const showFormButton = document.querySelector(".show-formBtn");
const delBook = document.querySelector(".del-book");
const closeFormBtn = document.querySelector(".close-form");
const overlay = document.querySelector(".overlay");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(e) {
  e.preventDefault();
  const title = document.getElementById("input-title").value;
  const author = document.getElementById("input-author").value;
  const pages = document.getElementById("input-pages").value;
  const read = document.querySelector("input[name='read']:checked").value;
  const newBook = new Book(title, author, pages, read);
  if (title === "" || author === "" || pages === "") {
    return;
  }
  myLibrary.push(newBook);
  displayBook(myLibrary);
  formActive();
}

function displayBook(library) {
  bookDisplay.innerHTML = myLibrary
    .map((book, i) => {
      return `<div class="book-card">
      
      <h3 class="title">${book.title}</h3>
      <div class="book-card-row">
      <p>Author</p>
      <p class="author">${book.author}</p>
      </div>
      <div class="book-card-row">
      <p>Page Count</p>
      <p class="pages">${book.pages}</p>
      </div>
      <div class=book-card-row>
      <p>Status</p>
      <button class='read-status ${book.read ? "green" : "red"}'
      data-index="${i}">${book.read ? "Read" : "Not Read"}</button>
      </div>
      <button class="del-book" data-index="${i}">-</button>
    </div>`;
    })
    .join("");
}
function formActive() {
  form.classList.toggle("active");
  overlay.classList.toggle("activebg");
  form.style.zIndex = "1";
}

function deleteBook(e) {
  if (!(e.target.classList == "del-book")) {
    return;
  }
  myLibrary.splice(e.target.getAttribute("data-index"), 1);
  displayBook(myLibrary);
}

function changeStatus(e) {
  const buttonTarget = e.target;
  if (!buttonTarget.matches(".read-status")) {
    return;
  }
  myLibrary[buttonTarget.getAttribute("data-index")].changeRead();
  displayBook(myLibrary);
}

displayBook(myLibrary);
formButton.addEventListener("click", addBookToLibrary);
bookDisplay.addEventListener("click", deleteBook);
bookDisplay.addEventListener("click", changeStatus);
showFormButton.addEventListener("click", formActive);
closeFormBtn.addEventListener("click", formActive);
overlay.addEventListener("click", formActive);
