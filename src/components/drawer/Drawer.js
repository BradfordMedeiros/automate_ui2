import React, { Component, PropTypes } from 'react';
import { Drawer, List, ListItem, MenuItem, Dialog, TextField } from 'material-ui';
import DrawerMenuItem from './components/DrawerMenuItem';
import File from './components/File';

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
  upload: {
    display: 'flex',
    justifyContent: 'center',
    padding: 18,
    color: 'rgb(210,210,210)',
    cursor: 'pointer',
  }
};

const TileDrawer = ({
  open,
  onTileClick,
  onUploadClick,
  onFormData,
  tileNames,
  onDrawerStateChange,
  style
}) => (
  <Drawer
    open={open}
    onRequestChange={onDrawerStateChange}
    openSecondary
    docked={false}
    overlayStyle={{ background: 'transparent' }}
    containerStyle={{ background: 'rgb(18,18,18)',...style}}
  >
    <Dialog
      open={true}
    >
      Tile Name: <TextField />
      <File
        onChange={form => {
          onFormData(form);
        }}
      />

    </Dialog>
    <div style={styles.tiles}>tiles</div>
    <div
      onClick={onUploadClick}
      style={styles.upload}
    >
      Upload New
    </div>
    {(tileNames === undefined || tileNames.length === 0) ?
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
      </List>}
  </Drawer>
);

TileDrawer.propTypes = {
  open: PropTypes.bool,
  onTileClick: PropTypes.func,
  onUploadClick: PropTypes.func,
  onFormData: PropTypes.func,
  style: PropTypes.object,
};

export default TileDrawer;