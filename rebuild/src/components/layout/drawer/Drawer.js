import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DrawerMenuItem from './components/DrawerMenuItem/DrawerMenuItem';
//import File from './components/File';
import './style.css';

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

class TileDrawer extends Component {
    render() {
        const {
            open,
            onTileClick,
            onUploadClick,
            onUploadFileButtonClick,
            onUploadRequestClose,
            onRequestClose,
            onFormData,
            tileNames,
            onTileNameChange,
            onDrawerStateChange,
            showUploadDialog,
            onDeleteTile,
            onDownloadTile,
            errorText,
            style
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
                <Button className="drawer_upload_button" onClick={onUploadFileButtonClick} >Upload</Button>
                {(tileNames === undefined || tileNames.length === 0) ?
                    <MenuItem>No tiles</MenuItem> :
                    <List>{tileNames.map((value, index) => {
                        return (
                            <DrawerMenuItem
                                onTileClick={onTileClick}
                                onDownloadTile={tile => {
                                    onDownloadTile(tile);
                                }}
                                onDeleteTile={tile => {
                                    onDeleteTile(tile);
                                }}
                                tile={value}
                                tileIndex={index}
                                path={index}
                            />
                        )
                    })}
                    </List>}
            </Drawer>
        );

    }
};

/*
  */



TileDrawer.propTypes = {
open: PropTypes.bool,
onTileClick: PropTypes.func,
errorText: PropTypes.string,
onUploadFileButtonClick: PropTypes.func,
onUploadClick: PropTypes.func,
onUploadRequestClose: PropTypes.func,
onTileNameChange: PropTypes.func,
showUploadDialog: PropTypes.bool,
onDeleteTile: PropTypes.func,
onDownloadTile: PropTypes.func,
onFormData: PropTypes.func,
style: PropTypes.object,
};

export default TileDrawer;
