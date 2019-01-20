import React from 'react';
import { Schedules } from  '../../../../components/overlayContent/programming/components/types/Types';

const getSchedules = (WithSchedules) => (
	<WithSchedules>
		{() => (
			<Schedules />
		)}
	</WithSchedules>
)

export default getSchedules;
