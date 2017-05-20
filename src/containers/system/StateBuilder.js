import React, { Component } from 'react';
import StateBuilder from '../../components/systemBuilder/stateBuilder/StateBuilder';
import WithActions from '../../data/WithActions';

class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
      <WithActions>
        {({ actions, addAction, deleteAction, saveAction }) => (
          <StateBuilder
            states={actions.map(action => ({
              name: action.name,
            }))}
            stateName={actions[this.state.selectedIndex].name}
            selectedIndex={this.state.selectedIndex}
            onStateChange={(newActions, addedActionName, deletedActionName) => {
              if (addedActionName) {
                addAction(addedActionName);
              }
              if (deletedActionName) {
                deleteAction(deletedActionName);
              }
            }}
            onStateSelected={(_, selectedIndex) => {
              this.setState({ selectedIndex });
            }}
            stateType={actions[this.state.selectedIndex].type}
            stateCode={actions[this.state.selectedIndex].content}
            onUpload={(code) => {
              saveAction(actions[this.state.selectedIndex].name, code);
            }}
          />
        )}
      </WithActions>
    );
  }
}

export default ActionsBuilder;

