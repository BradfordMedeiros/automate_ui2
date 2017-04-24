import React, { Component, PropTypes } from 'react';
import SequenceSelection from './components/SequenceSelection';
import SequenceInfo from './components/SequenceInfo';


class  SequenceBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
    }
  }
  render() {
    const {
      actions,
      availableActions,
      metaActions,
      sequences,
      onSequenceSelected,
      onSequenceChange,
      onSequenceActionsChange,
      selectedName,
      selectedIndex,
    } = this.props;

    return (
      <div style={{height: '100%', background: '#282828'}}>
        <div style={{
          width: '100%',
          background: 'rgb(40,40,40)',
          height: 60,
          fontSize: '140%',
          paddingLeft: 30,
          paddingTop: 20,
          color: 'rgb(160,160,160)',
          borderBottom: '1px solid black',
          display: 'inline-block',
        }}>
          <div style={{display: 'inline', cursor: 'pointer', paddingRight: 120}}>Sequences</div>
        </div>
        <div style={{ display: 'flex' }}>
          <SequenceSelection
            sequences={sequences}
            selectedIndex={selectedIndex}
            onSequenceSelected={onSequenceSelected}
            onSequenceChange={onSequenceChange}
            style={{ width: 250 }}
          />
          <div style={{ width: 0, height: '100%', border: '1px solid black' }} />
          <SequenceInfo
            actions={actions}
            availableActions={availableActions}
            metaActions={metaActions}
            sequenceName={selectedName}
            deleteSequence={() => {
              const newSequences = sequences.slice().filter(sequence => sequence !== selectedName)
              onSequenceChange(newSequences);
            }}
            style={{ width: 'calc(100% - 250px)' }}
          />
        </div>
      </div>
    )
  }
}


SequenceBuilder.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string),
  sequences: PropTypes.arrayOf(PropTypes.string),
  onSequenceSelected: PropTypes.func,
  selectedIndex: PropTypes.number,
  selectedName: PropTypes.string,
  metaActions: PropTypes.arrayOf(PropTypes.string),
  availableActions: PropTypes.arrayOf(PropTypes.string),
  onSequenceActionsChange: PropTypes.func,
  onSequenceChange: PropTypes.func,
};

export default SequenceBuilder;