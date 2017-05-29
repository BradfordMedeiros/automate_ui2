
import React from 'react';

const SSH_URL = 'http://localhost:9001';

const SSH = () => (
  <iframe
    src={SSH_URL}
    style={{ border: '0 none', height: '100%', width: '100%' }}
  />
);

export default SSH;
