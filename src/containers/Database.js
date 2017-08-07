import React, { Component } from 'react';
import DatabaseComponent from '../components/database/Database';
import WithData from '../data/WithData';

const WithDatabases = WithData.polling.WithDatabases;

class Database extends Component {
  state = {
    selectedIndex: 0,
    databases: [
      {
        name: 'test',
      },
      {
        name: 'backup',
      },
      {
        name: 'cool one',
      }
    ]
  }
  render() {
    return (
      <WithDatabases
        refresh={1000}
      >
        {({ databases, deleteDatabase }) => (
          <DatabaseComponent
            onDatabaseSelected={selectedIndex => { this.setState({ selectedIndex }) }}
            selectedDatabaseIndex={this.state.selectedIndex}
            deleteDatabase={() => {
              const databaseName = databases[this.state.selectedIndex].name;
              deleteDatabase(databaseName);
            }}
            createNewDatabase={() => {
              console.log('create new database');
            }}
            setDatabaseAsActive={() => {
              console.log('set database as active: ', this.state.selectedIndex);
            }}
            onDownloadDatabase={() => {
              console.log('download database: ', this.state.selectedIndex);
            }}
            onCopyDatabase={() => {
              console.log('copy database: ', this.state.selectedIndex);
            }}
            onUploadDatabase={() => {
              this.state.databases.push({
                name: `db:${Math.random()}`,
              })
              this.setState({
                databases: this.state.databases,
              })
            }}
            databases={databases}
          />
        )}
      </WithDatabases>

    )
  }
}

export default Database;