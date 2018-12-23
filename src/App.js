import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';
import Welcome from './components/Welcome';
import ShelvesContainer from './components/ShelvesContainer';
import SearchBooks from './components/SearchBooks';

import './App.scss';
import * as BooksAPI from './api/BooksAPI';

class App extends Component {
  state = {
    shelves: [
      { id: 'wantToRead', name: 'Want to read', path: 'want-to-read' },
      { id: 'currentlyReading', name: 'Currently reading', path: 'currently-reading' },
      { id: 'read', name: 'Read', path: 'read' }
    ],
    booksInShelves: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      all: []
    }
  };

  addBooksToCorrespondingShelf = (booksIdsPerShelf, allBooks) => {
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

  updateBooksInShelvesState = apiResponses => {
    const booksIdsPerShelf = apiResponses[0];
    const allBooks = apiResponses[1];
    const booksInShelves = this.addBooksToCorrespondingShelf(booksIdsPerShelf, allBooks);
    this.setState({ booksInShelves });
  };

  componentDidMount() {
    const booksIdsPerShelf = BooksAPI.getBooksGroupedByShelf();
    const allBooks = BooksAPI.getAll();
    Promise.all([booksIdsPerShelf, allBooks]).then(this.updateBooksInShelvesState);
  }

  render() {
    const { shelves, booksInShelves } = this.state;
    return (
      <div>
        <MainNavigation />

        <div className="content">
          <Route exact path="/" component={Welcome} />
          <Route
            path="/shelves"
            render={() => <ShelvesContainer booksInShelves={booksInShelves} shelves={shelves} />}
          />
          <Route path="/search-books" render={() => <SearchBooks />} />
        </div>
      </div>
    );
  }
}

export default App;
