import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import './style.css';

class MqttOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: undefined,
    };
  }
  render() {
    const { saveContent, savedContent } = this.props;
    return (
      <div className="button_temp" >
        <TextField
          onChange={(x) => {
            this.setState({
              topic: x.target.value,
            });
          }}
          hintText={'mqtt topic'}
        />
        <TextField
          onChange={(x) => {
            this.setState({
              value: x.target.value,
            });
          }}
          hintText={'button value'}
        />
        <div className="button_mqtt_display" >saved content:
          { savedContent ? savedContent.topic : null}
          @ { savedContent ? savedContent.value : null}</div>
        <RaisedButton
          className="button_mqtt_display_button" onClick={() =>
          saveContent(
            {
              topic: this.state.topic,
              value: this.state.value,
            },
          )}
        >
          Set Topic
        </RaisedButton>
      </div>
    );
  }
}

MqttOverlay.propTypes = {
  saveContent: PropTypes.func.isRequired,
  savedContent: PropTypes.any,
};

export const overlay = MqttOverlay;
