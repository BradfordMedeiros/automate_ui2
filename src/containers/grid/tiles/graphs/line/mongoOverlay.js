import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';

class MongoOverlay extends Component {
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

MongoOverlay.propTypes = {
  saveContent: PropTypes.func.isRequired,
  savedContent: PropTypes.any,
};

export const overlay = MongoOverlay;

