import React, { Component } from 'react';

import TreeViewer, { NULL_NODE } from './TreeViewer';
import EventViewer from './EventViewer';

const STUB_DATA = {"name":"Playground","attributes":{"key":"9","id":46,"global-key":"9","props":"{}","state":"{}"},"children":[{"name":"Counter","attributes":{"key":"11","id":49,"global-key":"9,10,11","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":51,"global-key":"9,10,11,10,8","props":"{}","state":"{}"},"children":[]},{"name":"Text","attributes":{"key":"8","id":52,"global-key":"9,10,11,10,8!1","props":"{}","state":"{}"},"children":[]}]},{"name":"Text","attributes":{"key":"8","id":50,"global-key":"9,10,8","props":"{}","state":"{}"},"children":[]}]};
const STUB_EVENTS = [{
  timestamp: 1,
  data: STUB_DATA
}, {
  timestamp: 2,
  data: NULL_NODE
}, {
  timestamp: 3,
  data: NULL_NODE
}, {
  timestamp: 4,
  data: NULL_NODE
}, {
  timestamp: 5,
  data: NULL_NODE
}, {
  timestamp: 6,
  data: NULL_NODE
}];

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

  state = {
    current: {}
  }

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.setState({
      current: {}
    });
  }

  onSelect(event) {
    if (!event.isInitialized) {
      event.data = create(event.data)
    }
    this.setState({
      current: event
    });
  }

  render() {
    return (
      <div>
        <EventViewer events={this.props.events} onSelect={this.onSelect}/>
        <TreeViewer data={this.state.current.data}/>
      </div>
    );
  }
}

TreeMutationViewer.defaultProps = {
  events: STUB_EVENTS
}

export default TreeMutationViewer;