import React from 'react';

function NodeAttribute(props) {
  return (
    <li className="node-attribute-row">
      <p className="node-attribute-key">{props.name}: </p>
      <p className="node-attribute-value">{props.value}</p>
    </li>
  );
}

function NodeLabel(props) {
  const node = props.nodeData;
  return (
    <div className="node-container">
      <h4 className="node-name" title={node.name}>{node.name}</h4>
      <ul className="node-attributes">
        {
          Object.keys(node.attributes)
            .map(key => <NodeAttribute name={key} value={node.attributes[key]}/>)
        }
      </ul>
    </div>
  );
}

export default NodeLabel;