import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import DisconnectedOverlay from '../../components/disconnected_overlay/DisconnectedOverlay';
import { setIsConnected, setIsDisconnected } from './module';
import { Mobile, Desktop } from '../../util/ViewportSizing';


const AUTOMATE_CORE_URL = 'http://127.0.0.1:9000';
const ACTIONS_URL = `${AUTOMATE_CORE_URL}/status`;
const REFRESH_RATE = 1000;

class Disconnection extends Component {
  handle = undefined;
  getData = async () => {
    const { isDisconnected, setIsConnected, setIsDisconnected } = this.props;
    try {
      const response = await fetch(ACTIONS_URL, {
        mode: 'cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const states = await response.json();
      if (isDisconnected) {
        setIsConnected();
      }
    } catch (err) {
      if (!isDisconnected) {
        setIsDisconnected();
      }
    }
  }
  componentWillMount() {
    this.handle = setInterval(this.getData, REFRESH_RATE);
  }
  componentWillUnmount() {
    clearInterval(this.handle);
  }
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

const mapStateToProps = state => ({
  isDisconnected: !state.getIn(['connection', 'isConnected']),
});

const mapDispatchToProps = dispatch => ({
  setIsConnected: () => dispatch(setIsConnected()),
  setIsDisconnected: () => dispatch(setIsDisconnected()),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Disconnection);

