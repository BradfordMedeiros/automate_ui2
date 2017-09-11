import React, { Component, PropTypes } from 'react';
import { Drawer, List, ListItem, MenuItem } from 'material-ui';
import DrawerMenuItem from './components/DrawerMenuItem';

const styles = {
  tiles: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 22,
    padding: 24,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
};

const TileDrawer = ({ open, onTileClick, tileNames, onDrawerStateChange, style }) => (
  <Drawer
    open={open}
    onRequestChange={onDrawerStateChange}
    openSecondary
    docked={false}
    overlayStyle={{ background: 'transparent' }}
    containerStyle={{ background: 'rgb(18,18,18)',...style}}
  >
    <div style={styles.tiles}>tiles</div>
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