import React, { Component } from 'react';

const STUB_EVENTS = [{
  "timestamp":1549129568544,
  "data":{"name":"PlaygroundComponent","attributes":{"key":"9","id":810,"global-key":"9","props":"{}","state":"{}"},"children":[{"name":"Counter","attributes":{"key":"11","id":813,"global-key":"9,10,11","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":816,"global-key":"9,10,11,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":0}},{"name":"Text","attributes":{"key":"8","id":817,"global-key":"9,10,11,10,8!1","props":"{}","state":"{}"},"children":[],"diff":{"state":0}}],"diff":{"state":0}},{"name":"Text","attributes":{"key":"8","id":814,"global-key":"9,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":0}},{"name":"Counter","attributes":{"key":"11","id":815,"global-key":"9,10,11!1","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":822,"global-key":"9,10,11!1,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":0}},{"name":"Text","attributes":{"key":"8","id":823,"global-key":"9,10,11!1,10,8!1","props":"{}","state":"{}"},"children":[],"diff":{"state":0}}],"diff":{"state":0}}],"diff":{"state":0}}
}, {
  "timestamp":1549130568544,
  "data":{"name":"PlaygroundComponent","attributes":{"key":"9","id":838,"global-key":"9","props":"{}","state":"{}"},"children":[{"name":"Counter","attributes":{"key":"11","id":813,"global-key":"9,10,11","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":838,"global-key":"9,10,11,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":0}},{"name":"Text","attributes":{"key":"8","id":839,"global-key":"9,10,11,10,8!1","props":"{}","state":"{}"},"children":[],"diff":{"state":0}}],"diff":{"state":-1}},{"name":"Text","attributes":{"key":"8","id":814,"global-key":"9,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":1}},{"name":"Counter","attributes":{"key":"11","id":815,"global-key":"9,10,11!1","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":822,"global-key":"9,10,11!1,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":1}},{"name":"Text","attributes":{"key":"8","id":823,"global-key":"9,10,11!1,10,8!1","props":"{}","state":"{}"},"children":[],"diff":{"state":1}}],"diff":{"state":1}}],"diff":{"state":1}}
}];

const STUB_DATA = {"name":"PlaygroundComponent","attributes":{"key":"9","id":854,"global-key":"9","props":"{}","state":"{}"},"children":[{"name":"Counter","attributes":{"key":"11","id":813,"global-key":"9,10,11","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":838,"global-key":"9,10,11,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":1}},{"name":"Text","attributes":{"key":"8","id":839,"global-key":"9,10,11,10,8!1","props":"{}","state":"{}"},"children":[],"diff":{"state":1}}],"diff":{"state":1}},{"name":"Text","attributes":{"key":"8","id":814,"global-key":"9,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":1}},{"name":"Counter","attributes":{"key":"11","id":815,"global-key":"9,10,11!1","props":"{}","state":"{}"},"children":[{"name":"Text","attributes":{"key":"8","id":854,"global-key":"9,10,11!1,10,8","props":"{}","state":"{}"},"children":[],"diff":{"state":0}},{"name":"Text","attributes":{"key":"8","id":855,"global-key":"9,10,11!1,10,8!1","props":"{}","state":"{}"},"children":[],"diff":{"state":0}}],"diff":{"state":-1}}],"diff":{"state":1}}

class EventViewer extends Component {

  state = {
    events: STUB_EVENTS
  }

  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.onSelect = this.props.onSelect.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    this.setState({
      events: STUB_EVENTS
    })
  }

  add() {
    try {
      const value = this.content.current.value;
      const data = JSON.parse(value);
      this.state.events.push({
        timestamp: Number(new Date()),
        data
      });
      this.setState({
        events: this.state.events
      })
      this.content.current.value = '';
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
              this.state.events.map(event => {
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
  onSelect: () => {}
};

export default EventViewer;