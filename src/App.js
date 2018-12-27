import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';
import Welcome from './components/Welcome';
import ShelvesContainer from './components/ShelvesContainer';
import SearchBooks from './components/SearchBooks';

import './App.scss';
import * as BooksAPI from './api/BooksAPI';

const addBookToShelf = (state, newShelfId, bookToUpdate) => {
  bookToUpdate.shelf = newShelfId;
  const newShelfBooksList = [...state.booksInShelves[newShelfId], bookToUpdate];
  const newAllBooks = [...state.booksInShelves.all, bookToUpdate];

  return {
    booksInShelves: {
      ...state.booksInShelves,
      all: newAllBooks,
      [newShelfId]: newShelfBooksList
    }
  };
};

const moveBookFromOneShelfToAnother = (state, oldShelfId, newShelfId, bookToUpdate) => {
  const updatedBook = {
    ...bookToUpdate,
    shelf: newShelfId
  };
  const leavingOutBookToUpdate = bookInShelf => bookInShelf.id !== bookToUpdate.id;
  const oldShelfBooksList = state.booksInShelves[oldShelfId].filter(leavingOutBookToUpdate);
  const newShelfBooksList = [...state.booksInShelves[newShelfId], updatedBook];
  const newAllBooks = [...state.booksInShelves.all.filter(leavingOutBookToUpdate), updatedBook];

  return {
    booksInShelves: {
      ...state.booksInShelves,
      all: newAllBooks,
      [oldShelfId]: oldShelfBooksList,
      [newShelfId]: newShelfBooksList
    }
  };
};

const organizeBooksInShelves = (booksIdsPerShelf, allBooks) => {
  const shelfContainsBook = (booksInShelf, book) => booksInShelf.indexOf(book.id) !== -1;

  const booksInShelves = { all: [] };
  Object.keys(booksIdsPerShelf).forEach(shelf => {
    const thisShelfContainsBook = shelfContainsBook.bind(null, booksIdsPerShelf[shelf]);
    const booksInThisShelf = allBooks.filter(thisShelfContainsBook);
    booksInShelves[shelf] = booksInThisShelf;
    booksInShelves.all.push(...booksInThisShelf);
  });

  return booksInShelves;
};

class App extends Component {
  state = {
    booksInShelves: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      all: []
    }
  };

  setBookShelf = (bookToUpdate, newShelf) => {
    const oldShelfId = bookToUpdate.shelf;
    const newShelfId = newShelf.id;
    if (oldShelfId === newShelfId) return null;

    BooksAPI.update(bookToUpdate, newShelfId).then(() => {
      const bookAlreadyInShelves = !!oldShelfId;
      this.setState(state => {
        return bookAlreadyInShelves
          ? moveBookFromOneShelfToAnother(state, oldShelfId, newShelfId, bookToUpdate)
          : addBookToShelf(state, newShelfId, bookToUpdate);
      });
    });
  };

  updateBooksInShelvesState = apiResponses => {
    const booksIdsPerShelf = apiResponses[0];
    const allBooks = apiResponses[1];
    const booksInShelves = organizeBooksInShelves(booksIdsPerShelf, allBooks);
    this.setState({ booksInShelves });
  };

  componentDidMount() {
    const booksIdsPerShelf = BooksAPI.getBooksGroupedByShelf();
    const allBooks = BooksAPI.getAll();
    Promise.all([booksIdsPerShelf, allBooks]).then(this.updateBooksInShelvesState);
  }

  render() {
    const { booksInShelves } = this.state;
    return (
      <div>
        <MainNavigation />

        <div className="content">
          <Route exact path="/" component={Welcome} />
          <Route
            path="/shelves"
            render={() => <ShelvesContainer booksInShelves={booksInShelves} onSetBookShelf={this.setBookShelf} />}
          />
          <Route
            path="/search-books"
            render={() => <SearchBooks onSetBookShelf={this.setBookShelf} booksInShelves={booksInShelves.all} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
