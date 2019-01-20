import React from 'react';
import ProgrammingComponent from '../../../components/overlayContent/programming/Programming/Programming';
import getStates from './components/getStates';
import getActions from './components/getActions';
import getEventLog from './components/getEventLog';
import getEnvironment from './components/getEnvironment';
import getActionScript from './components/getActionScript';
import getSchedules from './components/getSchedules';
import getSequences from './components/getSequences';
import Rules from './components/Rules';

const getProgramming = ({ 
  WithStates, 
  WithActions, 
  WithEvents,
  WithEnv,
  WithSequences,
  WithSchedules,
  WithActionScripts,
}) => () => {

  const Sequences = getSequences(WithSequences);

  const labelComponentMap = {
    States: getStates(WithStates),
    Actions: getActions(WithActions),
    Events: getEventLog(WithEvents),
    'Env Variables': getEnvironment(WithEnv),
    Actionscripts: getActionScript(WithActionScripts),
    Schedules: getSchedules(WithSchedules),
    Sequences: <Sequences />,
    Rules: <Rules />,
  }

  return (
    <ProgrammingComponent labelComponentMap={labelComponentMap}/>
  )
}

export default getProgramming;