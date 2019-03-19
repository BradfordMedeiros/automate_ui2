import React from 'react';
import ProgrammingComponent from '../../../components/overlayContent/programming/Programming/Programming';
import getStates from './components/getStates';
import getActions from './components/getActions';
import getEventLog from './components/getEventLog';
import getEnvironment from './components/getEnvironment';
import getActionScript from './components/getActionScript';
import getSequences from './components/getSequences';

const getProgramming = ({ 
  WithStates, 
  WithActions, 
  WithEvents,
  WithEnv,
  WithSequences,
  WithActionScripts,
}) => () => {

  const Sequences = getSequences(WithSequences);

  const labelComponentMap = {
    States: getStates(WithStates),
    Actions: getActions(WithActions),
    Events: getEventLog(WithEvents),
    'Env Variables': getEnvironment(WithEnv),
    Actionscripts: getActionScript(WithActionScripts),
    Sequences: <Sequences />,
  }

  return (
    <ProgrammingComponent labelComponentMap={labelComponentMap}/>
  )
}

export default getProgramming;