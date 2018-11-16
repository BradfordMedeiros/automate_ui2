import React from 'react';
import ProgrammingComponent from '../../../components/overlayContent/programming/Programming';
import getStates from './types/getStates';
import getActions from './types/getActions';
import getEventLog from './types/getEventLog';
import Environment from './types/Environment';
import StateScript from './types/StateScript';
import ActionScript from './types/ActionScript';
import Schedules from './types/Schedules';
import Sequences from './types/Sequences';
import Rules from './types/Rules';
import DeviceInfo from './types/DeviceInfo';

const getProgramming = ({ WithStates, WithActions, WithEvents }) => () => {
  const labelComponentMap = {
    States: getStates(WithStates),
    Actions: getActions(WithActions),
    Events: getEventLog(WithEvents),
    'Env Variables': <Environment />,
    Statescripts: <StateScript />,
    Actionscripts: <ActionScript />,
    Schedules: <Schedules />,
    Sequences: <Sequences />,
    Rules: <Rules />,
    'Device Info': <DeviceInfo />,
  }

  return (
    <ProgrammingComponent labelComponentMap={labelComponentMap}/>
  )
}

export default getProgramming;