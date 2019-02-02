import React, { Component } from 'react';

import TreeViewer from './TreeViewer';
import EventViewer from './EventViewer';

const COLOR_NODE = '#727272'
const COLOR_LEAF_NODE = '#ebebeb'
const COLOR_REUSED_NODE = '#aaff99'
const COLOR_NEW_NODE = '#ff5533'

function create(data, diff) {
  let shape = {
    shape: 'circle',
    shapeProps: {
      fill: COLOR_LEAF_NODE,
      r: 10,
      strokeWidth: 1,
      stroke: 'rgba(0,0,0,0.2)'
    },
  };

  let propagate = false;
  let color;
  switch(true) {
    case diff && diff.state === 1:
      color = COLOR_REUSED_NODE
      break
    case diff && diff.state === -1:
      color = COLOR_NEW_NODE
      propagate = true
      break
    case data.children instanceof Array && data.children.length > 0:
      color = COLOR_NODE
      break
    default:
      color = COLOR_LEAF_NODE
      break
  }

  shape.shapeProps.fill = color;
  data.nodeSvgShape = shape;

  if (data.children instanceof Array && data.children.length > 0) {
    data.children = data.children.map(node => create(node, propagate ? diff: node.diff));
  }

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
    if (this.props.events && this.props.events.length > 0) {
      const event = this.props.events[0];
      if (!event.isInitialized) {
        event.data = create(event.data, event.data.diff)
        event.isInitialized = true;
      }
      this.setState({
        current: event
      });
    }
  }

  onSelect(event) {
    if (!event.isInitialized) {
      event.data = create(event.data, event.data.diff)
    }
    this.setState({
      current: event
    });
  }

  render() {
    return (
      <div>
        <EventViewer title="Trees" events={this.props.events} onSelect={this.onSelect}/>
        <TreeViewer data={this.state.current.data}/>
      </div>
    );
  }
}

TreeMutationViewer.defaultProps = {
  events: []
}

export default TreeMutationViewer;