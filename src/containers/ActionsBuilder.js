
import React, { Component, PropTypes } from 'react';
import ActionBuilder from '../components/ActionBuilder';

class ActionsBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
      actions: ['one, two action', 'three action'],
    }
  }
  render() {
    return (
      <ActionBuilder
        actions={this.state.actions}
        selectedIndex={this.state.selectedIndex}
        onActionChange={actions => { this.setState({ actions })}}
        onActionSelected={(_, selectedIndex) => {  this.setState({ selectedIndex })}}
      />);
  }
}

export default ActionsBuilder;

