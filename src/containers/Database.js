import React, { Component } from 'react';
import DatabaseComponent from '../components/database/Database';
import WithData from '../data/WithData';
import fetch from 'isomorphic-fetch';

const WithDatabases = WithData.polling.WithDatabases;

class Database extends Component {
  state = {
    selectedIndex: 0,
  }
  render() {
    return (
      <WithDatabases
        refresh={1000}
      >
        {({
          databases,
          createNewDatabase,
          uploadDatabase,
          deleteDatabase,
          downloadDatabase,
        }) => (

          <div>
            <DatabaseComponent
              onDatabaseSelected={selectedIndex => {
                this.setState({selectedIndex})
              }}
              selectedDatabaseIndex={this.state.selectedIndex}
              deleteDatabase={() => {
                const databaseName = databases[this.state.selectedIndex].name;
                deleteDatabase(databaseName);
              }}
              createNewDatabase={() => {
                console.log('create new database');
                createNewDatabase('test: '+ Math.random());
              }}
              setDatabaseAsActive={() => {
                console.log('set database as active: ', this.state.selectedIndex);
              }}
              onDownloadDatabase={async() => {
                const databaseName = databases[this.state.selectedIndex].name;
                downloadDatabase(databaseName);
              }}
              onCopyDatabase={() => {
                console.log('copy database: ', this.state.selectedIndex);
                createNewDatabase('test'+ Math.floor(Math.random()));

              }}
              onUploadDatabase={() => {
                document.querySelector('#file_upload').click();
              }}
              databases={databases}
            />
            <input
              style={{opacity: 0, width: 0, height: 0}}
              id="file_upload"
              type="file"
              name="myFiles"
              onChange={event => {
                const value = document.querySelector('#file_upload');
                const file = value.files[0]
                uploadDatabase(file.name, file);
              }}
            />
          </div>
        )}
      </WithDatabases>
    )
  }
}

export default Database;