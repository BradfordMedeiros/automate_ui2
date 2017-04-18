import React from 'react';
import { connect } from 'react-redux';
import Appbar from '../components/appbar/Appbar';
import { expandMenu, lock, setMenu } from './module.js';
import { addTile } from './grid/module';

const ConnectedAppbar = ({ activeGrid, onTileClick, ...otherProps }) => (
  <Appbar
    {...otherProps}
    onTileClick={(tileName) => {
      onTileClick(tileName, activeGrid);
    }}
  />
);

const mapStateToProps = state => ({
  activeGrid: state.getIn(['gridReducer', 'activeGrid']),
  rotateAddIcon: state.getIn(['reducer', 'menuExpanded']),
  isLocked: state.getIn(['reducer', 'isLocked']),
});

const mapDispatchToProps = dispatch => ({
  onRotatedAddIconClick: () => dispatch(expandMenu(false)),
  onTileClick: (tileName, activeGrid) => dispatch(addTile(tileName, activeGrid)),
  onToggle: (x, elementIsToggled) => dispatch(lock(!elementIsToggled)),
  onHideMenu: () => dispatch(setMenu()),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(ConnectedAppbar);
