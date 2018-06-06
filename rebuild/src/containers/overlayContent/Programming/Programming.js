import React from 'react';
import ProgrammingComponent from '../../../components/overlayContent/programming/Programming';
import States from './types/States';
import Actions from './types/Actions';
import Events from './types/EventLog';
import Environment from './types/Environment';
import StateScript from './types/StateScript';
import ActionScript from './types/ActionScript';
import Schedules from './types/Schedules';
import Sequences from './types/Sequences';
import Rules from './types/Rules';
import DeviceInfo from './types/DeviceInfo';

const labelComponentMap = {
  States: <States />,
  Actions: <Actions />,
  Events: <Events />,
  'Env Variables': <Environment />,
  Statescripts: <StateScript />,
  Actionscripts: <ActionScript />,
  Schedules: <Schedules />,
  Sequences: <Sequences />,
  Rules: <Rules />,
  'Device Info': <DeviceInfo />,
};


const Programming = () => (
    <ProgrammingComponent labelComponentMap={labelComponentMap}/>
);

export default Programming;