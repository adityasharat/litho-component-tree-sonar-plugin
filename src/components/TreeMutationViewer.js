import React, { Component } from 'react';

import TreeViewer from './TreeViewer';
import EventViewer from './EventViewer';

const STUB_EVENTS = [{"name":1},{"name":2},{"name":3},{"name":4},{"name":5},{"name":6},{"name":7},{"name":8},{"name":9},{"name":10}];

const STUB_DATA = {"name":"PlaygroundComponent","attributes":{"key":"9","id":46,"global-key":"9","props":"{}","state":"{}"},"children":[{"name":"Counter","attributes":{"key":"11","id":49,"global-key":"9,10,11","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":51,"global-key":"9,10,11,10,8","props":"{}","state":"{}"},"children":[]},{"name":"Text","attributes":{"key":"8","id":52,"global-key":"9,10,11,10,8!1","props":"{}","state":"{}"},"children":[]}]},{"name":"Text","attributes":{"key":"8","id":50,"global-key":"9,10,8","props":"{}","state":"{}"},"children":[]}]};

function create(data) {
  let shape = {
    shape: 'circle',
    shapeProps: {
      fill: '#ebebeb',
      r: 10,
      strokeWidth: 1,
      stroke: 'rgba(0,0,0,0.2)'
    },
  };
  
  if (data.children instanceof Array && data.children.length > 0) {
    shape.shapeProps.fill = '#727272'
    data.nodeSvgShape = shape;
    data.children = data.children.map(create);
  } else {
    data.nodeSvgShape = shape;
  }

  // TODO: use the diff to color code the nodes

  return data;
}

class TreeMutationViewer extends Component {

  state = {}

  componentDidMount() {
    this.setState({
      data: create(STUB_DATA)
    });
  }

  onSelect(event) {
    console.log('onSelect', event);
  }

  render() {
    return (
      <div>
        <EventViewer events={this.props.events} onSelect={this.onSelect}/>
        <TreeViewer data={this.state.data}/>
      </div>
    );
  }
}

TreeMutationViewer.defaultProps = {
  events: STUB_EVENTS
}

export default TreeMutationViewer;