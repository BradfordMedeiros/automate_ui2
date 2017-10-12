
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
            console.log('on add: ');
            console.log('token: ', token);
            console.log('value: ', value);
            setEnv(token, value);
          }}
          onDelete={(variable, index) => {
            deleteEnv(variable.name);
          }}
          variables={variablesAsArray}
        />
      )
    }}
  </WithEnv>
);

export default Environment;