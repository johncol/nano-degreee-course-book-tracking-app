import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';
import Welcome from './components/Welcome';
import ShelvesContainer from './components/ShelvesContainer';
import SearchBooks from './components/SearchBooks';

import './App.css';
import sampleData from './api/books.json';

class App extends Component {
  state = {
    shelves: [
      { id: 'wantToRead', name: 'Want to read', path: 'want-to-read' },
      { id: 'currentlyReading', name: 'Currently reading', path: 'currently-reading' },
      { id: 'read', name: 'Read', path: 'read' }
    ],
    booksInShelves: [
      { bookId: 'nggnmAEACAAJ', shelf: 'currentlyReading' },
      { bookId: 'evuwdDLfAyYC', shelf: 'wantToRead' }
    ]
  };

  render() {
    const { shelves } = this.state;
    return (
      <div>
        <MainNavigation />

        <div className="content">
          <Route exact path="/" component={Welcome} />

          <Route
            path="/shelves"
            render={() => <ShelvesContainer books={sampleData.books} shelves={shelves} />}
          />

          <Route path="/search-books" render={() => <SearchBooks books={sampleData.books} />} />
        </div>
      </div>
    );
  }
}

export default App;
