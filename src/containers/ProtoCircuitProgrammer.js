
import React, { Component, PropTypes } from 'react';
import ProtoCircuitProgrammerComponent from '../components/protoCircuitProgrammer/ProtoCircuitProgrammer';

class ProtoCircuitProgrammer extends Component {
  state = {
    mode: 'input',
  }
  render() {
    return (
      <ProtoCircuitProgrammerComponent
        mode={this.state.mode}
        onModeChange={mode => this.setState({ mode })}
      />
    );
  }
}

export default ProtoCircuitProgrammer;