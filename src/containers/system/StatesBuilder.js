import React, { Component } from 'react';
import StateBuilder from '../../components/systemBuilder/stateBuilder/StateBuilder';
import WithStates from '../../data/polling/WithStates';

class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
      <WithStates>
        {({ states, addState, deleteState, saveState }) => (
          <StateBuilder
            states={states.map(state => ({
              name: state.name,
            }))}
            stateName={states[this.state.selectedIndex].name}
            selectedIndex={this.state.selectedIndex}
            onStateChange={(newActions, addedActionName, deletedActionName) => {
              if (addedActionName) {
                addState(addedActionName);
              }
              if (deletedActionName) {
                deleteState(deletedActionName);
              }
            }}
            onStateSelected={(_, selectedIndex) => {
              this.setState({ selectedIndex });
            }}
            stateType={states[this.state.selectedIndex].type}
            stateCode={states[this.state.selectedIndex].content}
            onUpload={(code) => {
              saveState(states[this.state.selectedIndex].name, code);
            }}
          />
          )}
      </WithStates>
    );
  }
}

export default ActionsBuilder;

