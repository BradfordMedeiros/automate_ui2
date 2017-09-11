import React, { Component, PropTypes } from 'react';
import SequenceInfo from './components/SequenceInfo';
import AxiomBuilder from '../.././../axiomBuilder/AxiomBuilder';

class SequenceBuilder extends Component {
  render() {
    const {
      actions,
      metaActions,
      sequences,
      onSequenceSelected,
      onSequenceChange,
      onSequenceActionsChange,
      selectedName,
      selectedIndex,
    } = this.props;

    return (
      <AxiomBuilder
        title="Sequences"
        axioms={sequences}
        selectedIndex={selectedIndex}
        onAxiomSelected={onSequenceSelected}
        onAxiomChange={onSequenceChange}
      >
        {(sequences.length > 0) && <SequenceInfo
          actions={actions}
          metaActions={metaActions}
          sequenceName={selectedName}
          onChange={onSequenceActionsChange}
          deleteSequence={() => {
            const newSequences = sequences.slice().filter(sequence => sequence !== selectedName);
            onSequenceChange(newSequences, undefined, selectedName);
          }}
          style={{ width: 'calc(100% - 250px)' }}
        />}
        {(sequences.length === 0) && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              top: '30%',
              color: 'rgb(110,110,110)',
              fontFamily: 'monospace',
              fontSize: 48,
            }}>
            no sequences
          </div>
        )}
      </AxiomBuilder>
    );
  }
}


SequenceBuilder.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string),
  sequences: PropTypes.arrayOf(PropTypes.string),
  onSequenceSelected: PropTypes.func,
  selectedIndex: PropTypes.number,
  selectedName: PropTypes.string,
  metaActions: PropTypes.arrayOf(PropTypes.string),
  onSequenceActionsChange: PropTypes.func,
  onSequenceChange: PropTypes.func,
};

export default SequenceBuilder;
