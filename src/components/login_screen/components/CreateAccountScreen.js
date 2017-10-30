
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Back from 'material-ui/svg-icons/navigation/arrow-back';

class CreateAccountScreen extends Component {
  state = {
    username: '',
    password: '',
    alias: '',
  };
  createAccount = () => {
    this.props.onCreateAccount({
      username: this.state.username,
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
        <IconButton onClick={onClickBack} style={{ marginTop: 22, marginRight: 8 }}><Back /></IconButton>
        <TextField
          onChange={(_, username) => {
            this.setState({
              username,
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
        <FlatButton
          label="Create"
          onClick={this.createAccount}
          style={{ marginTop: 22 }}
        />
      </div>
    )
  }
}

CreateAccountScreen.propTypes = {
  onClickBack: PropTypes.func,
  onCreateAccount: PropTypes.func,
};

export default CreateAccountScreen;
