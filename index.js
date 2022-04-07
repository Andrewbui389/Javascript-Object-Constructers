let myLibrary = [{
    title:"Harry Potter",
    author:"John Doe",
    pages: 55
}];


const bookContainer = document.querySelector("#booksContainer") 
const addBook = document.querySelector("#addBook")
let modal = document.querySelector(".formModal")




function Book(title,author,pages,read) {
  this.title = title
  this.author = author
  this.pages = pages
}


function addBookToLibrary() {
    let bookTitle = document.querySelector("#name").value;
    let bookAuthor = document.querySelector("#authorName").value;
    let bookPages = document.querySelector("#pageNumber").value;
    let newBook = new Book(bookTitle,bookAuthor,bookPages);
    myLibrary.push(newBook);
    console.table(myLibrary);
    
    let resetAppends = resetContainer()
    let display = displayBooks()



    modal.style.display = "none"
}

function resetContainer(){
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.lastChild);
      }
}

function displayBooks(){
    for (let i = 0; i<myLibrary.length;i++){

        let cardMake = document.createElement("div");
        cardMake.setAttribute("id",`bookCard${i}`)
        cardMake.classList.add('bookCard');

        let titleMake = document.createElement("div");
        titleMake.classList.add("title");

        let authorMake = document.createElement("div");
        authorMake.classList.add("author");

        let pageMake = document.createElement("div");
        pageMake.classList.add("page");


        

        titleMake.append(`Book Title: ${myLibrary[i].title}`);
        authorMake.append(`Book Author: ${myLibrary[i].author}`);
        pageMake.append(`Pages: ${myLibrary[i].pages}`);
        cardMake.innerHTML = (`<button class = 'removeButton' onclick=remove(${i})>Remove Book</button>`)

        cardMake.appendChild(titleMake)
        cardMake.appendChild(authorMake)
        cardMake.appendChild(pageMake)
        
        bookContainer.appendChild(cardMake)
    }
}


function bookModal(){
    modal.style.display = "flex"
}


function remove(indexValue){
    myLibrary.splice(indexValue,1)
    resetContainer()
    displayBooks()
}
