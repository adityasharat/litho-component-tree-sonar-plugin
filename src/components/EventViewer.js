import React, { Component } from 'react';

const STUB_DATA = {"name":"Playground","attributes":{"key":"9","id":46,"global-key":"9","props":"{}","state":"{}"},"children":[{"name":"Counter","attributes":{"key":"11","id":49,"global-key":"9,10,11","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":51,"global-key":"9,10,11,10,8","props":"{}","state":"{}"},"children":[]},{"name":"Text","attributes":{"key":"8","id":52,"global-key":"9,10,11,10,8!1","props":"{}","state":"{}"},"children":[]}]},{"name":"Text","attributes":{"key":"8","id":50,"global-key":"9,10,8","props":"{}","state":"{}"},"children":[]}]};

class EventViewer extends Component {

  state = {
    events: []
  }

  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.onSelect = this.props.onSelect.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    this.setState({
      events: this.props.events
    })
  }

  add() {
    try {
      const value = this.content.current.value;
      const data = JSON.parse(value);
      this.props.events.push({
        timestamp: Number(new Date()),
        data
      });
      this.setState({
        events: this.state.events
      })
    } catch (e) {
      console.error(e);
      alert(`not a valid json: ${e}`)
    }
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
            <li className="event-item add-item" onClick={() => {this.add()}}>
              Add
            </li>
          </ol>
          <textarea ref={this.content} className="event-form" rows="6" cols="64" defaultValue={JSON.stringify(STUB_DATA, null, 2)}></textarea>
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