import React from 'react';
import { List } from 'immutable';
import Grid from '../components/grid/Grid';
import { connect } from 'react-redux';
import { expandMenu, setContent, setLayout } from '../index.js';

const tileNameToTile = {
  a: <div style={{ width: '100%', height: '100%', background: 'red' }}>tile content a</div>,
  b: <div style={{ width: '100%', height: '100%', background: 'blue' }}>tile content b</div>,
  c: <div style={{ width: '100%', height: '100%', background: 'silver' }}>tile content c</div>,
  undefined: <div>no matching tile</div>
};

const TileToRender = ({tileName}) => {
  return tileNameToTile[tileName];
};

const mapStateToProps = (state) => ({
  isEditable: !state.get('isLocked'),
  layout: state.get('layout'),
});

const mapDispatchToProps = dispatch => ({
  onGridItemClick: tileName =>  {
    dispatch(setContent(<TileToRender tileName={tileName} />));
    dispatch(expandMenu(true));
  },
  onLayoutChange: layout => {
    dispatch(setLayout(List(layout)));
  }
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Grid);

