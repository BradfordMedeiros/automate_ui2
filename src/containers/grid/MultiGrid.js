import React from 'react';
import { List } from 'immutable';
import Grid from '../../components/grid/Grid';
import { connect } from 'react-redux';
import { tileNameToContent } from './tiles';
import { expandMenu } from '../module';
import { setContent, setLayout } from './module';

const TileToRender = ({ tileName, tileKey }) => tileNameToContent.get(tileName, tileKey);

const MultiGrid = ({ style, gridBackgroundUrl, activeGrid, onLayoutChange, ...otherProps }) => {
  if (gridBackgroundUrl) {
    return (
      <Grid
        style={{ ...style, background: `url(${gridBackgroundUrl})`, backgroundSize: '100% 100%' }}
        {...otherProps}
        onLayoutChange={(newLayout) => {
          onLayoutChange(newLayout, activeGrid);
        }}
      />
    );
  }
  return (
    <Grid
      style={style}
      {...otherProps}
      onLayoutChange={(newLayout) => {
        onLayoutChange(newLayout, activeGrid);
      }}
    />
  );
};


const mapStateToProps = state => ({
  activeGrid: state.getIn(['gridReducer', 'activeGrid']),
  isEditable: !state.getIn(['reducer', 'isLocked']),
  layout: state.getIn(['gridReducer', 'layout', state.getIn(['gridReducer', 'activeGrid'])]),
  tileKeyToTileName: state.getIn(['gridReducer', 'tileKeyToTileName']),
  gridBackgroundUrl: state.getIn(['gridReducer', 'gridBackgroundUrl']),
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

