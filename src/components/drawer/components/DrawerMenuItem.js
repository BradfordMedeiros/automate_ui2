import React, { Component, PropTypes } from 'react';
import {  ListItem } from 'material-ui';


const DrawerMenuItem = ({ tile, onTileClick, path, tileIndex}) =>  {
  if (typeof (tile) === typeof ({})) {
    return (
      <ListItem
        key={path}
        primaryText={tile.label}
        primaryTogglesNestedList
        nestedItems={!tile.children ? [] : tile.children.map((value, tileIndex) => (
          <DrawerMenuItem
            onTileClick={onTileClick}
            tile={value}
            tileIndex={tileIndex}
            path={`${path}/${tileIndex}`}
      />
          ))}
      />
    );
  }
  return (
    <ListItem
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
  path: PropTypes.string,
  tileIndex: PropTypes.string,
};

export default DrawerMenuItem;

