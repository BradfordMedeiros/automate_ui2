import React from 'react';
import { connect } from 'react-redux';
import { setLoggedOut } from './module';
import AccountManagementComponent from '../components/account_management/AccountManagement';
import WithData from '../data/WithData';

const WithMyAccount = WithData.polling.WithMyAccount;

const AccountManagement = ({
  onSetLoggedOut,
  token,
}) => (
  <WithMyAccount
    token={token}
  >
    {({
      email,
      alias,
      imageURL,
      isAdmin,
      admin,
      enableUserAccountCreation,
      disableUserAccountCreation,
      setProfileImage,
    }) => {
      return (
        <AccountManagementComponent
          email={email}
          alias={alias}
          imageURL={imageURL}
          isAdmin={isAdmin}
          allowUserCreation={admin && admin.allowAccountCreation}
          enableUserAccountCreation={enableUserAccountCreation}
          disableUserAccountCreation={disableUserAccountCreation}
          onLogout={onSetLoggedOut}
          onUploadImage={imageUrl => {
            setProfileImage(email, imageUrl);
          }}
        />
      )
    }}
  </WithMyAccount>
);

const mapStateToProps = state => ({
  token: state.getIn(['reducer', 'token']),
});

const mapDispatchToProps = dispatch => ({
  onSetLoggedOut: () => {
    // why not could be safer if i screw shit up later
    // ...plus feels more satisfying for this to take longer...
    window.localStorage.removeItem('automate:login:token');  // if this is in storage, we will automatically log the user back in
    window.location.reload();
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(AccountManagement);

export default container;