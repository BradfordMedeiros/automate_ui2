import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import UploadDialog from './components/UploadDialog/UploadDialog';
import DrawerMenuItem from './components/DrawerMenuItem/DrawerMenuItem';
import './style.css';

class TileDrawer extends Component {
  state = {
    showUploadDialog: false,
  };

  render() {
    const {
      open,
      onTileClick,
      tileNames,
      onDeleteTile,
      onDownloadTile,
    } = this.props;

    return (
        <Drawer
            open={open}
            anchor="right"
            variant="persistent"
            classes={{
              paper: 'drawer_main_panel',
            }}
        >
          <Button
              className="drawer_upload_button"
              onClick={() => {
                this.setState({
                  showUploadDialog: true,
                });
              }}
          >Upload
          </Button>
          <UploadDialog
              showUploadDialog={this.state.showUploadDialog}
              onRequestClose={() => {
                this.setState({
                  showUploadDialog: false,
                });
              }}
              onUploadFileButtonClick={() => {
                console.log('upload file  clicked'); // eslint-disable-line
              }}
          />
          {(tileNames === undefined || tileNames.length === 0) ?
              <MenuItem>No tiles</MenuItem> :
              <List>{tileNames.map((value, index) => (
                  <DrawerMenuItem
                      onTileClick={onTileClick}
                      onDownloadTile={(tile) => {
                        onDownloadTile(tile);
                      }}
                      onDeleteTile={(tile) => {
                        onDeleteTile(tile);
                      }}
                      tile={value}
                      tileIndex={index}
                      path={index}
                  />
              ))}
              </List>}
        </Drawer>
    );
  }
}

TileDrawer.propTypes = {
  open: PropTypes.bool,
  onTileClick: PropTypes.func,
  onDeleteTile: PropTypes.func,
  onDownloadTile: PropTypes.func,
  tileNames: PropTypes.arrayOf(PropTypes.any),
};

export default TileDrawer;
