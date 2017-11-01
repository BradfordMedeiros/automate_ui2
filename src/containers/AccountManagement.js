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
}) => (
  <WithMyAccount>
    {() => (
      <AccountManagementComponent
        username={activeUserEmail}
        onLogout={onSetLoggedOut}
        onUploadImage={imageUrl => {
          setProfileImage(activeUserEmail, imageUrl);
        }}
      />
    )}
  </WithMyAccount>
);

const mapStateToProps = state => ({
  activeUserEmail: state.getIn(['reducer', 'activeUserEmail']),
});

const mapDispatchToProps = dispatch => ({
  onSetLoggedOut: () => {
    // why not could be safer if i screw shit up later
    // ...plus feels more satisfying for this to take longer...
    window.location.reload();
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(AccountManagement);

export default container;