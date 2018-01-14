import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import GenericOverlay from '../genericOverlayInner/GenericOverlay';
import './style.css';

const renderField = (title, value) => (
  <div className="device_info_container">
    <Subheader>{title}: </Subheader>
    <div className="device_info_value" >{value}</div>
  </div>
);

class DeviceInfo extends Component {
  state = {
    dialogOpen: false,
    systemName: 'automate',
  };
  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true,
    });
  };
  handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
    });
  };
  confirmLock = () => {
    const { onClickConfirmLockSystem } = this.props;
    if (onClickConfirmLockSystem){
      onClickConfirmLockSystem(this.state.systemName);
    }
    this.handleDialogClose();
  };
  render() {
    const {
      ipAddress,
      macAddress,
      automateCoreVersion,
    } = this.props;

    return (
      <GenericOverlay title="Automate Core Info">
        {renderField('IP Address', ipAddress)}
        {renderField('Mac Address', macAddress)}
        {renderField('Core Version', automateCoreVersion)}

        <div style={{ width: '100%',  display: 'flex', justifyContent: 'center'}}>
        <RaisedButton
          primary
          label="Lock System"
          onClick={this.handleDialogOpen}
        />
        <Dialog
          open={this.state.dialogOpen}
          onRequestClose={this.handleDialogClose}
          actions={[
            <FlatButton
              onClick={this.handleDialogClose}
              secondary
              label="cancel"
            />,
            <FlatButton
              onClick={this.confirmLock}
              primary
              label="confirm"
            />,
          ]}
        >
          <Subheader>WARNING</Subheader>
          <Divider />
          <br />
          Locking the system will prevent you from configuring automate.  Basically, the system as it exists with the current set of
          conditions, sequences, etc, as well as the current tile configuration will be saved.  Menus will be hidden.  Fundamentally, the system will surive as is,
          but the majority of UI tools available will be gone (except for the current set of tiles). <b>This operation
          cannot be undone from the gui </b> and is only possible to be undone with file system access (ssh or otherwise) to the device. To unlock the system
          simply delete the file on the root called lock, and then reboot the system.

          <br />
          <i><b>do not do this unless you know why you are doing it</b></i>
          <div>
          <TextField
            floatingLabelText="System Name"
            value={this.state.systemName}
            onChange={(_, systemName) => {
              this.setState({
                systemName,
              })
            }}
          />
          </div>
        </Dialog>
        </div>
      </GenericOverlay>
    );
  }
}

DeviceInfo.propTypes = {
  automateCoreVersion: PropTypes.string.isRequired,
  ipAddress: PropTypes.string.isRequired,
  macAddress: PropTypes.string.isRequired,
  onClickConfirmLockSystem: PropTypes.func,
};

export default DeviceInfo;
