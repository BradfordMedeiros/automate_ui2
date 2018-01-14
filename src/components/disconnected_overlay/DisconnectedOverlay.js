import React, { Component, PropTypes } from 'react';
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
    this.countHandle = setInterval(() => {
      this.setState({ numDots: (this.state.numDots + 1) % 5 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.countHandle);
  }
  render() {
    const { headerStyle, textStyle } = this.props;
    return (
      <div className="disconnected_overlay">
        <div id="disconnected_overlay_header" style={headerStyle}>Automate is disconnected</div>
        <div id="disconnected_overlay_subtitle" style={textStyle}>
          Attempting to reconnect {Array(...Array(this.state.numDots)).map(() => '.')}
        </div>
      </div>
    );
  }
}

DisconnectedOverlay.propTypes = {
  headerStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

DisconnectedOverlay.defaultProps = {
  headerStyle: { fontSize: '150%' },
  textStyle: { fontSize: '100%' },
};

export default DisconnectedOverlay;

