import React, { Component } from 'react';
import DatabaseSelection from './components/DatabaseSelection/components/DatabaseSelection/DatabaseSelection';
import DatabaseDialog from './components/DatabaseDialog';
import DatabaseWarning from './components/DatabaseWarning';

class Database extends Component {
    state = {
        selectedIndex: 0,
        copyDialogOpen: false,
        createNewDialogOpen: false,
        showSetActiveDialogOpen: false,

        databaseNameToCopyTarget: undefined,
        databaseNameToCreate: undefined,
    }
    handleCopyDialogClose = () => {
        this.setState({
            copyDialogOpen: false,
        });
    }
    handleCreateNewDialogClose = () => {
        this.setState({
            createNewDialogOpen: false,
        });
    }
    handleCloseSetActiveDialog = () => {
        this.setState({
            showSetActiveDialogOpen: false,
        });
    }

    render() {
        const {
            databases,
            setDatabaseAsActive,
            createNewDatabase,
            copyDatabase,
            uploadDatabase,
            deleteDatabase,
            downloadDatabase,
        } = this.props;

        return (
            <div style={{ height: '100%', display: 'flex' }}>
                <DatabaseSelection
                onDatabaseSelected={selectedIndex => {
                        this.setState({selectedIndex});
                    }}
                    selectedDatabaseIndex={this.state.selectedIndex}
                deleteDatabase={() => {
                        const databaseName = databases[this.state.selectedIndex].name;
                        deleteDatabase(databaseName);
                    }}
                createNewDatabase={() => {
                        this.setState({
                            createNewDialogOpen: true,
                        });
                    }}
                    setDatabaseAsActive={async () => {
                        const databaseName = databases[this.state.selectedIndex].name;
                        console.log('db name active: ', databaseName);
                        await setDatabaseAsActive(databaseName);
                        this.setState({
                            showSetActiveDialogOpen: true,
                        });
                    }}
                onDownloadDatabase={async () => {
                        const databaseName = databases[this.state.selectedIndex].name;
                        downloadDatabase(databaseName);
                    }}
                    onCopyDatabase={() => {
                        console.log('copy database: ', this.state.selectedIndex);
                        this.setState({
                            copyDialogOpen: true,
                        });
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
                        const file = value.files[0];
                        uploadDatabase(file.name, file);
                    }}
                />

                <DatabaseDialog
                    isOpen={this.state.copyDialogOpen}
                onRequestClose={this.handleCopyDialogClose}
                onTextFieldChange={event => {
                        const databaseNameToCopyTarget = event.target.value;
                        this.setState({
                            databaseNameToCopyTarget,
                        });
                    }}
                onSubmit={() => {
                        const databaseNameToCopy = databases[this.state.selectedIndex].name;
                        copyDatabase(databaseNameToCopy, this.state.databaseNameToCopyTarget);
                        this.handleCopyDialogClose();
                    }}
              />
                <DatabaseDialog
                    isOpen={this.state.createNewDialogOpen}
                    onRequestClose={this.handleCreateNewDialogClose}
                    onTextFieldChange={(_, databaseNameToCreate) => {
                        this.setState({
                            databaseNameToCreate,
                        });
                    }}
                    onSubmit={() => {
                        createNewDatabase(this.state.databaseNameToCreate);
                        this.handleCreateNewDialogClose();
                    }}
              />
                <DatabaseWarning
                    showSetActiveDialogOpen={this.state.showSetActiveDialogOpen}
                    handleCloseSetActiveDialog={this.handleCloseSetActiveDialog}
              />
          </div>
        );
    }
}

export default Database;