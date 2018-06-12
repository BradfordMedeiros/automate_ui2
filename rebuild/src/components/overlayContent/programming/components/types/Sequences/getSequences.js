import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SequenceInfo from './components/SequenceInfo/SequenceInfo';

const getSequences = (Header, SelectableTypes) => {
  class Sequences extends Component {
    render() {
      const { sequences, onSequenceSelected,  selectedIndex, sequenceActions, onChange, onDelete } = this.props;
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
                  onItemSelected={(_, selectedIndex) => { onSequenceSelected(sequences[selectedIndex], selectedIndex); }}
              />
              <SequenceInfo
                  actions={sequenceActions}
                  onChange={onChange}
              />
            </div>
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
  };

  return Sequences;
};

export default getSequences;