import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SequenceInfo from './components/SequenceInfo/SequenceInfo';

const getSequences = (Header, SelectableTypes, AddItemDialog) => {
  class Sequences extends Component {
    state = {
      showDialog: false,
      addItemName: "",
    }
    render() {
      const { 
        sequences, 
        onSequenceSelected,  
        selectedIndex, 
        sequenceActions, 
        onChange, 
        onDelete,
        onAddSequence,
      } = this.props;
      return (
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Header
                itemName={'Sequences'}
                itemType={'Type'}
                deleteItem={() => {
                  onDelete(sequences[selectedIndex], selectedIndex);
                }}
            />
            <div style={{display: 'flex', flexGrow: 1}}>
              <SelectableTypes
                  items={sequences}
                  selectedIndex={selectedIndex}
                  onItemSelected={(_, selectedIndex) => { 
                    onSequenceSelected(sequences[selectedIndex], selectedIndex); 
                  }}
                  onAddClicked={() => {
                    this.setState({
                      showDialog: true,
                    })
                  }}
              />
              <SequenceInfo
                  actions={sequenceActions}
                  onChange={onChange}
              />
            </div>
            <AddItemDialog 
              open={this.state.showDialog} 
              closeDialog={() => { this.setState({ showDialog: false }) }}
              onInputChange={addItemName => {
                this.setState({
                  addItemName,
                })
              }}
              onAddItem={() => {
                onAddSequence(this.state.addItemName);
                this.setState({
                  showDialog: false,
                })
              }}
            />
          </div>
      )
    }
  }

  Sequences.propTypes = {
    sequences: PropTypes.arrayOf(PropTypes.string),
    onSequenceSelected: PropTypes.func,
    selectedIndex: PropTypes.number,
    sequenceActions: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
    onAddSequence: PropTypes.func,
  };

  return Sequences;
};

export default getSequences;