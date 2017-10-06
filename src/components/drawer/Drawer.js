import React, { Component, PropTypes } from 'react';
import { Drawer, List, MenuItem, Dialog, TextField, FlatButton } from 'material-ui';
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
  onUploadFileButtonClick,
  onUploadRequestClose,
  onFormData,
  tileNames,
  onTileNameChange,
  onDrawerStateChange,
  showUploadDialog,
  errorText,
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
      open={showUploadDialog}
      onRequestClose={onUploadRequestClose}
    >
      Tile Name:
        <TextField
          errorText={errorText}
          onChange={(_, text) => {
            onTileNameChange(text);
          }}
        />
        <File
          onChange={form => {
            onFormData(form);
          }}
        />
      <FlatButton label="Upload" onClick={onUploadFileButtonClick} />
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
  errorText: PropTypes.string,
  onUploadFileButtonClick: PropTypes.func,
  onUploadClick: PropTypes.func,
  onUploadRequestClose: PropTypes.func,
  onTileNameChange: PropTypes.func,
  showUploadDialog: PropTypes.bool,
  onFormData: PropTypes.func,
  style: PropTypes.object,
};

export default TileDrawer;