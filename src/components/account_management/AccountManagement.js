
import React from 'react';
import Divider from 'material-ui/Divider';

const AccountManagement = () => (
  <div style={{
    background: 'rgb(30,30,30)',
    width: '100%',
    height: '100%',
    fontSize: 28,
    color: 'whitesmoke',
    padding: 28,
    paddingTop: 30,
  }}>
    <div style={{
      fontSize: 28,
      color: 'whitesmoke',
      padding: 48,
      paddingTop: 30,
    }}>
      My Account
    </div>
    <Divider />
    <div style={{ margin: 20 }}>Username</div>
    <div>bradford medeiros</div>
    <div style={{ margin: 20 }}>Email Address</div>
    <div>bradmedeiros0@gmail.com</div>
  </div>

);

export default AccountManagement;