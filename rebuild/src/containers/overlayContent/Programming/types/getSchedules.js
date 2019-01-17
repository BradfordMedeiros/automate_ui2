import React from 'react';
import Header from '../../../../components/overlayContent/programming/components/Header/Header';
import SelectableTypes from '../../../../components/overlayContent/programming/components/SelectableTypes/SelectableTypes';
import { getSchedules as getSchedulesComponent } from  '../../../../components/overlayContent/programming/components/types/Types';

const Schedules = getSchedulesComponent(Header, SelectableTypes);

const getSchedules = (WithSchedules) => (
	<WithSchedules>
		{() => (
			<Schedules />
		)}
	</WithSchedules>
)

export default getSchedules;
