import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Appbar from '../components/appbar/Appbar';
import { expandMenu, lock, setMenu } from './module';
import { addTile } from './grid/module';

const ConnectedAppbar = ({ activeGrid, onTileClick, ...otherProps }) => (
  <Appbar
    {...otherProps}
    title={'automate'}
    onTileClick={(tileName) => {
      onTileClick(tileName, activeGrid);
    }}
  />
);

ConnectedAppbar.propTypes = {
  activeGrid: PropTypes.string.isRequired,
  onTileClick: PropTypes.func.isRequired,
};

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
