import React from 'react';
import WithSystemInfo from '../data/WithSystemInfo';
import DeviceInfoComponent from '../components/device/DeviceInfo';

const DeviceInfo = () => (
  <WithSystemInfo
    injectLoading
  >
    {({ public_ip_address, mac_address, automate_core_version }) => ( // eslint-disable-line
      <DeviceInfoComponent
        ipAddress={public_ip_address} // eslint-disable-line
        macAddress={mac_address}  // eslint-disable-line
        automateCoreVersion={automate_core_version}
      />
    )}
  </WithSystemInfo>
);

export default DeviceInfo;
