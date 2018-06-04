import React, { Component } from 'react';
import SequenceInfo from './components/SequenceInfo';

const getSequences = (Header, SelectableTypes) => {
  class Sequences extends Component {
    state = {
      selectedIndex: 0,
    };

    render() {
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
                  items={['one', 'two', 'three', 'four']}
                  selectedIndex={this.state.selectedIndex}
                  onItemSelected={(_, selectedIndex) => {
                    console.log('selected');
                    this.setState({
                      selectedIndex,
                    })
                  }}
              />
              <SequenceInfo actions={[]} />
            </div>
          </div>
      )
    }
  }

  return Sequences;
};


export default getSequences;