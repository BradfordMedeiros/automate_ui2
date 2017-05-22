import React, { Component } from 'react';
import StateBuilder from '../../components/systemBuilder/stateBuilder/StateBuilder';
import WithStates from '../../data/WithStates';

class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
      <WithStates>
        {({ states }) => {
          window.ss = states;
          return (
            <StateBuilder
              states={states.map(state => ({
                name: state.name,
              }))}
              stateName={states[this.state.selectedIndex].name}
              selectedIndex={this.state.selectedIndex}
              onStateChange={(newActions, addedActionName, deletedActionName) => {
                /*if (addedActionName) {
                 addAction(addedActionName);
                 }
                 if (deletedActionName) {
                 deleteAction(deletedActionName);
                 }*/
              }}
              onStateSelected={(_, selectedIndex) => {
                this.setState({ selectedIndex });
              }}
              //stateType={actions[this.state.selectedIndex].type}
              stateType={'javascript'}
              //stateCode={actions[this.state.selectedIndex].content}
              stateCode={''}
              onUpload={(code) => {
                //saveAction(actions[this.state.selectedIndex].name, code);
              }}
            />
          )
        }}
      </WithStates>
    );
  }
}

export default ActionsBuilder;

