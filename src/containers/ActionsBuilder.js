import React, { Component, PropTypes } from 'react';
import ActionBuilder from '../components/actionBuilder/ActionBuilder';
import WithActions from '../data/WithActions';

class ActionsBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      actions: ['one', 'two action', 'three action'],
      actionCode: {
        one: 'function() { return 1 }',
        'two action': 'function() { return 2 } ',
        'three action': 'function() { return 3 } ',
      },
    };
  }
  render() {
    return (
      <WithActions>
        {({ actions, addAction, deleteAction, saveAction }) => (
          <ActionBuilder
            actions={actions.map(action => action.name)}
            actionName={actions[this.state.selectedIndex].name}
            selectedIndex={this.state.selectedIndex}
            onActionChange={(newActions, addedActionName, deletedActionName) => {
              console.error('new action is : ', addedActionName);
              console.error('deleted action is: ', deletedActionName);
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
              console.log('uploading: ', code);
              saveAction(actions[this.state.selectedIndex].name, code);
            }}
          />
        )}
      </WithActions>
    );
  }
}

export default ActionsBuilder;

