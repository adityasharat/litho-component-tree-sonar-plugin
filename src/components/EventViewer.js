import React, { Component } from 'react';

class EventViewer extends Component {

  constructor(props) {
    super(props);
    this.onSelect = this.props.onSelect.bind(this);
    this.add = this.add.bind(this);
  }

  add() {
    console.log("add event");
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
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </li>
                )
              })
            }
            <li className="event-item add-item" onClick={() => {this.add()}}></li>
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