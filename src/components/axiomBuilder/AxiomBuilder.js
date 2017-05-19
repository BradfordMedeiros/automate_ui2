import React, { Component, PropTypes } from 'react';
import AxiomSelection from './components/AxiomSelection';
import GenericOverlay from '../overlay/GenericOverlay';

class AxiomBuilder extends Component {
  render() {
    const {
      axioms,
      title,
      selectedIndex,
      onAxiomSelected,
      onAxiomChange,
      children,
    } = this.props;

    return (
      <GenericOverlay title={title}>
        <div style={{ display: 'flex' }}>
          <AxiomSelection
            axioms={axioms}
            selectedIndex={selectedIndex}
            onAxiomSelected={onAxiomSelected}
            onAxiomChange={onAxiomChange}
            style={{ width: 250 }}
          />
          <div style={{ width: 0, height: '100%', border: '1px solid rgba(0,0,0,0.3)' }} />
          {children}
        </div>
      </GenericOverlay>
    );
  }
}


AxiomBuilder.propTypes = {
  axioms: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onAxiomSelected: PropTypes.func,
  onAxiomChange: PropTypes.func,
  children: PropTypes.node,
};

export default AxiomBuilder;
