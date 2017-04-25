import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import './overlayStyle.css';

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
        <div className="mqtt_slider_overlay_text" >saved content:                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {savedContent && savedContent.topic}</div>
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

export const overlay = MqttOverlay;

