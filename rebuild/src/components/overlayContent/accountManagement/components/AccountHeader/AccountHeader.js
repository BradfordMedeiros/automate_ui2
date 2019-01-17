import React from 'react';
import Button from '@material-ui/core/Button';
import './style.css'

const AccountHeader = ({
  isAdmin,
  onLogout,
  imageURL,
  hideAdminSettings,
  showAdminSettings,
  shouldShowAdminSettings,
  showImageUpload,
}) => (
  <div className="account_header_outer">
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="account_header_image" onClick={showImageUpload} style={{ background: `url(${imageURL})` }}/>
      <div style={{ marginLeft: 48 }}>{shouldShowAdminSettings ? 'Admin Settings' : 'My Account'}</div>
    </div>
    <div className="account_header_buttons_outer">
      {isAdmin &&
      <Button
        style={{ margin: 4 }}
        variant="raised"
        className="account_header_button"
        onClick={() => {
          if (shouldShowAdminSettings) {
              hideAdminSettings();
          } else {
              showAdminSettings();
          }
        }}>
        {shouldShowAdminSettings ? 'Show My Account' : 'Show Admin Settings'}
      </Button>}
      <Button className="account_header_button" variant="raised" style={{ margin: 4 }} onClick={onLogout}>Logout</Button>
    </div>
  </div>
);

export default AccountHeader;
