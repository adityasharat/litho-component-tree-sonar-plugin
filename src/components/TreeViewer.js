import React, { Component } from 'react';
import Tree from 'react-d3-tree';

const data = {"name":"PlaygroundComponent","attributes":{"key":"9","id":108,"global-key":"9"},"children":[{"name":"Counter","attributes":{"key":"11","id":111,"global-key":"9,10,11"},"children":[{"name":"Text","attributes":{"key":"8","id":113,"global-key":"9,10,11,10,8"},"children":[]},{"name":"Text","attributes":{"key":"8","id":114,"global-key":"9,10,11,10,8!1"},"children":[]}]},{"name":"Text","attributes":{"key":"8","id":112,"global-key":"9,10,8"},"children":[]}]};

class TreeViewer extends Component {

  state = {
    scaleExtent: {
        min: 1,
        max: 3
      },
      separation: {
        siblings: 2,
        nonSiblings: 4
      },
      translate: {
        x: 800,
        y: 50
      },
      transitionDuration: 0,
      orientation: "vertical",
      zoomable: "true",
      zoom: "2"
  };

  render() {
    return (
      <div id="treeWrapper" style={{width: '1920px', height: '1440px'}}>
        <Tree data={data} 
              transitionDuration={this.state.transitionDuration}
              orientation={this.state.orientation}
              zoomable={this.state.zoomable}
              zoom={this.state.zoom}
              scaleExtent={this.state.scaleExtent}
              separation={this.state.separation}
              translate={this.state.translate} />
      </div>
    );
  }
}

export default TreeViewer; 