import React, { Component } from 'react';
import DatabaseComponent from '../components/database/Database';
import WithData from '../data/WithData';

const WithDatabases = WithData.polling.WithDatabases;

const Database = () => (
    <WithDatabases
        refresh={1000}
    >
        {({
              databases,
              setDatabaseAsActive,
              createNewDatabase,
              copyDatabase,
              uploadDatabase,
              deleteDatabase,
              downloadDatabase,
          }) => (
            <DatabaseComponent
                databases={databases}
                setDatabaseAsActive={setDatabaseAsActive}
                createNewDatabase={createNewDatabase}
                copyDatabase={copyDatabase}
                uploadDatabase={uploadDatabase}
                deleteDatabase={deleteDatabase}
                downloadDatabase={downloadDatabase}
            />
        )}
    </WithDatabases>
);

export default Database;