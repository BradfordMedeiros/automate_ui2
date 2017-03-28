import React from 'react';
import { connect } from 'react-redux';
import Overlay from '../components/overlay/Overlay';

const mapStateToProps = state => ({
  isExpanded: state.getIn(['reducer', 'menuExpanded']),
  Content: state.getIn(['reducer', 'content']),
});

export const container = connect(mapStateToProps)(Overlay);

