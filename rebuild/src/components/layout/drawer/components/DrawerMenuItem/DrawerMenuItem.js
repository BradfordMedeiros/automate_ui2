import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import './style.css';

class NestedMenuItem extends Component  {
    state = {
        open: false,
    };
    handleClick = () => {
        this.setState({
            open: !this.state.open,
        })
    };
    render() {
        const {tile} = this.props;
        return (
            [
                <ListItem button onClick={this.handleClick}>
                    <div className="drawer_menu_item_toggle_header">{tile.label}</div>
                    {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>,
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div">
                        {tile.children && tile.children.map(tileName => (
                            <ListItem button>
                                {tileName}
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            ]
        )
    }
}

const DrawerMenuItem = ({ tile, onTileClick, onDeleteTile, onDownloadTile, path, tileIndex }) => {
    if (typeof (tile) === typeof ({})  && !tile.url) {
        return <NestedMenuItem tile={tile} onTileClick={onTileClick} />
    }
    if (typeof(tile) === typeof({}) && tile.url){
        return <div>custom tile placeholder</div>
    }

    return (
        <ListItem
            className="drawer_menu_item_base"
            key={path}
            button
            onClick={() => {
                onTileClick(tile);
            }}
        >
            tile
        </ListItem>
    );
}

export default  DrawerMenuItem;