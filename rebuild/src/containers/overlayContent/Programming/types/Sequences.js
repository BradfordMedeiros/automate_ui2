import React, { Component } from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import getSequences from '../../../../components/overlayContent/programming/components/types/Sequences/getSequences';

const SequencesComponent = getSequences(Header, SelectableTypes);

class Sequences extends Component{
  state = {
    selectedIndex: 0,
  }
  render(){
    return (
        <SequencesComponent
          sequences={['one', 'two', 'three']}
          selectedIndex={this.state.selectedIndex}
          onSequenceSelected={(_, selectedIndex) => {
            this.setState({
              selectedIndex,
            })
          }}

        />
    )
  }
}


export default Sequences;