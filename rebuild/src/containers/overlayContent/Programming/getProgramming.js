import React from 'react';
import ProgrammingComponent from '../../../components/overlayContent/programming/Programming';
import getStates from './types/getStates';
import getActions from './types/getActions';
import getEventLog from './types/getEventLog';
import getEnvironment from './types/getEnvironment';
import getActionScript from './types/getActionScript';
import getSchedules from './types/getSchedules';
import getSequences from './types/getSequences';
import Rules from './types/Rules';

const getProgramming = ({ 
  WithStates, 
  WithActions, 
  WithEvents,
  WithEnv,
  WithSequences,
}) => () => {

  const Sequences = getSequences(WithSequences);

  const labelComponentMap = {
    States: getStates(WithStates),
    Actions: getActions(WithActions),
    Events: getEventLog(WithEvents),
    'Env Variables': getEnvironment(WithEnv),
    Actionscripts: getActionScript(),
    Schedules: getSchedules(),
    Sequences: <Sequences />,
    Rules: <Rules />,
  }

  return (
    <ProgrammingComponent labelComponentMap={labelComponentMap}/>
  )
}

export default getProgramming;