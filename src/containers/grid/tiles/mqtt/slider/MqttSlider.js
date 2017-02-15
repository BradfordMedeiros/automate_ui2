import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import { List } from 'immutable';
import { TextField, RaisedButton } from 'material-ui';

import { DeviceBrightnessHigh, DeviceBrightnessLow } from 'material-ui/svg-icons';
import './style.css';
import WithMqtt from '../../../../../mqtt/WithMqtt';

const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};


class LightDimmerTile extends Component {
  render() {
    const { savedContent } = this.props;

    console.log('saved content is------------------ ', savedContent);
    return (
      <div className="slidertile">
        <div className="high">&#128262;</div>

        <WithMqtt topics={List()}>
          {
            (stuff, publish) => {
              return  (
                <Slider
                  onChange={(x, value) => {
                    publish(savedContent, `${value * 100}`)
                  }}
                  style={{height: '100%', left: '50%'}}
                  axis="y"
                  defaultValue={0.5}
                />
              );
            }
          }
        </WithMqtt>
        <div className="low">&#128261;</div>
      </div>
    );
  }
}


class MqttOverlay extends Component {
  constructor(props){
    super(props);
    this.state = {
      topic: undefined,
    };
  }
  render() {
    const { temperature, saveContent, savedContent } = this.props;
    console.log('in overlay ', saveContent);
    return (
      <div className="mqtt_slider_overlay" >
        <TextField
          onChange={(x) => {
            this.setState({
              topic: x.target.value,
            })
          }}
          errorText={"mqtt topic cannot be null"}
          hintText={"mqtt topic"}
        />
        <div style={{color: 'red' }}>saved content:  {savedContent}</div>
        <RaisedButton onClick={() => saveContent(this.state.topic)}>Set Topic</RaisedButton>
      </div>
    );
  }
}


export const tile =  LightDimmerTile;
export const overlay = MqttOverlay;