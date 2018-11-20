import React from 'react';
import DisconnectedOverlay from '../../components/special/disconnectedOverlay/DisconnectedOverlay'

const getDisconnectedOverlay = WithStatus => () => (
	<WithStatus>
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