import React, { Component } from 'react';
import SequenceBuilderComponent from '../components/sequenceBuilder/SequenceBuilder';
import WithSequences from '../data/WithSequences';

const mock_action_map = {
  other: [{ name: 'wait', type: 'action' }, { name: 'other1', type: 'action' }],
  test: [{ name: 'wow so cool', type: 'action' }],
  test1: [],
  lights: [{ name: 'man', type: 'action' }],
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
        {({ sequences }) => (
          <SequenceBuilderComponent
            actions={mock_action_map[this.state.selectedName] || []}
            sequences={mock_sequences.map(seq => seq.name)}
            onSequenceSelected={(selectedName, selectedIndex) => {
              this.setState({
                selectedIndex,
                selectedName,
              });
            }}
            selectedName={this.state.selectedName}
            selectedIndex={this.state.selectedIndex}
            metaActions={metaActionMap}
            onSequenceChange={(newSequence) => {
              const restoredSequences = newSequence.map(name => ({
                name,
              }));
              mock_sequences = restoredSequences;
            }}

            onSequenceActionsChange={newActions => {
              console.error('sequence: ', this.state.selectedName);
              console.error('new Actions: ', newActions);
              mock_action_map[this.state.selectedName] = newActions;
              this.forceUpdate();
            }}
          />
        )}
      </WithSequences>
    );
  }
}

export default SequenceBuilder;
