import React, { Component } from 'react';
import { Subheader } from 'material-ui';
import './style.css';

class DisconnectedOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numDots: 1,
    };
    this.countHandle = undefined;
  }
  componentWillMount() {
    this.countHandle = setInterval(() => this.setState({ numDots: (this.state.numDots +1) %5 }),1000);
  }
  componentWilLUnmount() {
    clearInterval(this.countHandle);
  }
  render() {
    return (
      <div className="disconnected_overlay">
        <Subheader style={{ fontSize: '150%' }}>Automate is disconnected</Subheader>
        <Subheader style={{ fontSize: '100%' }}>
          <div>Attempting to reconnect {Array.apply(null, Array(this.state.numDots)).map(x => '.')}</div>
        </Subheader>
      </div>
    );
  }
}

export default DisconnectedOverlay;