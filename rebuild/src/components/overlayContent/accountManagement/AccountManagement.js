import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccountInformation from './components/AccountInformation';
import AdminSettings from './components/AdminSettings';
import UploadImageDialog from './components/UploadImageDialog';
import AccountHeader from './components/AccountHeader';
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
      });
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
          <UploadImageDialog
            showImageUpload={this.state.showImageUpload}
            hideImageUpload={this.hideImageUpload}
            uploadImage={this.uploadImage}
            onSetImageUrl={(_, imageUrl) => {
                        this.setState({
                            imageUrl,
                        });
                    }}
          />
          <AccountHeader
            isAdmin={isAdmin}
            imageURL={imageURL}
            onLogout={onLogout}
            shouldShowAdminSettings={this.state.showAdminSettings}
            showAdminSettings={this.showAdminSettings}
            hideAdminSettings={this.hideAdminSettings}
            showImageUpload={this.showImageUpload}
          />
          {this.state.showAdminSettings ? (
            <AdminSettings
              allowUserCreation={allowUserCreation}
              enableUserAccountCreation={enableUserAccountCreation}
              disableUserAccountCreation={disableUserAccountCreation}
            />
                ) : (
                  <AccountInformation
                    email={email}
                    alias={alias}
                  />
                )}
        </div>
      );
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
