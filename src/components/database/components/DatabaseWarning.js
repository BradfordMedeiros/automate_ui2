import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const DatabaseWarning = ({ showSetActiveDialogOpen, handleCloseSetActiveDialog }) => (
    <Dialog
        open={showSetActiveDialogOpen}
        style={{ display: 'flex', flexDirection: 'column' }}
    >
        <div>The system will be loaded with the selected database when it is restarted.</div>
        <div>This is a current limitation that will be fixed.</div>
        <RaisedButton
            primary
            onClick={handleCloseSetActiveDialog}
            label={"OK"}
            fullWidth
            style={{ marginTop: 12 }}
        />
    </Dialog>
);

export default DatabaseWarning;