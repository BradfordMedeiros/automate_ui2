import React, { PropTypes } from 'react';
import './style.css';

const AxiomHeader = ({ deleteSequence, axiomName, axiomNameValue }) => (
  <div id="axiom_header">
    <div id="axiom_header_label">{axiomName} Name: {axiomNameValue} </div>
    <div id="axiom_header_delete" onTouchTap={deleteSequence}>Delete</div>
  </div>
);

AxiomHeader.propTypes = {
  deleteSequence: PropTypes.func.isRequired,
  axiomName: PropTypes.string.isRequired,
  axiomNameValue: PropTypes.string.isRequired,
};

export default AxiomHeader;
