const library = {
    books: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            available: true
        },
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            available: false
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            available: true
        }
    ]
};

function getAvailableBooks(library) {
    return library.books.filter(book => book.available === true);
}

const availableBooks = getAvailableBooks(library);

console.log(availableBooks);