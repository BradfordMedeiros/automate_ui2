import React from 'react';
import WithSystemInfo from '../data/WithSystemInfo';
import DeviceInfoComponent from '../components/device/DeviceInfo';

const DeviceInfo = () => (
  <WithSystemInfo>
    {({ ipAddress, macAddress }) => (
      <DeviceInfoComponent
        ipAddress={ipAddress}
        macAddress={macAddress}/>
    )}
  </WithSystemInfo>
)

export default DeviceInfo;