import React from 'react';
import { connect } from 'react-redux';
import DisconnectedOverlay from '../../components/disconnected_overlay/DisconnectedOverlay';

const Disconnection = ({ isDisconnected }) => {
  if (isDisconnected) {
    return <DisconnectedOverlay/>;
  }
  return null;
};

const mapStateToProps = state => ({
  isDisconnected: !state.getIn(['connection', 'isConnected']),
});

export const container = connect(mapStateToProps)(Disconnection);




