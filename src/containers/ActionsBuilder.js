import React, { Component } from 'react';
import ActionBuilder from '../components/actionBuilder/ActionBuilder';
import WithActions from '../data/WithActions';

class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
      <WithActions>
        {({ actions, addAction, deleteAction, saveAction }) => (
          <ActionBuilder
            actions={actions.map(action => action.name)}
            actionName={actions[this.state.selectedIndex].name}
            selectedIndex={this.state.selectedIndex}
            onActionChange={(newActions, addedActionName, deletedActionName) => {
              if (addedActionName) {
                addAction(addedActionName);
              }
              if (deletedActionName) {
                deleteAction(deletedActionName);
              }
            }}
            onActionSelected={(_, selectedIndex) => {
              this.setState({ selectedIndex });
            }}
            actionCode={actions[this.state.selectedIndex].content}
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

