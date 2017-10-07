import React, { Component, PropTypes } from 'react';
import {  ListItem, IconButton} from 'material-ui';
import {  ActionDelete,FileFileDownload } from 'material-ui/svg-icons';


const DrawerMenuItem = ({
  tile,
  onTileClick,
  onDeleteTile,
  onDownloadTile,
  path,
  tileIndex
}) =>  {
  if (typeof (tile) === typeof ({})  && !tile.url) {   // labels, drop down to expand
    return (
      <ListItem
        innerDivStyle={{  border: '1px solid rgb(20,20,20)' }}
        key={path}
        primaryText={tile.label}
        primaryTogglesNestedList
        nestedItems={!tile.children ? [] : tile.children.map((value, tileIndex) => (
          <DrawerMenuItem
            onTileClick={onTileClick}
            onDeleteTile={onDeleteTile}
            onDownloadTile={onDownloadTile}
            tile={value}
            tileIndex={tileIndex}
            path={`${path}/${tileIndex}`}
          />
        ))}
      />
    );
  }else if (typeof(tile) === typeof({}) && tile.url){   // custom tiles
    return (
      <ListItem
        style={{ paddingLeft: 28 }}
        innerDivStyle={{ display: 'flex' }}
        hoverColor={'rgba(40,40,210,0.8)'}
        key={path}
        primaryText={(
          <div>
            {tile.name}
            <IconButton
              onClick={event => {
                event.stopPropagation();
                onDeleteTile(tile);
              }}
              style={{ position: 'absolute', right: 12, top: -2 }}
              hoveredStyle={{ background: 'black', border: 'blue' }}
            >
              <ActionDelete />
            </IconButton>
            <IconButton
              onClick={event => {
                event.stopPropagation();
                onDownloadTile(tile);
              }}
              style={{ position: 'absolute', right: 64, top: -2 }}
              hoveredStyle={{ background: 'black', border: 'blue' }}
            >
              <FileFileDownload  />
            </IconButton>
          </div>
        )}
        onClick={() => {
          onTileClick(tile, tile.url);
        }}
      />
    )
  }
  return (    // regular tiles
    <ListItem
      style={{ paddingLeft: 28 }}
      hoverColor={'rgba(40,40,210,0.8)'}
      key={path}
      primaryText={tile}
      onClick={() => {
        onTileClick(tile);
      }}
   />
  );
};

DrawerMenuItem.propTypes = {
  tile: PropTypes.object,
  onTileClick: PropTypes.func,
  onDeleteTile: PropTypes.func,   // only for custom tiles
  onDownloadTile: PropTypes.func, // only for custom tiles
  path: PropTypes.string,
  tileIndex: PropTypes.string,
};

export default DrawerMenuItem;

