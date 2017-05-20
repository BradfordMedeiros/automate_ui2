import React, { Component, PropTypes } from 'react';
import GenericBuilder from '../common/GenericBuilder';

class StateBuilder extends Component {
  render() {
    const {
      states,
      stateCode,
      selectedIndex,
      onStateChange,
      onStateSelected,
      stateName,
      stateType,
      onUpload,
    } = this.props;

    return (
      <GenericBuilder
        axiomClass={'States'}
        axioms={states}
        onAxiomChange={onStateChange}
        selectedIndex={selectedIndex}
        onAxiomSelected={onStateSelected}
        axiomName={stateName}
        axiomType={stateType}
      >
        <div>
          stuff
        </div>
      </GenericBuilder>
    );
  }
}

StateBuilder.propTypes = {
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onStateSelected: PropTypes.func.isRequired,
  stateName: PropTypes.string.isRequired,
  stateCode: PropTypes.string.isRequired,
  stateType: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};

export default StateBuilder;
