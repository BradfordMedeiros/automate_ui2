import React from 'react';
import EnvironmentComponent from '../../../../components/overlayContent/programming/components/types/Environment/Environment';

const getEnvironment = () => (
    <EnvironmentComponent
        variables={[
          { name: 'some name', value: 'some value' },
          { name: 'some name', value: 'some value' },
          { name: 'some name', value: 'some value' },
          { name: 'some name', value: 'some value' },
          { name: 'some name', value: 'some value' },
          { name: 'some name', value: 'some value' },
          { name: 'some name', value: 'some value' },

        ]}
        onDelete={(item, index) => {
          console.log('delete index ', index, ' value ', item);
        }}
        onAdd={({ token, value }) => {
          console.log('add: token(', token, ') value: (', value, ')');
        }}
    />
);

export default getEnvironment;