import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WithData from '../data/WithData';
import Drawer from '../components/drawer/Drawer';
import { setDrawerOpen } from './module';
import { addTile } from './grid/module/module';

const WithCustomTiles = WithData.polling.WithCustomTiles;

const ConnectedDrawer = ({ activeGrid, onTileClick, tileNames, ...otherProps }) => {
  return (
    <WithCustomTiles
      whileLoading={() => (
        <Drawer
          {...otherProps}
          tileNames={tileNames}
          onTileClick={tile => {
            if (onTileClick){
              onTileClick(tile, activeGrid);
            }
          }}
        />
      )}
    >
      {({ tiles }) => {
        const staticTiles = tileNames;
        const tilesWithCustom = staticTiles.concat({
          label: 'Custom Tiles',
          children: tiles.map(tile => tile.name),
          url: tiles.map(tile => tile.url),
          isCustom: true,
        });

        return (
          <Drawer
            {...otherProps}
            tileNames={tilesWithCustom}
            onTileClick={tile => {
              if (onTileClick){
                onTileClick(tile, activeGrid);
              }
            }}
          />
        )
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
  onTileClick: (tileName, activeGrid) => dispatch(addTile(tileName, activeGrid)),
});

export const container = connect(mapStateToProps, mapDispatchToProps)(ConnectedDrawer);