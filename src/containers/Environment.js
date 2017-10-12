
import React from 'react';
import EnvironmentComponent from '../components/Environment/Environment';
import WithData from '../data/WithData';

const WithEnv = WithData.polling.WithEnv;


const Environment = () => (
  <WithEnv
    refresh={2000}
  >
    {({
      variables,
      setEnv,
      deleteEnv,
    }) => {
      const variablesAsArray = Object.keys(variables).map(variable => ({
        name: variable,
        value: variables[variable],
      }));

      return (
        <EnvironmentComponent
          onDelete={(variable, index) => {
            console.log('variable: ', variable);
            console.log('index: ', index);
          }}
          variables={variablesAsArray}
        />
      )
    }}
  </WithEnv>
);

export default Environment;