import React from 'react';
import Button from '@material-ui/core/Button';

const AccountHeader = ({
    isAdmin,
    onLogout,
    imageURL,
    hideAdminSettings,
    showAdminSettings,
    shouldShowAdminSettings,
    showImageUpload
}) => {
    return (
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
        }}
        >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div
                    onClick={showImageUpload} style={{
                        background: `url(${imageURL})`,
                        backgroundSize: 'contain',
                        border: '2px solid black',
                        boxShadow: '0px 0px 8px 1px black inset',
                        cursor: 'pointer',
                        width: 100,
                        height: 100
                    }}
                />
                <div style={{marginLeft: 48}}>{shouldShowAdminSettings ? 'Admin Settings' : 'My Account'}</div>
            </div>
            <div>
                {isAdmin &&
                <Button
                    style={{margin: 4}}
                    variant="raised"
                    onClick={() => {
                        if (shouldShowAdminSettings) {
                            hideAdminSettings();
                        } else {
                            showAdminSettings();
                        }
                    }}
                >
                    {shouldShowAdminSettings ? 'Show My Account' : 'Show Admin Settings'}
                </Button>}
                <Button
                    variant="raised"
                    style={{margin: 4}}
                    onClick={onLogout}
                >
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default AccountHeader;