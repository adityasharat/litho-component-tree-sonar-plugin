import React, { Component } from 'react';
import './App.css';

import TreeMutationViewer from './components/TreeMutationViewer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-container">
          <TreeMutationViewer/>
        </header>
      </div>
    );
  }
}

export default App;
