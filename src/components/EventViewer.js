import React, { Component } from 'react';

const STUB_DATA = [{"name":1},{"name":2},{"name":3},{"name":4},{"name":5},{"name":6},{"name":7},{"name":8},{"name":9},{"name":10}];

class EventViewer extends Component {
  render() {
    return (
      <div className="eventviewer-container">
        <h2 className="title">Events</h2>
        <div className="events-container">
          <ol className="events-list">
            {
              this.props.events.map(event => {
                return (
                  <li className="event-item" key={event.name}>{event.name}</li>
                )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

EventViewer.defaultProps = {
  events: STUB_DATA
};

export default EventViewer;