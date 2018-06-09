import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Back from '@material-ui/icons/NavigateBefore';
import './style.css';

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
    });
  };
  render() {
    return (
      <div className="create_account_outer">
        <IconButton onClick={this.props.onClickBack} style={{ marginTop: 22, marginRight: 8 }}><Back /></IconButton>
        <TextField
          onChange={event => {
            const email = event.target.value;
            this.setState({
              email,
            });
          }}
          label="email"
          helperText="email used to login"
        />
        <TextField
          onChange={event => {
            const password = event.target.value;
            this.setState({
              password,
            });
          }}
          label="password"
          helperText="unrestricted character domain"
        />
        <TextField
          onChange={event => {
            const alias = event.target.value;
            this.setState({
              alias,
            });
          }}
          label="alias"
          helperText="Used to identify accounts"
        />
        <Button onClick={this.createAccount} style={{ marginTop: 22 }}>
            Create
        </Button>
      </div>
    );
  }
}

CreateAccountScreen.propTypes = {
  onClickBack: PropTypes.func,
  onCreateAccount: PropTypes.func,
};

export default CreateAccountScreen;
