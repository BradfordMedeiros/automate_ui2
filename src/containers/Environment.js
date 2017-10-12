
import React from 'react';
import EnvironmentComponent from '../components/Environment/Environment';

const Environment = () => (
  <EnvironmentComponent
    onDelete={(variable, index) => {
      console.log('variable: ', variable);
      console.log('index: ', index);
    }}
    variables={[
      {
        name: 'circle_token',
        value: '710e06e013d2d08d14b85b4da89377a54ab560ce',
      },
      {
        name: '<unnamed>',
        value: '710e06e013d2d08d14b85b4da89377a54ab560ce',
      }
    ]}
  />
);

export default Environment;