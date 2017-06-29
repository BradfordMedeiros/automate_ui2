import React, { Component } from 'react';
import StateBuilderComponent from '../../components/systemBuilder/stateBuilder/StateBuilder';
import WithData from '../../data/WithData';

const WithStates = WithData.polling.WithStates;

class StateBuilder extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
      <WithStates
        renderWhileLoading
      >
        {({ states, addState, deleteState, saveState }) => (
          <StateBuilderComponent
            states={states.map(state => ({
              name: state.name,
            }))}
            stateName={states.length > 0 ? states[this.state.selectedIndex].name : 'No states'}
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
            stateType={states.length > 0 ? states[this.state.selectedIndex].type : ''}
            stateCode={states.length > 0 ? states[this.state.selectedIndex].content : ''}
            onUpload={(code) => {
              saveState(states[this.state.selectedIndex].name, code);
            }}
          />
          )}
      </WithStates>
    );
  }
}

export default StateBuilder;

