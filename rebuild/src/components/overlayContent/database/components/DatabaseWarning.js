import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const DatabaseWarning = ({ showSetActiveDialogOpen, handleCloseSetActiveDialog }) => (
  <Dialog open={showSetActiveDialogOpen}>
    <div>The system will be loaded with the selected database when it is restarted.</div>
    <div>This is a current limitation that will be fixed.</div>
    <Button
      primary
      variant="raised"
      onClick={handleCloseSetActiveDialog}
      fullWidth
    >
            OK
    </Button>
  </Dialog>
);

export default DatabaseWarning;
