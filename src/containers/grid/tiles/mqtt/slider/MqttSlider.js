import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import { List } from 'immutable';
import { TextField, RaisedButton } from 'material-ui';

import { DeviceBrightnessHigh, DeviceBrightnessLow } from 'material-ui/svg-icons';
import './style.css';
import WithMqtt from '../../../../../data/WithMqtt';

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
    const { topic, min, max } = savedContent || { };


    return (
      <div className="slidertile">
        <div className="high">&#128262;</div>

        <WithMqtt topics={List()}>
          {
            (stuff, publish) => {
              const conversion = value => ((max - min) * Number(value)) + min;
              return (
                <Slider
                  onChange={(x, value) => {
                    publish(topic, `${conversion(value)}`);
                  }}
                  style={{ height: '100%', left: '50%' }}
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
  constructor(props) {
    super(props);
    this.state = {
      topic: undefined,
      minValue: 0,
      maxValue: 100,
    };
  }
  handleSetMinValue = (x) => {
    this.setState({
      minValue: Number(x.target.value),
    });
  }
  handleSetMaxValue = (x) => {
    this.setState({
      maxValue: Number(x.target.value),
    });
  }
  handleSetTopic = (x) => {
    this.setState({
      topic: x.target.value,
    });
  }
  render() {
    const { temperature, saveContent, savedContent } = this.props;
    console.log('in overlay ', saveContent);
    return (
      <div className="mqtt_slider_overlay" >
        <TextField
          onChange={this.handleSetTopic}
          errorText={'mqtt topic cannot be null'}
          hintText={'mqtt topic'}
        />
        <TextField
          onChange={this.handleSetMinValue}
          errorText={'mqtt topic cannot be null'}
          hintText={'min value'}
          defaultValue={this.state.minValue}
        />
        <TextField
          onChange={this.handleSetMaxValue}
          errorText={'mqtt topic cannot be null'}
          hintText={'max value'}
          defaultValue={this.state.maxValue}
        />
        <div className="mqtt_slider_overlay_text" >saved content:                                          {savedContent && savedContent.topic}</div>
        <RaisedButton
          onClick={() =>
          saveContent({
            topic: this.state.topic,
            min: this.state.minValue,
            max: this.state.maxValue,
          })}
        >
          Set Topic
        </RaisedButton>
      </div>
    );
  }
}


export const tile = LightDimmerTile;
export const overlay = MqttOverlay;
