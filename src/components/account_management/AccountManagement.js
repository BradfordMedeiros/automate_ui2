
import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import AccountInformation from './components/AccountInformation';
import AdminSettings from './components/AdminSettings';
import './style.css';

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
      email,
      alias,
      imageURL,
      isAdmin,
      allowUserCreation,
      enableUserAccountCreation,
      disableUserAccountCreation,
      onLogout,
    } = this.props;
    return (
      <div id="account_management">
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
            <div onClick={this.showImageUpload} style={{ background: `url(${imageURL})`, backgroundSize: 'contain', border: '4px solid black', boxShadow: '0px 0px 8px 1px black inset', cursor: 'pointer', width: 100, height: 100 }} />
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
            <RaisedButton style={{ margin: 4 }} label="Logout" onClick={onLogout} />
          </div>
        </div>
        {this.state.showAdminSettings ? (
          <AdminSettings
            allowUserCreation={allowUserCreation}
            enableUserAccountCreation={enableUserAccountCreation}
            disableUserAccountCreation={disableUserAccountCreation}
          />
        ): (
          <AccountInformation
            email={email}
            alias={alias}
          />
        )}
      </div>
    )
  }
}

AccountManagement.propTypes = {
  email: PropTypes.string,
  alias: PropTypes.string,
  imageURL: PropTypes.string,
  isAdmin: PropTypes.bool,
  allowUserCreation: PropTypes.bool,
  enableUserAccountCreation: PropTypes.func,
  disableUserAccountCreation: PropTypes.func,
  onLogout: PropTypes.func,
  onUploadImage: PropTypes.func,
};

export default AccountManagement;