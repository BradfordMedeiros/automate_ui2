
import React from 'react';

const SSH_URL = 'http://localhost:4050';

const SSH = ({}) => {
  return <iframe src={SSH_URL} style={{ width: '100%', height: '100%' }} />
};

export default SSH;