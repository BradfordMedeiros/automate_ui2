import React, { Component, PropTypes } from 'react';
import AxiomSelection from './components/AxiomSelection';
import GenericOverlay from '../overlay/GenericOverlay';
import './style.css';

const AxiomBuilder = ({ axioms, title, selectedIndex, onAxiomSelected, onAxiomChange, isHidden, onMenuToggle, isMobile, children }) => (
  <GenericOverlay
    title={title}
    onMenuToggle={isMobile? onMenuToggle : undefined}
  >
    <div style={{ display: 'flex' }}>
        <AxiomSelection
          axioms={axioms}
          selectedIndex={selectedIndex}
          onAxiomSelected={onAxiomSelected}
          onAxiomChange={onAxiomChange}
          style={{
            width: !isMobile ? 250: undefined,
            animation: isMobile ? (!isHidden ? 'axiom_slide_in 0.1s linear forwards': 'axiom_slide_out 0.1s forwards'): undefined,
          }}
        />
      <div style={{ width: 0, height: '100%', border: '1px solid rgba(0,0,0,0.3)' }} />
      {children}
    </div>
  </GenericOverlay>
);


AxiomBuilder.propTypes = {
  axioms: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onAxiomSelected: PropTypes.func.isRequired,
  onAxiomChange: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isHidden: PropTypes.bool.isRequired,
  onMenuToggle: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default AxiomBuilder;
