import React, { Component } from 'react';
import SequenceBuilderComponent from '../../../components/systemBuilder/engines/sequenceBuilder/SequenceBuilder';
import WithData from '../../../data/WithData';

const WithActions = WithData.polling.WithActions;
const WithSequences = WithData.polling.WithSequences;

const generateMetaActionMap = () => ({
  action: {
    type: 'options',
  },
  wait: {
    type: 'text',
  },
});

const getSelectedIndex = (sequences, selectedIndex) => {
  if (selectedIndex < sequences.length){
    return selectedIndex;
  }
  return 0;
};

class SequenceBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: undefined,
    };
  }
  render() {
    return (
      (
        <WithSequences>
          {({ sequences, addSequence, deleteSequence }) => {
            const selectedSequence = sequences[getSelectedIndex(sequences, this.state.selectedIndex)];

            const sequenceActions = sequences.filter(
              sequence => sequence.name === selectedSequence.name,
            );

            const sequenceAction = (
              sequenceActions.length > 0 ?
                (sequenceActions[0].actions || []) :
                []
            );

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
                selectedName={selectedSequence ? selectedSequence.name : ''}
                selectedIndex={getSelectedIndex(sequences, this.state.selectedIndex)}
                metaActions={generateMetaActionMap()}
                onSequenceChange={(newSequence, addedSequenceName, deletedSequenceName) => {
                  console.log('new sequence is : ', newSequence);
                  if (addedSequenceName && deletedSequenceName) {
                    throw (new Error('cannot simulataneously add and delete a sequence'));
                  }
                  if (addedSequenceName) {
                    addSequence(addedSequenceName);
                  } else if (deletedSequenceName) {
                    deleteSequence(deletedSequenceName);
                  }
                }}
                onSequenceActionsChange={(newActions) => {
                  addSequence(selectedSequence.name, newActions);
                }}
              />
            );
          }}
        </WithSequences>
      )
    );
  }
}

export default SequenceBuilder;
