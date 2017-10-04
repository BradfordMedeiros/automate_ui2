import React, { Component, PropTypes } from 'react';
import {  ListItem } from 'material-ui';


const DrawerMenuItem = ({ tile, onTileClick, path, tileIndex}) =>  {
  if (typeof (tile) === typeof ({})  && !tile.url) {
    return (
      <ListItem
        innerDivStyle={{  border: '1px solid rgb(20,20,20)' }}
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
  }else if (typeof(tile) === typeof({}) && tile.url){
    return (
      <ListItem
        style={{ paddingLeft: 28  }}
        hoverColor={'rgba(40,40,210,0.8)'}
        key={path}
        primaryText={tile.name}
        onClick={() => {
          onTileClick(tile, tile.url);
        }}
      />
    )
  }
  return (
    <ListItem
      style={{ paddingLeft: 28  }}
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
  path: PropTypes.string,
  tileIndex: PropTypes.string,
};

export default DrawerMenuItem;

