import { fromJS } from 'immutable';

const savedContent = fromJS({"menuExpanded":false,"addGridExpanded":false,"isLocked":true,"layout":[{"w":8,"h":4,"x":15,"y":4,"i":"0","moved":false,"static":false},{"w":8,"h":4,"x":15,"y":0,"i":"1","moved":false,"static":false},{"w":3,"h":22,"x":7,"y":0,"i":"2","moved":false,"static":false},{"w":3,"h":22,"x":4,"y":0,"i":"3","moved":false,"static":false},{"w":3,"h":22,"x":1,"y":0,"i":"4","moved":false,"static":false}],"tileKeyToTileName":{"0":"mqtt","1":"mqtt","2":"dimmer","3":"dimmer","4":"dimmer"},"savedTileContent":{"0":"humidity","1":"sun","2":"humidity","3":"sun","4":"sun"},"content":{"key":null,"ref":null,"props":{"tileName":"dimmer","tileKey":"4"},"_owner":null,"_store":{}}});

const initialState = savedContent || fromJS({
  menuExpanded: false,
  addGridExpanded: false,
  isLocked: false,
  content: undefined,
  layout: [],
  tileKeyToTileName: {},
  savedTileContent: {}, //maps key to content

});

const getNextTile = layout => {
  const nextIndex = layout.reduce((answer, value) =>  answer > Number(value.i) ? answer : Number(value.i) + 1, 0);
  return (
    {"w":6,"h":4,"x":0,"y":0,"i": String(nextIndex), "moved":false,"static":false}
  );
}

export const setContent = content => {
  return ({
    type: 'setContent',
    content,
  });
};

export const saveContent = (tileKey, content) => {
  return ({
    type: 'saveContent',
    tileKey,
    content,
  })
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
  window.s  = state;
  switch(action.type){
    case 'expandMenu': {
      return state.set('menuExpanded', action.isExpanded).set('isLocked', true);
    }
    case 'lockGrid': {
      return state.set('isLocked', action.isLocked);  // making it so you cannot lock grid for now
    }
    case 'expandAddGrid': {
      return state.set('addGridExpanded', action.isExpanded);
    }
    case 'setContent': {
      return state.set('content', action.content);
    }
    case 'saveContent': {
      const { tileKey, content } = action;
      return state.setIn(['savedTileContent', tileKey], content);
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
