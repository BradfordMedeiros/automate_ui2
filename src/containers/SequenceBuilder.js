import React, { Component } from 'react';
import SequenceBuilderComponent from '../components/sequenceBuilder/SequenceBuilder';
import WithSequences from '../data/WithSequences';
import WithActions from '../data/WithActions';

const mock_action_map = {
  other: [{ name: 'wait', value: 1000 }, { name: 'action', value: 'other1' }, { name: 'action', value: 'light on' }],
  test: [{ value: 'wow so cool', name: 'action' }],
  test1: [],
  lights: [{ value: 'man', name: 'action' }],
};

const generateMetaActionMap = actions =>  ({
  action: {
    type: 'options',
    value: actions.map(action => action.name),
  },
  wait: {
    type: 'text',
  },
});


class SequenceBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedName: 'other',
    };
  }
  render() {
    return (
      <WithActions>
        {({ actions }) =>
          <WithSequences>
            {({sequences, addSequence, deleteSequence}) => {
              const sequenceActions = sequences.filter(sequence => sequence.name == this.state.selectedName);
              const sequenceAction = sequenceActions.length > 0 ? (sequenceActions[0].actions || []) : [];

              return (
                <SequenceBuilderComponent
                  actions={sequenceAction}
                  sequences={sequences.map(seq => seq.name)}
                  onSequenceSelected={(selectedName, selectedIndex) => {
                    this.setState({
                      selectedIndex,
                      selectedName,
                    });
                  }}
                  selectedName={this.state.selectedName}
                  selectedIndex={this.state.selectedIndex}
                  metaActions={generateMetaActionMap(actions)}
                  onSequenceChange={(newSequence, addedSequenceName, deletedSequenceName) => {
                    console.error('on sequence changed called');
                    if (addedSequenceName && deletedSequenceName) {
                      throw (new Error('cannot simulataneously add and delete a sequence'));
                    }
                    if (addedSequenceName) {
                      addSequence(addedSequenceName);
                    } else if (deletedSequenceName) {
                      deleteSequence(deletedSequenceName);
                    }
                  }}
                  onSequenceActionsChange={(newActions, addedActionName) => {
                    addSequence(this.state.selectedName, newActions);
                  }}
                />
              );
            }}
          </WithSequences>
        }
      </WithActions>
    );
  }
}

export default SequenceBuilder;