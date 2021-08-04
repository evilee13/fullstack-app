
export function getBooks() {
    return fetch('api/books')
        .then((response) => response.json())
}

export function setBook(book) {
    return fetch('api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ book })
    })
        .then(response => response.json())
}

// export function updateBook(bookId) {
//     return fetch('api/books/{bookId}', {
//         method:'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ bookId })
//
//     })
//
// }
//
// export function deleteBook(bookId) {
//     return fetch('api/books/{bookId}',{
//         method:"DELETE",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ bookId })
//     })
//
// }

