import React, { Component, PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';

const style = {
  body: {
    width: '100%',
    height: '100%',
    background: 'rgb(40,40,40)'
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20%',
    paddingTop: '2%',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  savedContentText: {
    color: 'whitesmoke',
  },
  button: {
    margin: 18,
  }
};

class MqttOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: undefined,
      minValue: undefined,
      maxValue:  undefined,
    };
  }
  render() {
    const { saveContent, savedContent } = this.props;
    return (
      <div style={style.body}>
        <div style={style.inner}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              onChange={(x) => {
                this.setState({
                  topic: x.target.value,
                });
              }}
              floatingLabelText={"mqtt topic"}
              hintText={"mqtt topic"}
            />
            <TextField
              onChange={(x) => {
                this.setState({
                  minValue: x.target.value,
                });
              }}
              floatingLabelText={"min value"}
              hintText={"min value"}
            />
            <TextField
              onChange={(x) => {
                this.setState({
                  maxValue: x.target.value,
                });
              }}
              floatingLabelText={"max value"}
              hintText={"max value"}
            />
          </div>
          <RaisedButton
            label="Set Topic"
            style={style.button}
            onClick={() => saveContent(
              {
                topic: this.state.topic,
                min: this.state.minValue,
                max: this.state.maxValue,
              },
            )}/>
        </div>
      </div>
    );
  }
}

MqttOverlay.propTypes = {
  saveContent: PropTypes.func.isRequired,
  savedContent: PropTypes.any,
};

export default MqttOverlay;
