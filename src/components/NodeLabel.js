import React from 'react';

function NodeLabel(props) {
  const node = props.nodeData;
  return (
    <div className="">
      <h4 className="node-name" title={node.name}>{node.name}</h4>
      
    </div>
  );
}

export default NodeLabel;