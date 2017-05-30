import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';

const styles = {
  button_button_overlay_temp: {
    paddingTop: '-20%',
  },
  button_mqtt_display: {
    fontSize: '120%',
    fontFamily: 'Arial',
    position: 'fixed',
    color: 'rgb(170,170,170)',
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
    const { saveContent, savedContent } = this.props;
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgb(40,40,40)',
        }}
      >
        <div style={{ marginTop: '-20%' }}>
          <div style={styles.button_button_overlay_temp} >
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
            <div style={styles.button_mqtt_display}>
          saved content:
          { savedContent ? savedContent.topic : null}
          @ { savedContent ? savedContent.value : null}
            </div>
            <RaisedButton
              style={{ marginLeft: 10 }}
              labelColor="rgb(170,170,170)"
              onClick={() =>
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
        </div>
      </div>
    );
  }
}

MqttOverlay.propTypes = {
  saveContent: PropTypes.func.isRequired,
  savedContent: PropTypes.any,
};

export const overlay = MqttOverlay;
