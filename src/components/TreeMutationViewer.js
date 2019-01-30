import React, { Component } from 'react';

import TreeViewer from './TreeViewer';
import EventViewer from './EventViewer';

class TreeMutationViewer extends Component {
  render() {
    return (
      <div>
        <EventViewer/>
        <TreeViewer/>
      </div>
    );
  }
}

export default TreeMutationViewer;