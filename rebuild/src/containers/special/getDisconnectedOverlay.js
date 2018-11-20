import React from 'react';
import DisconnectedOverlay from '../../components/special/disconnectedOverlay/DisconnectedOverlay'

const getDisconnectedOverlay = WithStatus => ({ onConnected, onDisconnected }) => (
	<WithStatus hooks={{ onConnected, onDisconnected }}>
		{({ data }) => {
			const { isConnected } = data;
			if (isConnected){
				return null;
			}
			return (
				<DisconnectedOverlay />
			)
		}}
	</WithStatus>
)

export default getDisconnectedOverlay;