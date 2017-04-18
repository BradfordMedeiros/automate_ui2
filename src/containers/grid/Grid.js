import React from 'react';
import { List } from 'immutable';
import Grid from '../../components/grid/Grid';
import { connect } from 'react-redux';
import { tileNameToContent } from './tiles';
import { expandMenu } from '../module';
import { setContent, setLayout } from './module';

const TileToRender = ({ tileName, tileKey }) => tileNameToContent.get(tileName, tileKey);

const mapStateToProps = state => ({
  isEditable: !state.getIn(['reducer', 'isLocked']),
  layout: state.getIn(['gridReducer', 'layout']),
  tileKeyToTileName: state.getIn(['gridReducer', 'tileKeyToTileName']),
  isOpen: state.getIn(['reducer', 'gridIsOpen']),
});

const mapDispatchToProps = dispatch => ({
  onGridItemClick: (tileName, tileKey) => {
    dispatch(setContent(() => <TileToRender tileName={tileName} tileKey={tileKey} />));
    dispatch(expandMenu(true));
  },
  onLayoutChange: (layout) => {
    dispatch(setLayout(List(layout)));
  },
});

export const container = connect(mapStateToProps, mapDispatchToProps)(Grid);

