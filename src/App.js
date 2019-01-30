import React, { Component } from 'react';
import './App.css';

import TreeViewer from './components/TreeViewer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-container">
          <TreeViewer/>
        </header>
      </div>
    );
  }
}

export default App;
