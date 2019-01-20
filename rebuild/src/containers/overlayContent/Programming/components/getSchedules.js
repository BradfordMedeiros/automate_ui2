import React from 'react';
import { Schedules } from  '../../../../components/overlayContent/programming/types/Types';

const getSchedules = (WithSchedules) => (
	<WithSchedules>
		{() => (
			<Schedules />
		)}
	</WithSchedules>
)

export default getSchedules;
