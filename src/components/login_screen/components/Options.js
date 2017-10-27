
import React from 'react';
import TextField from 'material-ui/TextField';
import  FlatButton from 'material-ui/FlatButton';

const Options = ({ isHidden }) => (
  <div  style={{
    transition: 'opacity 0.1s ease-in',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #1b1b1b',
    background: 'rgb(10,10,10)',
  }}>
    <TextField disabled={isHidden} floatingLabelFixed floatingLabelText="password" />
    <FlatButton primary label="Login" />
  </div>
);

export default Options;
