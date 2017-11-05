import React from 'react';
import { connect } from 'react-redux';
import { setLoggedOut } from './module';
import AccountManagementComponent from '../components/account_management/AccountManagement';
import WithData from '../data/WithData';

const setProfileImage = WithData.requests.setProfileImage;
const WithMyAccount = WithData.polling.WithMyAccount;

const AccountManagement = ({
  activeUserEmail,
  onSetLoggedOut,
  token,
}) => (
  <WithMyAccount
    token={token}
  >
    {({
      username,
      email,
      alias,
      isAdmin,
      admin,
      enableUserAccountCreation,
      disableUserAccountCreation,
    }) => {
      return (
        <AccountManagementComponent
          username={username}
          email={email}
          alias={alias}
          isAdmin={isAdmin}
          allowUserCreation={admin && admin.allowAccountCreation}
          enableUserAccountCreation={enableUserAccountCreation}
          disableUserAccountCreation={disableUserAccountCreation}
          onLogout={onSetLoggedOut}
          onUploadImage={imageUrl => {
            setProfileImage(activeUserEmail, imageUrl);
          }}
        />
      )
    }}
  </WithMyAccount>
);

const mapStateToProps = state => ({
  activeUserEmail: state.getIn(['reducer', 'activeUserEmail']),
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