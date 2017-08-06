import React from 'react';
import DatabaseComponent from '../components/database/Database';

const Database = () => {
  return (
    <DatabaseComponent
      databases={[
        {
          name: 'test',
          isActive: true,
        },
        {
          name: 'backup',
        },
        {
          name: 'cool one',
        }
      ]}
    />
  )
};

export default Database;