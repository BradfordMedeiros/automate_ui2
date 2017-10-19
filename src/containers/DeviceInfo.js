import React from 'react';
import WithData from '../data/WithData';
import DeviceInfoComponent from '../components/device/DeviceInfo';

const WithSystemInfo = WithData.polling.WithSystemInfo;
const WithIsSystemLocked = WithData.polling.WithIsSystemLocked;

const DeviceInfo = () => (
  <WithIsSystemLocked>
    {({ lockSystem }) => (
      <WithSystemInfo
        injectLoading
      >
        {({ public_ip_address, mac_address, automate_core_version }) => ( // eslint-disable-line
          <DeviceInfoComponent
            ipAddress={public_ip_address} // eslint-disable-line
            macAddress={mac_address}  // eslint-disable-line
            automateCoreVersion={automate_core_version} // eslint-disable-line
            onClickConfirmLockSystem={systemName => {
              if(systemName){
                lockSystem(systemName);
              }else{
                lockSystem();
              }
            }}
          />
        )}
      </WithSystemInfo>
    )}
  </WithIsSystemLocked>
);

export default DeviceInfo;
