import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { List } from 'immutable';
import './style.css';
import WithMqtt from '../../../../../data/WithMqtt';

class MqttTile extends Component {
  render() {
    const { savedContent } = this.props;
    const content = (savedContent && savedContent.topic) ? List([savedContent.topic]) : List();
    return (
      <WithMqtt topics={content} >
        {
        (stuff, publish) => (
          <div onClick={() => publish(savedContent.topic, savedContent.value)} className="mqtt_button" />
            )
      }
      </WithMqtt>
    );
  }
}

MqttTile.propTypes = {
  temperature: PropTypes.number,
};

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
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
    console.log('in overlay ', saveContent);
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


export const tile = MqttTile;
export const overlay = MqttOverlay;
