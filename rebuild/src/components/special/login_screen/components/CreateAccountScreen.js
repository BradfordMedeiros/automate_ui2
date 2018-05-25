import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Back from '@material-ui/icons/NavigateBefore';

class CreateAccountScreen extends Component {
  state = {
    email: '',
    password: '',
    alias: '',
  };
  createAccount = () => {
    this.props.onCreateAccount({
      email: this.state.email,
      password: this.state.password,
      alias: this.state.alias,
    })
  };
  render() {
    const { onClickBack, onCreateAccount } = this.props;

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
          <div style={{ color: 'blue' }}>this screen all messed up</div>
        <IconButton onClick={onClickBack} style={{ marginTop: 22, marginRight: 8 }}><Back /></IconButton>
        <TextField
          onChange={(_, email) => {
            this.setState({
              email,
            })
          }}
          floatingLabelFixed
          floatingLabelText="email"
          hintText="email used to login"
        />
        <TextField
          onChange={(_, password) => {
            this.setState({
              password,
            });
          }}
          floatingLabelFixed
          floatingLabelText="password"
          hintText="unrestricted character domain"
        />
        <TextField
          onChange={(_, alias) => {
            this.setState({
              alias,
            })
          }}
          floatingLabelFixed
          floatingLabelText="alias"
          hintText="Used to identify accounts"
        />
        <Button
          onClick={this.createAccount}
          style={{ marginTop: 22 }}
        >
            Create
        </Button>
      </div>
    )
  }
}

CreateAccountScreen.propTypes = {
  onClickBack: PropTypes.func,
  onCreateAccount: PropTypes.func,
};

export default CreateAccountScreen;
