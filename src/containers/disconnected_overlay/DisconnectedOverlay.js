import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import DisconnectedOverlay from '../../components/disconnected_overlay/DisconnectedOverlay';
import { setIsConnected, setIsDisconnected } from './module';
import { Mobile, Desktop } from '../../util/ViewportSizing';


const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const STATUS_URL = `${AUTOMATE_CORE_URL}/status`;
const REFRESH_RATE = 1000;

class Disconnection extends Component {
  componentWillMount() {
    this.handle = setInterval(this.getData, REFRESH_RATE);
  }
  componentWillUnmount() {
    clearInterval(this.handle);
  }
  getData = async () => {
    const { isDisconnected, onSetIsConnected, onSetIsDisconnected } = this.props;
    try {
      const response = await fetch(STATUS_URL, {
        mode: 'cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const status = await response.json();
      window.s = status;
      if (isDisconnected) {
        onSetIsConnected();
      }
    } catch (err) {
      if (!isDisconnected) {
        onSetIsDisconnected();
      }
    }
  }
  handle = undefined;
  render() {
    const { isDisconnected } = this.props;
    if (isDisconnected) {
      return (
        <div>
          <Desktop><DisconnectedOverlay /></Desktop>
          <Mobile><DisconnectedOverlay headerStyle={{ fontSize: '250%' }} textStyle={{ fontSize: '150%' }} /></Mobile>
        </div>
      );
    }
    return null;
  }
}

Disconnection.propTypes = {
  isDisconnected: PropTypes.bool.isRequired,
  onSetIsConnected: PropTypes.func.isRequired,
  onSetIsDisconnected: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isDisconnected: !state.getIn(['connection', 'isConnected']),
});

const mapDispatchToProps = dispatch => ({
  onSetIsConnected: () => dispatch(setIsConnected()),
  onSetIsDisconnected: () => dispatch(setIsDisconnected()),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Disconnection);

