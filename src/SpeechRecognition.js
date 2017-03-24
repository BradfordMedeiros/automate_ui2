
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { IconButton } from 'material-ui';
import { AvMic,  AvMicNone } from 'material-ui/svg-icons';

const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const ACTIONS_URL = AUTOMATE_CORE_URL + '/actions/special/speech_recognition';

const style = { zIndex: 2000, position: 'fixed', top: 0, right: 250, boxShadow: '0px 0px 3px 0.1px black inset' };

class SpeechRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      micIsActive: false,
    };
  }
  handleMicClick = () => {
    if (!this.state.micIsActive) {
      // start recording
      const recognition = new webkitSpeechRecognition();
      recognition.onstart = () => {
        this.setState({
          micIsActive: true,
        });
      };
      recognition.onend = () => {
        this.setState({
          micIsActive: false,
        });
      };
      recognition.onresult = event => {
        const phrase = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        console.log('phrase is ', phrase);

        const response = fetch(ACTIONS_URL, {
          mode: "cors",
          method: "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            speech: phrase,
          }),
        });
      };
      recognition.start();
    }
  };
  render() {
    return (
      <div className="speech"  style={style} >
        <IconButton onClick={this.handleMicClick}>{this.state.micIsActive ? <AvMicNone/>: <AvMic/>}</IconButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  doAction: action => dispatch(doAction(action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeechRecognition);

