import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { List } from 'immutable';
import './style.css';
import WithMqtt from '../../../../../data/pubsub/WithMqtt';

class MqttTile extends Component {
  render() {
    const { savedContent } = this.props;
    const content = savedContent ? List([savedContent]) : List();
    return (
      <div className="tiles_thermometer">
        <WithMqtt topics={content} >
          {
              (stuff) => {
                console.log('with mqtt display');
                const value = stuff[savedContent];
                return (
                  <div>
                    <div className="title">{savedContent}</div>
                    <div className="number" style={{ color: 'grey' }}>
                      {JSON.stringify(value)}
                    </div>
                  </div>
                );
              }
            }
        </WithMqtt>
      </div>
    );
  }
}

MqttTile.propTypes = {
  savedContent: PropTypes.any,
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
      <div className="temp" >
        <TextField
          onChange={(x) => {
            this.setState({
              topic: x.target.value,
            });
          }}
          hintText={'mqtt topic'}
        />
        <div className="mqtt_display" >
          saved content: {savedContent}</div>
        <RaisedButton className="mqtt_display_button" onClick={() => saveContent(this.state.topic)}>Set Topic</RaisedButton>
      </div>
    );
  }
}

MqttOverlay.propTypes = {
  saveContent: PropTypes.func.isRequired,
  savedContent: PropTypes.any,
};


export const tile = MqttTile;
export const overlay = MqttOverlay;
