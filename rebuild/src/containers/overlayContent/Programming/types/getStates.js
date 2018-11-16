import React from 'react';
import StatesComponent from '../../../../components/overlayContent/programming/components/types/States/States';

const getStates = (WithStates) => (
	<WithStates>
		{({ data }) => {
			const statesProp = data.map(state => ({
				topic: state.name,
				value: 'value still needs implementation + refresh',
			}))
			return (
				<StatesComponent states={statesProp} />
			)}}
	</WithStates>
)

export default getStates;
