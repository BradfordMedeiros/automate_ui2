import React from 'react';
import getSchedulesComponent from  '../../../../components/overlayContent/programming/components/types/Schedules/getSchedules';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';

const Schedules = getSchedulesComponent(Header, SelectableTypes);

const getSchedules = (WithSchedules) => (
	<WithSchedules>
		{() => (
			<Schedules />
		)}
	</WithSchedules>
)

export default getSchedules;
