import React, { Component } from 'react';

import Navigation from './components/Navigation';
import ShelvesList from './components/ShelvesList';

import './App.css';

class App extends Component {
  state = {
    shelves: [
      { id: 'wantToRead', name: 'Want to read' },
      { id: 'currentlyReading', name: 'Currently reading' },
      { id: 'read', name: 'Read' }
    ],
    booksInShelves: [
      { bookId: 'nggnmAEACAAJ', shelf: 'currentlyReading' },
      { bookId: 'evuwdDLfAyYC', shelf: 'wantToRead' }
    ]
  };

  render() {
    const { shelves } = this.state;
    return (
      <React.Fragment>
        <Navigation />
        <ShelvesList shelves={shelves} />
      </React.Fragment>
    );
  }
}

export default App;
