import React from 'react';
import StatesComponent from '../../../../components/overlayContent/programming/components/types/States/States';

const States = () => (
    <StatesComponent states={[
      { topic: 'state/temperature/type', value: 'hot' },
      { topic: 'state/temperature/fareneheit', value: '70' },
      { topic: 'state/room0/door_open', value: 'false' },
      { topic: 'state/room1/door_open', value: 'true' },

    ]} />
);

export default States;
