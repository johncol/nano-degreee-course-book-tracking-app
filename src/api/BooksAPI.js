const api = 'https://reactnd-books-api.udacity.com';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = 'NM5ET7On92BSZFjhj3ka';

const headers = {
  Accept: 'application/json',
  Authorization: token
};

export const get = bookId =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json());

export const search = query =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(data => (data.books.error ? [] : data.books));

export const getBooksGroupedByShelf = () =>
  fetch(`${api}/books/non-existing-book-id`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf: 'none' })
  }).then(res => res.json());
