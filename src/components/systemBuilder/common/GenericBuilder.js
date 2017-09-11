import React, { Component, PropTypes } from 'react';
import AxiomBuilder from '../../axiomBuilder/AxiomBuilder';
import AxiomInfo from './components/AxiomInfo';

class GenericBuilder extends Component {
  render() {
    const {
      axioms,
      selectedIndex,
      onAxiomChange,
      onAxiomSelected,
      axiomName,
      axiomClass,
      children,
    } = this.props;

    return (
      <AxiomBuilder
        title={axiomClass}
        axioms={axioms.map(axiom => axiom.name)}
        selectedIndex={selectedIndex}
        onAxiomChange={onAxiomChange}
        onAxiomSelected={onAxiomSelected}
      >
        <div style={{ width: '100%', height: '100%' }}>
          {(axioms.length > 0) && (
            <AxiomInfo
              axiomName={axiomClass}
              deleteAxiom={() => {
                const newActions = axioms.slice().filter((action, index) => index !== selectedIndex);
                onAxiomChange(newActions, undefined, axiomName);
              }}
            />
          )}
          <div style={{ width: '100%', height: '100%' }}>
            {children}
          </div>
        </div>
      </AxiomBuilder>
    );
  }
}

GenericBuilder.propTypes = {
  axioms: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onAxiomChange: PropTypes.func.isRequired,
  onAxiomSelected: PropTypes.func.isRequired,
  axiomName: PropTypes.string.isRequired,
  axiomClass: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default GenericBuilder;
