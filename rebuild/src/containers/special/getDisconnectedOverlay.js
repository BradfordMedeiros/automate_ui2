import React from 'react';
import DisconnectedOverlay from '../../components/special/disconnectedOverlay/DisconnectedOverlay'

const getDisconnectedOverlay = WithStatus => () => (
	<WithStatus 
		hooks={{ 
			onConnected: () => {	
				console.log('connected!')
			},
			onDisconnected: () => {
				console.log('disconnected!')
			}
		}}>
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