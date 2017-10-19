import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Appbar from '../components/appbar/Appbar';
import { expandMenu, lock, setMenu, setDrawerOpen } from './module';

const ConnectedAppbar = ({ activeGrid, showHideMenu, openDrawer, systemLocked, ...otherProps }) => (
  <Appbar
    {...otherProps}
    title={'automate'}
    showHideMenu={showHideMenu}
    systemLocked={systemLocked}
  />
);

ConnectedAppbar.propTypes = {
  activeGrid: PropTypes.string.isRequired,
  onTileClick: PropTypes.func.isRequired,
  systemLocked: PropTypes.bool,
};

const mapStateToProps = state => ({
  activeGrid: state.getIn(['gridReducer', 'activeGrid']),
  rotateAddIcon: state.getIn(['reducer', 'menuExpanded']),
  isLocked: state.getIn(['reducer', 'isLocked']),
});

const mapDispatchToProps = dispatch => ({
  onAddIconClick: () => dispatch(setDrawerOpen()),
  onRotatedAddIconClick: () => dispatch(expandMenu(false)),
  onToggle: (x, elementIsToggled) => dispatch(lock(!elementIsToggled)),
  onHideMenu: () => dispatch(setMenu()),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(ConnectedAppbar);
