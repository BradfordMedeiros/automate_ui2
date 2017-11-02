
import React, { Component, PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import AccountInformation from './components/AccountInformation';
import AdminSettings from './components/AdminSettings';

class AccountManagement extends Component {
  state = {
    showImageUpload: false,
    imageUrl: '',
    showAdminSettings: false,
  };
  showImageUpload = () => {
    this.setState({
      showImageUpload: true,
    })
  };
  hideImageUpload = () => {
    this.setState({
      showImageUpload: false,
    });
  };
  uploadImage = () => {
    this.props.onUploadImage(this.state.imageUrl);
    this.hideImageUpload();
  };
  showAdminSettings = () => {
    this.setState({
      showAdminSettings: true,
    });
  };
  hideAdminSettings = () => {
    this.setState({
      showAdminSettings: false,
    });
  };
  render() {
    const {
      username,
      email,
      alias,
      isAdmin,
      allowUserCreation,
      enableUserAccountCreation,
      disableUserAccountCreation,
      onLogout,
    } = this.props;
    return (
      <div style={{
        background: 'rgb(30,30,30)',
        width: '100%',
        height: '100%',
        fontSize: 28,
        color: 'whitesmoke',
        padding: 28,
        paddingTop: 30,
      }}>
        <Dialog
          open={this.state.showImageUpload}
          onRequestClose={this.hideImageUpload}
          actions={[
            <FlatButton onClick={this.hideImageUpload} label="Cancel" />,
            <FlatButton onClick={this.uploadImage} label="Upload" />
          ]}
        >
          <div>
            Select image url to upload
          </div>
          <TextField
            fullWidth
            floatingLabelText="Image URL"
            onChange={(_, imageUrl) => {
              this.setState({
                imageUrl,
              })
            }}
          />
        </Dialog>
        <div style={{
          fontSize: 28,
          color: 'whitesmoke',
          padding: 48,
          paddingLeft: 0,
          paddingTop: 30,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          height: 100,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '1px solid black', cursor: 'pointer', width: 100, height: 100 }} />
            <div style={{ marginLeft: 48 }}>{this.state.showAdminSettings ? 'Admin Settings': 'My Account'}</div>
          </div>
          <div>
            {isAdmin && <RaisedButton
              style={{ margin: 4 }}
              label={this.state.showAdminSettings ? 'Show My Account': 'Show Admin Settings'}
              onClick={() =>{
                if (this.state.showAdminSettings){
                  this.hideAdminSettings();
                }else{
                  this.showAdminSettings();
                }
              }}
            />}
            <RaisedButton style={{ margin: 4 }} label="Set Profile Icon" onClick={this.showImageUpload} />
            <RaisedButton style={{ margin: 4 }} label="Logout" onClick={onLogout} />
          </div>
        </div>
        <Divider />
        {this.state.showAdminSettings ? (
          <AdminSettings
            allowUserCreation={allowUserCreation}
            enableUserAccountCreation={enableUserAccountCreation}
            disableUserAccountCreation={disableUserAccountCreation}
          />
        ): (
          <AccountInformation
            username={username}
            email={email}
            alias={alias}
          />
        )}
      </div>
    )
  }
}

AccountManagement.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  alias: PropTypes.string,
  isAdmin: PropTypes.bool,
  allowUserCreation: PropTypes.bool,
  enableUserAccountCreation: PropTypes.func,
  disableUserAccountCreation: PropTypes.func,
  onLogout: PropTypes.func,
  onUploadImage: PropTypes.func,
};

export default AccountManagement;