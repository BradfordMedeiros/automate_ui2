import React, { Component, PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';

const style = {
  temp: {
    background: 'rgb(40, 40, 40)',
    height: '100%',
    padding: '20%',
  },
  mqttDisplay: {
    fontSize: '120%',
    position: 'fixed',
    color: 'rgb(170,170,170)',
    fontFamily: 'Arial',
  },
};

class MqttOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: undefined,
    };
  }
  render() {
    const { saveContent, savedContent, fieldName } = this.props;
    return (
      <div style={style.temp}>
        <TextField
          onChange={(x) => {
            this.setState({
              topic: x.target.value,
            });
          }}
          hintText={fieldName}
        />
        <div style={style.mqttDisplay} >
          saved content: {savedContent}</div>
        <RaisedButton onClick={() => saveContent(this.state.topic)}>Set Topic</RaisedButton>
      </div>
    );
  }
}

MqttOverlay.propTypes = {
  fieldName: PropTypes.string,
  saveContent: PropTypes.func.isRequired,
  savedContent: PropTypes.any,
};

export default MqttOverlay;
