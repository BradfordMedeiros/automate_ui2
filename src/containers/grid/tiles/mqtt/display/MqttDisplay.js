import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { List } from 'immutable';
import './style.css';
import WithMqtt from '../../../../../data/WithMqtt';

class MqttTile extends Component {
  render() {
    const { savedContent } = this.props;
    const content = savedContent ? List([savedContent]) : List();
    return (
      <div className="tiles_thermometer">
        <WithMqtt topics={content} >
          {
              (stuff) => {
                const value = stuff[savedContent];
                return <div className="number" style={{ color: 'blue' }}>{JSON.stringify(value)}</div>;
              }
            }
        </WithMqtt>

      </div>
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
      <div className="temp" >
        <TextField
          onChange={(x) => {
            this.setState({
              topic: x.target.value,
            });
          }}
          hintText={'mqtt topic'}
        />
        <div className="mqtt_display" >saved content:                                {savedContent}</div>
        <RaisedButton className="mqtt_display_button" onClick={() => saveContent(this.state.topic)}>Set Topic</RaisedButton>
      </div>
    );
  }
}


export const tile = MqttTile;
export const overlay = MqttOverlay;
