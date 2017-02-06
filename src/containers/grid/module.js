import { fromJS } from 'immutable';

const initialState = fromJS({
  menuExpanded: false,
  addGridExpanded: false,
  isLocked: false,
  content: undefined,
  layout: [],
  tileKeyToTileName: {},

});

const getNextTile = layout => {
  const nextIndex = layout.reduce((answer, value) =>  answer > Number(value.i) ? answer : Number(value.i) + 1, 0);
  return (
    {"w":6,"h":4,"x":0,"y":0,"i": String(nextIndex), minW: 6, maxW: 6, minH: 4, maxH: 4, "moved":false,"static":false}
  );
}

export const setContent = content => {
  return ({
    type: 'setContent',
    content,
  });
};
export const setLayout = layout => {
  return ({
    type: 'setLayout',
    layout,
  });
};
export const expandMenu = isExpanded => {
  return ({
    type: 'expandMenu',
    isExpanded,
  });
};
export const expandAddGrid = isExpanded => {
  return ({
    type: 'expandAddGrid',
    isExpanded,
  });
};

export const lock = isLocked => {
  return ({
    type: 'lockGrid',
    isLocked,
  });
};

export const addTile = tileName => {
  return ({
    type: 'addTile',
    tileName,
  });
};


const reducer = (state = initialState, action) => {
  window.add= addTile;
  switch(action.type){
    case 'expandMenu': {
      return state.set('menuExpanded', action.isExpanded).set('isLocked', false);
    }
    case 'lockGrid': {
      return state.set('isLocked', false);  // making it so you cannot lock grid for now
    }
    case 'expandAddGrid': {
      return state.set('addGridExpanded', action.isExpanded);
    }
    case 'setContent': {
      return state.set('content', action.content);
    }
    case 'setLayout': {
      return state.set('layout', action.layout);
    }
    case 'addTile': {
      console.log('add tile called')
      const tile = getNextTile(state.get('layout'));
      const layout = state.get('layout').push(tile);
      const tileKeyToTileName = state.get('tileKeyToTileName').set(tile.i, action.tileName);
      return state.set('layout', layout).set('tileKeyToTileName', tileKeyToTileName);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
