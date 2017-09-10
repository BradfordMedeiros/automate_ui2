import React, { Component, PropTypes } from 'react';
import { Drawer, List, ListItem, Subheader, Divider, MenuItem } from 'material-ui';
import DrawerMenuItem from './components/DrawerMenuItem';

const TileDrawer = ({ open, onTileClick, tileNames, onDrawerStateChange, style }) => (
  <Drawer
    open={open}
    onRequestChange={onDrawerStateChange}
    openSecondary
    docked={false}
    swipeAreaWidth={30}
    overlayStyle={{ background: 'transparent' }}
    containerStyle={style}
  >
    <Subheader>Tiles</Subheader>
    <Divider />
    { (tileNames === undefined || tileNames.length === 0) ?
      <MenuItem>No tiles</MenuItem> :
      <List>{tileNames.map(
        (value, index) => (
          <DrawerMenuItem
            onTileClick={onTileClick}
            tile={value}
            tileIndex={index}
            path={index}
          />
        ))}
      </List>
    }
  </Drawer>
);

TileDrawer.propTypes = {
  open: PropTypes.bool,
  onTileClick: PropTypes.func,
  style: PropTypes.object,
};

export default TileDrawer;