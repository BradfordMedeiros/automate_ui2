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
          onAdd={({ token, value }) => {
            setEnv(token, value);
          }}
          onDelete={variable => {
            deleteEnv(variable.name);
          }}
          variables={variablesAsArray}
        />
      )
    }}
  </WithEnv>
);

export default Environment;