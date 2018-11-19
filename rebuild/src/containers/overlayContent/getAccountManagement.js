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
            enableUserAccountCreation,
            disableUserAccountCreation, 
        }) => {

        const { admin, email, imageURL, isAdmin, alias } = data;
        console.log('allow user creation: ', admin)
        return (
            <AccountManagementComponent
                email={email}
                alias={alias}
                isAdmin={isAdmin}
                imageURL={imageURL}
                allowUserCreation={admin.allowAccountCreation}
                enableUserAccountCreation={() => {
                    enableUserAccountCreation();
                }}
                disableUserAccountCreation={() => {
                    disableUserAccountCreation();
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
