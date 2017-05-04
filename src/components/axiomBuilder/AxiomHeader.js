import React, { PropTypes } from 'react';
import { Subheader } from 'material-ui';

const AxiomHeader = ({ deleteSequence, axiomName, axiomNameValue}) => (
  <div style={{ borderBottom: '1px solid black', height: 48 }}>
    <Subheader style={{ display: 'inline', width: '50%' }}>{axiomName} Name: {axiomNameValue} </Subheader>
    <Subheader onTouchTap={deleteSequence} style={{ display: 'inline', width: '50%', paddingLeft: 60, cursor: 'pointer' }} >Delete</Subheader>
  </div>
);

AxiomHeader.propTypes = {
  deleteSequence: PropTypes.func.isRequired,
  sequenceName: PropTypes.string.isRequired,
  axiomName: PropTypes.string.isRequired,
  axiomNameValue: PropTypes.string.isRequired,
};

export default AxiomHeader;