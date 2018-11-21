import React, { Component } from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import AddItemDialog from '../../../../components/overlayContent/programming/components/AddItemDialog/AddItemDialog';
import getSequencesComponent from '../../../../components/overlayContent/programming/components/types/Sequences/getSequences';

const SequencesComponent = getSequencesComponent(Header, SelectableTypes, AddItemDialog);

const getSequences = WithSequences => {
  class Sequences extends Component{
    state = {
      selectedIndex: 0,
    }
    render(){
      return (
        <WithSequences>
          {({ data, addSequence, deleteSequence }) => {
            const sequences = data;
            const currentSequence = sequences[this.state.selectedIndex] || { };
            return (
              <SequencesComponent
                sequences={sequences.map(sequence => sequence.name)}
                selectedIndex={this.state.selectedIndex}
                onSequenceSelected={(_, selectedIndex) => {
                  this.setState({
                    selectedIndex,
                  })
                }}
                sequenceActions={currentSequence.actions || []}
                onDelete={(sequence, index) => {
                  deleteSequence(sequence)
                  this.setState({
                    selectedIndex: 0,
                  })
                }}
                onChange={(actions, newAction, deletedAction) => {
                  addSequence(currentSequence.name, actions)
                }}
                onAddSequence={sequenceName => { addSequence(sequenceName, []) }}
              />
            )
          }}
        </WithSequences>
      )
    }
  }
  return Sequences
};

export default getSequences;