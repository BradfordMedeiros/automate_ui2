import React from 'react';
import DatabaseComponent from '../../components/overlayContent/database/Database';

const Database = () => (
    <DatabaseComponent
        databases={[
          { isActive: true, name: 'some db'  },
          { isActive: false, name: 'some db' },
          { isActive: false, name: 'some db' },
          { isActive: false, name: 'some db' },
          { isActive: false, name: 'some db' },
          { isActive: false, name: 'some db' },
          { isActive: false, name: 'some db' },

        ]}
        setDatabaseAsActive={(database) => {
          console.log('set db as active: ', database);
        }}
        createNewDatabase={(database) => {
          console.log('create database: ', database);
        }}
        copyDatabase={(databaseToCopy, databaseNameTarget) => {
          console.log('create database: from: ', databaseToCopy, ' to: ', databaseNameTarget);
        }}
        uploadDatabase={(database) => {
          console.log('upload database: ', database);
        }}
        deleteDatabase={(database) => {
          console.log('delete database ', database);
        }}
        downloadDatabase={(database) => {
          console.log('download database: ', database);
        }}
    />
);

export default Database;
