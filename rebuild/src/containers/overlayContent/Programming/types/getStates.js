import React from 'react';
import StatesComponent from '../../../../components/overlayContent/programming/components/types/States/States';

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
