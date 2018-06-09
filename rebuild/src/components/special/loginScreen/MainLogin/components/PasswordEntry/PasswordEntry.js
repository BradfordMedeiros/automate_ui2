import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';

class PasswordEntry extends Component {
  state = {
    password: '',
  };
  login = () => {
    this.props.onLoginWithPassword(this.props.user, this.state.password);
  };
  render() {
    const { isHidden, errorText, onPasswordTextChange } = this.props;
    return (
      <div style={{
              transition: 'opacity 0.1s ease-in',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #1b1b1b',
              // background: 'rgb(10,10,10)',
              background: 'white',
          }}
      >
        <TextField
          type="password"
          className={errorText ? 'shake_error' : undefined}
          helperText={errorText ? <div style={{ height: 30 }}>{errorText}</div> : <div style={{ height: 30 }}></div>}
          error={errorText ? true: false}
          value={this.state.password}
          onChange={(event) => {
                      const password = event.target.value;
                      this.setState({
                          password,
                      });
                      onPasswordTextChange();
                  }}
          disabled={isHidden}
          floatingLabelFixed
          floatingLabelText="password"
        />
        <Button
          primary
          onClick={this.login}
        >
            Login
        </Button>
      </div>
    );
  }
}

PasswordEntry.propTypes = {
  isHidden: PropTypes.bool,
  user: PropTypes.object,
  onLoginWithPassword: PropTypes.func,
  onPasswordTextChange: PropTypes.func,
  errorText: PropTypes.string,
};

export default PasswordEntry;
