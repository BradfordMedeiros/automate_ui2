import React, { PropTypes } from 'react';
import { Subheader } from 'material-ui';
import GenericOverlay from '../overlay/GenericOverlay';
import './style.css';

const renderField = (title, value) => (
  <div className="device_info_container">
    <Subheader>{title}: </Subheader>
    <div className="device_info_value" >{value}</div>
  </div>
);
const DeviceInfo = ({ ipAddress, macAddress, automateCoreVersion }) => (
  <GenericOverlay title="Automate Core Info">
    {renderField('IP Address', ipAddress)}
    {renderField('Mac Address', macAddress)}
    {renderField('Core Version', automateCoreVersion)}
  </GenericOverlay>
);

DeviceInfo.propTypes = {
  automateCoreVersion: PropTypes.string.isRequired,
  ipAddress: PropTypes.string.isRequired,
  macAddress: PropTypes.string.isRequired,
};

export default DeviceInfo;
