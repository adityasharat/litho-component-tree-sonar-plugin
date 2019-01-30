import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import './App.css';

const data = {"name":"PlaygroundComponent","attributes":{"key":"9","id":108,"global-key":"9"},"children":[{"name":"Counter","attributes":{"key":"11","id":111,"global-key":"9,10,11"},"children":[{"name":"Text","attributes":{"key":"8","id":113,"global-key":"9,10,11,10,8"},"children":[]},{"name":"Text","attributes":{"key":"8","id":114,"global-key":"9,10,11,10,8!1"},"children":[]}]},{"name":"Text","attributes":{"key":"8","id":112,"global-key":"9,10,8"},"children":[]}]};

class App extends Component {
  render() {
    const scaleExtent = {min: 1, max: 3};
    const separation = {siblings: 2, nonSiblings: 4};
    const translate = {x: 800, y: 50};
    return (
      <div className="app">
        <header className="app-container">
          <div id="treeWrapper" style={{width: '1920px', height: '1440px'}}>
            <Tree data={data} 
                  orientation="vertical"
                  zoomable="true"
                  zoom="2"
                  scaleExtent={scaleExtent}
                  separation={separation}
                  translate={translate}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
