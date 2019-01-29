import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import './App.css';

const data = [
  {
    name: 'Playground',
    attributes: {
      key: 'A',
    },
    children: [
      {
        name: 'Counter',
        attributes: {
          key: 'B',
          state: JSON.stringify({ count: 0 })
        },
        children: [
          {
            name: 'Text',
            attributes: {
              key: 'C',
              props: JSON.stringify({ text: 'Increment' })
            },
          },
          {
            name: 'Text',
            attributes: {
              key: 'C',
              props: JSON.stringify({ text: '0' })
            },
          }    
        ]
      },
      {
        name: 'Text',
        attributes: {
          key: 'C',
          props: JSON.stringify({ text: 'World' })
        },
      },
    ],
  },
];

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
