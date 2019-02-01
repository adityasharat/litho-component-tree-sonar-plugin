import React, { Component } from 'react';

class EventViewer extends Component {

  constructor(props) {
    super(props);
    this.onSelect = this.props.onSelect.bind(this);
  }

  render() {
    return (
      <div className="eventviewer-container">
        <h2 className="title">{this.props.title}</h2>
        <div className="events-container">
          <ol className="events-list">
            {
              this.props.events.map(event => {
                return (
                  <li className="event-item" key={event.timestamp} onClick={() => {this.onSelect(event)}}>
                    {event.data.name}
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
  title: 'Events',
  events: [],
  onSelect: () => {}
};

export default EventViewer;