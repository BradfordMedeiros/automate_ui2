import React, { Component } from 'react';
import ActionBuilder from '../../components/systemBuilder/actionBuilder/ActionBuilder';
import WithActions from '../../data/polling/WithActions';

class ActionsBuilder extends Component {
  state = {
    selectedIndex: 0,
  };
  render() {
    return (
      <WithActions>
        {({ actions, addAction, deleteAction, saveAction }) => (
          <ActionBuilder
            actions={actions.map(action => ({
              name: action.name,
            }))}
            actionName={actions.length > 0 ? actions[this.state.selectedIndex].name : 'No Actions'}
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
            actionType={actions.length > 0 ? actions[this.state.selectedIndex].type : ''}
            actionCode={actions.lenght > 0 ? actions[this.state.selectedIndex].content : ''}
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

