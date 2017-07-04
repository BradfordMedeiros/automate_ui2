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
      (
        <WithSequences>
          {({ sequences, addSequence, deleteSequence }) => {
            const sequenceActions = sequences.filter(
              sequence => sequence.name === this.state.selectedName,
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
                selectedName={this.state.selectedName}
                selectedIndex={this.state.selectedIndex}
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
                  addSequence(this.state.selectedName, newActions);
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
