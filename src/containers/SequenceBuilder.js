import React, { Component } from 'react';
import SequenceBuilderComponent from '../components/sequenceBuilder/SequenceBuilder';
import WithSequences from '../data/WithSequences';

const mock_action_map = {
  other: [{ name: 'wait', value: 1000 }, { name: 'action', value: 'other1'}, {name: 'action', value: 'light on' }],
  test: [{ value: 'wow so cool', name: 'action' }],
  test1: [],
  lights: [{ value: 'man', name: 'action' }],
};

const metaActionMap = {
  action: {
    type: 'options',
    value: ['a', 'b', 'c', 'd', 'e'],
  },
  wait: {
    type: 'text',
  },
};

let mock_sequences = [{ name: 'other' }, { name: 'test' }, { name: 'test1' }, { name: 'lights' }];


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
      <WithSequences>
        {({ sequences, addSequence }) => (
          <SequenceBuilderComponent
            actions={mock_action_map[this.state.selectedName] || []}
            sequences={sequences.map(seq => seq.name)}
            onSequenceSelected={(selectedName, selectedIndex) => {
              this.setState({
                selectedIndex,
                selectedName,
              });
            }}
            selectedName={this.state.selectedName}
            selectedIndex={this.state.selectedIndex}
            metaActions={metaActionMap}
            onSequenceChange={(newSequence, addedSequenceName, deletedSequenceName) => {
              addSequence(addedSequenceName);
            }}
            onSequenceActionsChange={(newActions, addedActionName) => {
              /*console.error('sequence: ', this.state.selectedName);
              console.error('new Actions: ', newActions);
              mock_action_map[this.state.selectedName] = newActions;
              this.forceUpdate();*/
              console.log('sequence:  ', this.state.selectedName, ' action: ', addedActionName);
              addSequence(this.state.selectedName, [addedActionName]);
            }}
          />
        )}
      </WithSequences>
    );
  }
}

export default SequenceBuilder;
