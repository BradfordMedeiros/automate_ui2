import React from 'react';
import WithSystemInfo from '../data/WithSystemInfo';
import DeviceInfoComponent from '../components/device/DeviceInfo';

const DeviceInfo = () => (
  <WithSystemInfo
    injectLoading
  >
    {({ public_ip_address, mac_address }) => (
      <DeviceInfoComponent
        ipAddress={public_ip_address}
        macAddress={mac_address}
      />
    )}
  </WithSystemInfo>
)

export default DeviceInfo;