import React, { Component } from 'react';

class EventViewer extends Component {

  constructor(props) {
    super(props);
    this.onSelect = this.props.onSelect.bind(this);
  }

  render() {
    return (
      <div className="eventviewer-container">
        <h2 className="title">Events</h2>
        <div className="events-container">
          <ol className="events-list">
            {
              this.props.events.map(event => {
                return (
                  <li className="event-item" key={event.name} onClick={() => {this.onSelect(event)}}>
                    {event.name}
                  </li>
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
  events: [],
  onSelect: () => {}
};

export default EventViewer;