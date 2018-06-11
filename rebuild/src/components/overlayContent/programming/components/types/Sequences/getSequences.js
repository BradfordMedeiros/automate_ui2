import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SequenceInfo from './components/SequenceInfo/SequenceInfo';

const getSequences = (Header, SelectableTypes) => {
  class Sequences extends Component {
    render() {
      const { sequences, onSequenceSelected,  selectedIndex } = this.props;
      return (
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Header
                itemName={'some name'}
                itemType={'some type'}
                deleteSequence={() => {
                }}
            />
            <div style={{display: 'flex', flexGrow: 1}}>
              <SelectableTypes
                  items={sequences}
                  selectedIndex={selectedIndex}
                  onItemSelected={(_, selectedIndex) => { onSequenceSelected(sequences[selectedIndex], selectedIndex); }}
              />
              <SequenceInfo
                  actions={[
                    {type: 'action', options: {topic: 'some topic', value: 'some value'}},
                    {type: 'wait', options: 1000}
                  ]}
                  onChange={() => {
                    console.log('on change');
                  }}
                  metaActions={[

                  ]}

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
  };

  return Sequences;
};

export default getSequences;