import React from 'react';
import { List } from 'immutable';
import Grid from '../../components/grid/Grid';
import { connect } from 'react-redux';
import { expandMenu, setContent, setLayout } from './module';

import { tileNameToContent } from './tiles';


const TileToRender = ({tileName, tileKey}) =>  tileNameToContent.get(tileName, tileKey);

const mapStateToProps = (state) => ({
  isEditable: !state.getIn(['reducer','isLocked']),
  layout: state.getIn(['reducer', 'layout']),
  tileKeyToTileName: state.getIn(['reducer', 'tileKeyToTileName']),
});

const mapDispatchToProps = dispatch => {
  return ({
    onGridItemClick: (tileName, tileKey) =>  {
      console.log('tilename is : ', tileName);
      dispatch(setContent(<TileToRender tileName={tileName} tileKey={tileKey} />));
      dispatch(expandMenu(true));
    },
    onLayoutChange: layout => {
      dispatch(setLayout(List(layout)));
    }
  });
};

export const container = connect(mapStateToProps, mapDispatchToProps)(Grid);

