import React from 'react';
import ProgrammingComponent from '../../../components/overlayContent/programming/Programming';
import getStates from './types/getStates';
import getActions from './types/getActions';
import getEventLog from './types/getEventLog';
import getEnvironment from './types/getEnvironment';
import ActionScript from './types/ActionScript';
import Schedules from './types/Schedules';
import Sequences from './types/Sequences';
import Rules from './types/Rules';
import getDeviceInfo from './types/getDeviceInfo';

const getProgramming = ({ 
  WithStates, 
  WithActions, 
  WithEvents,
  WithDeviceInfo,
  WithEnv,
}) => () => {
  const labelComponentMap = {
    States: getStates(WithStates),
    Actions: getActions(WithActions),
    Events: getEventLog(WithEvents),
    'Env Variables': getEnvironment(WithEnv),
    Actionscripts: <ActionScript />,
    Schedules: <Schedules />,
    Sequences: <Sequences />,
    Rules: <Rules />,
    'Device Info': getDeviceInfo(WithDeviceInfo),
  }

  return (
    <ProgrammingComponent labelComponentMap={labelComponentMap}/>
  )
}

export default getProgramming;