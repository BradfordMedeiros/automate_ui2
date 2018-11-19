import React from 'react';
import AccountManagementComponent from '../../components/overlayContent/accountManagement/AccountManagement';

const AccountManagement = (WithMyAccount) => ({ 
    userToken,
    onLogout,
}) => (
    <WithMyAccount params={{ token: userToken }}>
        {({ 
            data, 
            setProfileImage,
        }) => {

        const { admin, email, imageURL, isAdmin, alias } = data;
        return (
            <AccountManagementComponent
                email={email}
                alias={alias}
                isAdmin={isAdmin}
                allowUserCreation={admin.allowUserCreation}
                imageURL={imageURL}
                enableUserAccountCreation={() => {

                }}
                disableUserAccountCreation={() => {

                }}
                onLogout={onLogout}
                onUploadImage={imageURL => {
                    setProfileImage(email, imageURL)
                }}
            />
        )
    }}
    </WithMyAccount>
);

export default AccountManagement;
