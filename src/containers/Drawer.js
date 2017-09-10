import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Drawer from '../components/drawer/Drawer';
import { setDrawerOpen } from './module';
import { addTile } from './grid/module';


const ConnectedDrawer = ({ activeGrid, onTileClick, ...otherProps }) => (
  <Drawer
    {...otherProps}
    onTileClick={tile => {
      if (onTileClick){
        onTileClick(tile, activeGrid);
      }
    }}
  />
);

const mapStateToProps = state => ({
  open: state.getIn(['reducer', 'drawerOpen']),
  activeGrid: state.getIn(['gridReducer', 'activeGrid']),
});

const mapDispatchToProps = dispatch => ({
  onDrawerStateChange: isOpen => dispatch(setDrawerOpen(isOpen)),
  onTileClick: (tileName, activeGrid) => dispatch(addTile(tileName, activeGrid)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(ConnectedDrawer);