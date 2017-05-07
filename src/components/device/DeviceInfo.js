import React, { PropTypes } from 'react';
import { Subheader } from 'material-ui';
import GenericOverlay from '../overlay/GenericOverlay';
import './style.css';

const DeviceInfo = ({ ipAddress, macAddress }) => (
  <GenericOverlay title="Automate Core Info">
    <div className="ip_container"><Subheader>IP Address: </Subheader> <div className="ip_address" >{ipAddress} </div></div>
    <div className="mac_container"> <Subheader>Mac Address: </Subheader> <div className="mac_address">{macAddress} </div></div>
  </GenericOverlay>
);

DeviceInfo.propTypes = {
  ipAddress: PropTypes.string.isRequired,
  macAddress: PropTypes.string.isRequired,
};

export default DeviceInfo;