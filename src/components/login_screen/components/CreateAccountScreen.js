
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Back from 'material-ui/svg-icons/navigation/arrow-back';

class CreateAccountScreen extends Component {
  render() {
    const { onClickBack } = this.props;

    return (
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <IconButton onClick={onClickBack} style={{ marginTop: 22, marginRight: 8 }}><Back /></IconButton>
        <TextField floatingLabelFixed  floatingLabelText="email" hintText="email used to login"  />
        <TextField floatingLabelFixed  floatingLabelText="password" hintText="unrestricted character domain" />
        <FlatButton style={{ marginTop: 22 }} label="Create" />
      </div>
    )
  }
}

CreateAccountScreen.propTypes = {
  onClickBack: PropTypes.func,
};

export default CreateAccountScreen;
