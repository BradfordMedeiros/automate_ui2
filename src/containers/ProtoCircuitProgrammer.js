
import React, { Component, PropTypes } from 'react';
import ProtoCircuitProgrammerComponent from '../components/protoCircuitProgrammer/ProtoCircuitProgrammer';

class ProtoCircuitProgrammer extends Component {
  state = {
    mode: 'input',
    isChanged: false,
    topic: '',
    samplingRate: 1000,
  }
  render() {
    return (
      <ProtoCircuitProgrammerComponent

        mode={this.state.mode}
        isChanged={this.state.isChanged}
        onModeChange={mode => {
          this.setState({
            mode,
            isChanged: true,
          });
        }}
        settings={this.state}
        onSettingsChange={newSettings => {
          this.setState({
            ...newSettings,
            isChanged: true,
          })
        }}
      />
    );
  }
}

export default ProtoCircuitProgrammer;