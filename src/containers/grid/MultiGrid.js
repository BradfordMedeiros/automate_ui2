import React from 'react';
import { List } from 'immutable';
import Grid from '../../components/grid/Grid';
import { connect } from 'react-redux';
import { tileNameToContent } from './tiles';
import { expandMenu } from '../module';
import { setContent, setLayout } from './module';

const TileToRender = ({ tileName, tileKey }) => tileNameToContent.get(tileName, tileKey);

const MultiGrid = ({ activeGrid, onLayoutChange, ...otherProps }) => (
  <Grid
    {...otherProps}
    onLayoutChange={(newLayout) => {
      onLayoutChange(newLayout, activeGrid);
    }}
  />
  );


const mapStateToProps = state => ({
  activeGrid: state.getIn(['gridReducer', 'activeGrid']),
  isEditable: !state.getIn(['reducer', 'isLocked']),
  layout: state.getIn(['gridReducer', 'layout', state.getIn(['gridReducer', 'activeGrid'])]),
  tileKeyToTileName: state.getIn(['gridReducer', 'tileKeyToTileName']),
  isOpen: state.getIn(['reducer', 'gridIsOpen']),
});

const mapDispatchToProps = dispatch => ({
  onGridItemClick: (tileName, tileKey) => {
    dispatch(setContent(() => <TileToRender tileName={tileName} tileKey={tileKey} />));
    dispatch(expandMenu(true));
  },
  onLayoutChange: (layout, gridNumber) => {
    dispatch(setLayout(List(layout), gridNumber));
  },
});

export const container = connect(mapStateToProps, mapDispatchToProps)(MultiGrid);

