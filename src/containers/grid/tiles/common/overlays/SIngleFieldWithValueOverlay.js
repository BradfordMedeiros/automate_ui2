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
    paddingTop: '12%',
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
      value: undefined,
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
                  value: x.target.value,
                });
              }}
              floatingLabelText={"mqtt value"}
              hintText={"mqtt value"}
            />
            <div style={style.savedContentText} >topic: {savedContent.topic} | value: {savedContent.value}</div>

          </div>
          <RaisedButton
            label="Set Topic"
            style={style.button}
            onClick={() => saveContent(
              {
                topic: this.state.topic,
                value: this.state.value,
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
