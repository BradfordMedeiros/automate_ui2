import React, { Component } from 'react';
import SequenceBuilderComponent from '../components/sequenceBuilder/SequenceBuilder';
import WithSequences from '../data/WithSequences';

const action_map = {
  other: [ { name: 'wait', type: 'action'}, {name: 'other1', type: 'action'} ],
  test: [{name: 'wow so cool', type: 'action'}] ,
  test1: [ ],
  lights: [ {name: 'man', type: 'action'}],
};


class SequenceBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex : 0,
      selectedName: 'other',
    }
  }
  render() {
    return (
      <WithSequences>
        {({ sequences }) => (
          <SequenceBuilderComponent
            actions={action_map[this.state.selectedName] || []}
            sequences={sequences.map(seq => seq.name)}
            onSequenceSelected={(selectedName, selectedIndex) => {
              this.setState({
                selectedIndex,
                selectedName,
              })
            }}
            selectedIndex={this.state.selectedIndex}
            availableActions={['action0','action1','action2','action3','action4','action5']}
            metaActions={['wait']}

          />
        )}
      </WithSequences>
    )
  }
}

export default SequenceBuilder;