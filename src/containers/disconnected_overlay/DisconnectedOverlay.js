import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DisconnectedOverlay from '../../components/disconnected_overlay/DisconnectedOverlay';
import { setIsConnected, setIsDisconnected } from './module';
import { Mobile, Desktop } from '../../util/ViewportSizing';
import WithData from '../../data/WithData';

const WithStatus = WithData.polling.WithStatus;

class Disconnection extends Component {
  render() {
    const { onSetIsConnected, onSetIsDisconnected } = this.props;
    return (
      <WithStatus
        onSetIsConnected={onSetIsConnected}
        onSetIsDisconnected={onSetIsDisconnected}
      >
        {({ isConnected }) => {
          if (!isConnected) {
            return (
              <div>
                <Desktop><DisconnectedOverlay /></Desktop>
                <Mobile><DisconnectedOverlay headerStyle={{ fontSize: '250%' }} textStyle={{ fontSize: '150%' }} /></Mobile>
              </div>
            );
          }
          return null;
        }}
      </WithStatus>
    );
  }
}

Disconnection.propTypes = {
  onSetIsConnected: PropTypes.func.isRequired,
  onSetIsDisconnected: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSetIsConnected: () => dispatch(setIsConnected()),
  onSetIsDisconnected: () => dispatch(setIsDisconnected()),
});

export const container = connect(null, mapDispatchToProps)(Disconnection);

