import React from 'react';
import AccountManagementComponent from '../../components/overlayContent/accountManagement/AccountManagement';

const AccountManagement = () => (
    <AccountManagementComponent
        email="some email"
        alias="some alias"
        isAdmin
        allowUserCreation
        enableUserAccountCreation={() => {

        }}
        disableUserAccountCreation={() => {

        }}
        onLogout={() => {

        }}
        onUploadImage={() => {

        }}
    />
);

export default AccountManagement;
