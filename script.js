let myLibrary = [
  { title: "Foundation", author: "Asimov", pages: "189", read: true },
  { title: "Second Foundation", author: "Asimov", pages: "227", read: false },
];

const bookDisplay = document.querySelector(".book-display");
const form = document.querySelector("form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (read) {
      return `${title} by ${author}, ${pages} pages, read it`;
    } else {
      return `${title} by ${author}, ${pages}, not read it`;
    }
  };
}

function addBookToLibrary() {
  const title = prompt("Book title");
  const author = prompt("Author");
  myLibrary.push({ title, author });
  return myLibrary;
}

function displayBook(library) {
  for (let i = 0; i < library.length; i++) {
    bookDisplay.innerHTML += `<div class="book-card" data-index="${i}">
        <h3 class="title">${library[i].title}</h3>
        <p class="author">${library[i].author}</p>
        <p class="pages">${library[i].pages}</p>
        <p>${library[i].read ? "Read" : "Not Read"} </p>
      </div>`;
  }
}

displayBook(myLibrary);
console.log(form.value);
