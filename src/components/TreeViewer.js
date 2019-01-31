import React,  { Component } from 'react';
import Tree from 'react-d3-tree';

import NodeLabel from './NodeLabel';

const data = {"name":"PlaygroundComponent","attributes":{"key":"9","id":46,"global-key":"9","props":"{}","state":"{}"},"children":[{"name":"Counter","attributes":{"key":"11","id":49,"global-key":"9,10,11","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":51,"global-key":"9,10,11,10,8","props":"{}","state":"{}"},"children":[]},{"name":"Text","attributes":{"key":"8","id":52,"global-key":"9,10,11,10,8!1","props":"{}","state":"{}"},"children":[]}]},{"name":"Text","attributes":{"key":"8","id":50,"global-key":"9,10,8","props":"{}","state":"{}"},"children":[]}]};

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

class TreeViewer extends Component {

  state = {
    data: create(data),
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
        data: create(props.data)
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
  nodeLabelComponent: {
    render: <NodeLabel />,
  }
};

export default TreeViewer; 