import React from 'react';
import DeviceInfoComponent from '../../../../components/overlayContent/programming/components/types/DeviceInfo/DeviceInfo';

const getDeviceInfo = (WithDeviceInfo) => (
	<WithDeviceInfo>
		{({ data }) => { 
			const automateCoreVersion = data.automate_core_version;
			const automateIp = data.public_ip_address;
			const macAddress = data.mac_address;
			
			return (
				<DeviceInfoComponent
        			automateCoreVersion={automateCoreVersion}
        			ipAddress={automateIp}
        			macAddress={macAddress}
        			onClickConfirmLockSystem={() => {
          				console.log('lock system');
        			}}
    			/>
			)
		}}
		</WithDeviceInfo>	
 )


export default getDeviceInfo;