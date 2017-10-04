import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WithData from '../data/WithData';
import Drawer from '../components/drawer/Drawer';
import { setDrawerOpen } from './module';
import { addTile } from './grid/module/module';

const WithCustomTiles = WithData.polling.WithCustomTiles;

const getContainerDrawer = (tiles, otherProps, onTileClick, activeGrid) => (
  <Drawer
    {...otherProps}
    tileNames={tiles}
    onTileClick={(tile,  url) => {
      if (onTileClick){
        onTileClick(tile, activeGrid, { isCustom: true, url });
      }
    }}
  />
);

const ConnectedDrawer = ({ activeGrid, onTileClick, tileNames, ...otherProps }) => {
  return (
    <WithCustomTiles
      whileLoading={() => getContainerDrawer(tileNames, otherProps, onTileClick, activeGrid)}
    >
      {({ tiles }) => {
        const staticTiles = tileNames;
        const tilesWithCustom = staticTiles.concat({
          label: 'Custom Tiles',
          children: tiles,
        });

        return getContainerDrawer(tilesWithCustom,  otherProps, onTileClick, activeGrid);
      }}
    </WithCustomTiles>

  );
};

const mapStateToProps = state => ({
  open: state.getIn(['reducer', 'drawerOpen']),
  activeGrid: state.getIn(['gridReducer', 'activeGrid']),
});

const mapDispatchToProps = dispatch => ({
  onDrawerStateChange: isOpen => dispatch(setDrawerOpen(isOpen)),
  onTileClick: (tileName, activeGrid, { isCustom = false, url = undefined} = { }) => {
    dispatch(addTile(tileName, activeGrid, { isCustom, url }));
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(ConnectedDrawer);