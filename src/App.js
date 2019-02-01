import React, { Component } from 'react';
import './App.css';

import TreeMutationViewer from './components/TreeMutationViewer';

const STUB_DATA = {"name":"Playground","attributes":{"key":"9","id":46,"global-key":"9","props":"{}","state":"{}"},"children":[{"name":"Counter","attributes":{"key":"11","id":49,"global-key":"9,10,11","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":51,"global-key":"9,10,11,10,8","props":"{}","state":"{}"},"children":[]},{"name":"Text","attributes":{"key":"8","id":52,"global-key":"9,10,11,10,8!1","props":"{}","state":"{}"},"children":[]}]},{"name":"Text","attributes":{"key":"8","id":50,"global-key":"9,10,8","props":"{}","state":"{}"},"children":[]}]};

class App extends Component {

  state = {
    events: []
  }

  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.add = this.add.bind(this)
  }

  add() {
    try {
      const value = this.content.current.value;
      const data = JSON.parse(value);
      this.state.events.push({
        timestamp: Number(new Date()),
        data
      });
      this.setState({
        events: this.state.events
      })
    } catch (e) {
      alert(`not a valid json: ${e}`)
    }
  }

  render() {
    return (
      <div className="app">
        <main className="app-container">
          <TreeMutationViewer events={this.state.events}/>
        </main>
        <footer className="footer">
          <textarea ref={this.content} className="event-form" rows="16" cols="128" defaultValue={JSON.stringify(STUB_DATA, null, 2)}></textarea>
          <button className="button-add" onClick={() => this.add()}>
            Add
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
