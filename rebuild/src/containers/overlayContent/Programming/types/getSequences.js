import React, { Component } from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import AddItemDialog from '../../../../components/overlayContent/programming/components/AddItemDialog/AddItemDialog';
import getSequencesComponent from '../../../../components/overlayContent/programming/components/types/Sequences/getSequences';

const SequencesComponent = getSequencesComponent(Header, SelectableTypes, AddItemDialog);

const debugSequenceActionMap = {
  one: [
    {type: 'action', options: {topic: 'some topic', value: 'some value'}},
    {type: 'wait', options: 1000},
  ],
  two: [
    {type: 'action', options: {topic: 'some topic', value: 'some value'}},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'action', options: {topic: 'some topic', value: 'some value'}},
    {type: 'action', options: {topic: 'some topic', value: 'some value'}},
    {type: 'wait', options: 1000},
  ],
  three: [
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},
    {type: 'wait', options: 1000},

  ],
};

const getSequences = WithSequences => {
  class Sequences extends Component{
    state = {
      selectedIndex: 0,
    }
    render(){
      const selectedName = Object.keys(debugSequenceActionMap)[this.state.selectedIndex];
      return (
        <WithSequences>
          {({ data, addSequence, deleteSequence, executeSequence }) => {
            const sequences = data;
            console.log('sequences: ', sequences)
            return (
              <SequencesComponent
                sequences={Object.keys(debugSequenceActionMap)}
                selectedIndex={this.state.selectedIndex}
                onSequenceSelected={(_, selectedIndex) => {
                  this.setState({
                    selectedIndex,
                  })
                }}
                sequenceActions={debugSequenceActionMap[selectedName] || []}
                onChange={newActions => {
                  debugSequenceActionMap[selectedName] = newActions;
                  this.forceUpdate();
                }}
                onDelete={(sequence, index) => {
                  console.log('delete sequence: ', sequence);
                  delete debugSequenceActionMap[sequence];
                  this.setState({
                    selectedIndex: 0,
                  })
                }}
                onChange={(actions, newAction, deletedAction) => {
                  debugSequenceActionMap[selectedName] = actions;
                  this.forceUpdate();
                }}
                onAddSequence={sequence => {
                  console.log("container: add sequence ", sequence)
                }}
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