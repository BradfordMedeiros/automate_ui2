import React, { Component, PropTypes } from 'react';
import AxiomSelection from './components/AxiomSelection';
import GenericOverlay from '../overlay/GenericOverlay';
import './style.css';

const getMobileContent = ({ axioms, selectedIndex, onAxiomSelected, onAxiomChange, isHidden, children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <AxiomSelection
        axioms={axioms}
        selectedIndex={selectedIndex}
        onAxiomSelected={onAxiomSelected}
        onAxiomChange={onAxiomChange}
        style={{
          animation: !isHidden ? 'axiom_slide_in 0.1s linear forwards': 'axiom_slide_out 0.1s linear forwards',
        }}
      />
      <div style={{ width: 0, height: '100%', border: '1px solid rgba(0,0,0,0.3)' }} />
      <div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        animation: !isHidden ? 'content_slide_in 0.1s linear forwards': 'content_slide_out 0.1s linear forwards',
      }}>
        {children}
      </div>
    </div>
  )
};

const getDesktopContent = ({ axioms, title, selectedIndex, onAxiomSelected, onAxiomChange, isHidden, onMenuToggle, isMobile, children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <AxiomSelection
        axioms={axioms}
        selectedIndex={selectedIndex}
        onAxiomSelected={onAxiomSelected}
        onAxiomChange={onAxiomChange}
        style={{ width: 250 }}
      />
      <div style={{ width: 0, height: '100%', border: '1px solid rgba(0,0,0,0.3)' }} />
      <div style={{ position: 'relative', width: 'calc(100% - 250px)'}}>
        {children}
      </div>
    </div>
  )
};

const AxiomBuilder = (props) => {
  const { axioms, title, selectedIndex, onAxiomSelected, onAxiomChange, isHidden, onMenuToggle, isMobile, children } = props;
  return (
    <GenericOverlay
      title={title}
      onMenuToggle={isMobile? onMenuToggle : undefined}
    >
      {isMobile ? getMobileContent(props): getDesktopContent(props)}
    </GenericOverlay>
  );
}


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
