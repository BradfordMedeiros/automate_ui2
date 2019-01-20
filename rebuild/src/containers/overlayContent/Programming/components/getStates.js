import React from 'react';
import { States as StatesComponent }from '../../../../components/overlayContent/programming/types/Types';

const getStates = (WithStates) => (
	<WithStates>
		{({ data }) => {
			const statesProp = data.map(state => ({
				topic: state.topic,
				value: state.value,
			}))

			return (
				<StatesComponent states={statesProp} />
			)}}
	</WithStates>
)

export default getStates;
