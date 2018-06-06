import React from 'react';
import DeviceInfoComponent from '../../../../components/overlayContent/programming/components/types/DeviceInfo/DeviceInfo';

const DeviceInfo = () => (
    <DeviceInfoComponent
        automateCoreVersion="some version"
        ipAddress="some ip"
        macAddress="some mac"
        onClickConfirmLockSystem={() => {
          console.log('lock system');
        }}
    />
);

export default DeviceInfo;