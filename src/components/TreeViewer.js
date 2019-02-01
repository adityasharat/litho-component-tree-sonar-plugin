import React,  { Component } from 'react';
import Tree from 'react-d3-tree';

import NodeLabel from './NodeLabel';

const DEFAULT_NODE = { 
  name : 'null',
  attributes: {}
}

class TreeViewer extends Component {

  state = {
    data: DEFAULT_NODE,
    config: {
      scaleExtent: {
        min: 1,
        max: 3
      },
      separation: {
        siblings: 1.5,
        nonSiblings: 2
      },
      translate: {
        x: 800,
        y: 50
      },
      transitionDuration: 0,
      orientation: "vertical",
      zoomable: true,
      zoom: 2,
      nodeSize: { x: 100, y: 100 }
    }
  };

  constructor(props) {
    super(props);
    this.treeContainer = React.createRef();
  }

  componentDidMount() {
    if (this.treeContainer) {
      const dimensions = this.treeContainer.current.getBoundingClientRect();
      this.setState({
        data: this.props.data || DEFAULT_NODE,
        config: {
          ...this.state.config,
          translate: {
            x: dimensions.width / 2,
            y: 80,
          }
        },
      });
    }
  }

  componentWillReceiveProps(props) {
    if (this.props.data === props.data) {
      return;
    } else {
      this.setState({
        data: props.data || DEFAULT_NODE
      });
    }
  }

  render() {
    return (
      <div id="treeWrapper" style={{width: '100%', height: '1440px'}} ref={this.treeContainer}>
        <Tree data={this.state.data} 
              transitionDuration={this.state.config.transitionDuration}
              orientation={this.state.config.orientation}
              zoomable={this.state.config.zoomable}
              zoom={this.state.config.zoom}
              scaleExtent={this.state.config.scaleExtent}
              separation={this.state.config.separation}
              translate={this.state.config.translate} 
              nodeSize={this.state.config.nodeSize}
              nodeLabelComponent={this.props.nodeLabelComponent}
              allowForeignObjects
          />
      </div>
    );
  }
}

TreeViewer.defaultProps = {
  data: DEFAULT_NODE,
  nodeLabelComponent: {
    render: <NodeLabel />,
  }
};

export default TreeViewer; 