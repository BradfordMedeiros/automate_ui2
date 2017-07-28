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
    flexWrap: 'wrap',
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
    };
  }
  render() {
    const { saveContent, savedContent, fieldName } = this.props;
    return (
      <div style={style.body}>
      <div style={style.inner}>
        <div>
          <TextField
            onChange={(x) => {
              this.setState({
                topic: x.target.value,
              });
            }}
            floatingLabelText={"mqtt topic "}
            hintText={fieldName}
          />
          <div style={style.savedContentText} >saved content: {savedContent}</div>
        </div>
        <RaisedButton
          label="Set Topic"
          style={style.button}
          onClick={() => saveContent(this.state.topic)}/>
      </div>
      </div>
    );
  }
}

MqttOverlay.propTypes = {
  fieldName: PropTypes.string,
  saveContent: PropTypes.func.isRequired,
  savedContent: PropTypes.any,
};

export default MqttOverlay;
