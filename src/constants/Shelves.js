const Shelves = [
  { id: 'wantToRead', name: 'Want to read', path: 'want-to-read' },
  { id: 'currentlyReading', name: 'Currently reading', path: 'currently-reading' },
  { id: 'read', name: 'Read', path: 'read' }
];

const ShelvesLabels = {};
Shelves.forEach(shelf => (ShelvesLabels[shelf.id] = shelf.name));

export const labelFor = shelfId => ShelvesLabels[shelfId];

export default Shelves;
