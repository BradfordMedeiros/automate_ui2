import React, { Component } from 'react';
import DatabaseComponent from '../components/database/Database';

class Database extends Component {
  state = {
    selectedIndex: 0,
  }
  render() {
    return (
      <DatabaseComponent
        onDatabaseSelected={selectedIndex => { this.setState({ selectedIndex }) }}
        selectedDatabaseIndex={this.state.selectedIndex}
        deleteDatabase={() => {
          console.log('delete database: ', this.state.selectedIndex);
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
        onUploadDatabase={() => {
          console.log('upload new');
        }}
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
  }
}

export default Database;