import React, { Component } from 'react';
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
        <div className="mqtt_display" >saved content:                                                                                                                                                                                                                                                                                                                                                                                                                                                          {savedContent}</div>
        <RaisedButton className="mqtt_display_button" onClick={() => saveContent(this.state.topic)}>Set Topic</RaisedButton>
      </div>
    );
  }
}


export const overlay = MongoOverlay;

