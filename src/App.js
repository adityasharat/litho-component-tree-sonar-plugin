import React, { Component } from 'react';
import './App.css';

import TreeMutationViewer from './components/TreeMutationViewer';

class App extends Component {

  render() {
    return (
      <div className="app">
        <main className="app-container">
          <TreeMutationViewer />
        </main>
      </div>
    );
  }
}

export default App;
