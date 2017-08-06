
import React, { PropTypes } from 'react';
import GenericOverlay from '../overlay/GenericOverlay';

const SSH = ({ url }) => (
  <GenericOverlay title="SSH">
    <iframe
      src={url}
      style={{ border: '0 none', height: '100%', width: '100%' }}
    />
  </GenericOverlay>
);

SSH.propTypes = {
  url: PropTypes.string.isRequired,
};

export default SSH;

