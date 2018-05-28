import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FileFileDownload from '@material-ui/icons/FileDownload';
import FileCloud from '@material-ui/icons/CloudDownload';
import ActionDelete from '@material-ui/icons/Delete';
import './style.css';

class NestedMenuItem extends Component {
    state = {
        open: false,
    };
    handleClick = () => {
        this.setState({
            open: !this.state.open,
        });
    };
    render() {
        const { tile, ...otherProps } = this.props;
        return ([
            <ListItem button onClick={this.handleClick}>
                <div className="drawer_menu_item_toggle_header">{tile.label}</div>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>,
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div">
                  {tile.children && tile.children.map(tileName => (
                        <DrawerMenuItem
                            tile={tileName}
                    {...otherProps}
                  />
                    ))}
                </List>
          </Collapse>
        ]);
    }
}

const DrawerMenuItem = ({ tile, onTileClick, onDeleteTile, onDownloadTile }) => {
    if (typeof (tile) === typeof ({})  && !tile.url) {
        return <NestedMenuItem tile={tile} onTileClick={onTileClick} onDeleteTile={onDeleteTile} onDownloadTile={onDownloadTile}  />;
    }
    if (typeof(tile) === typeof({}) && tile.url) {
        return (
            <ListItem
                button
            className="drawer_menu_item_base"
            onClick={() => {
                    onTileClick(tile);
                }}
          >
            {tile.name}
                <div>
                    <IconButton
                    onClick={event => {
                            event.stopPropagation();
                            onDeleteTile(tile);
                        }}
                  >
                        <ActionDelete />
                  </IconButton>
                <IconButton
                    onClick={event => {
                            event.stopPropagation();
                            onDownloadTile(tile);
                        }}
                  >
                        <FileFileDownload />
                  </IconButton>
              </div>
          </ListItem>
        );
    }
    return (
        <ListItem
            button
            className="drawer_menu_item_base"
            onClick={() => { onTileClick(tile); }}
      >
            {tile}
      </ListItem>
    );
};

export default  DrawerMenuItem;