import { fromJS } from 'immutable';
import { REHYDRATE } from 'redux-persist-immutable/constants';

const initialState = fromJS({
  content: undefined,
  layout: {},
  tileKeyToTileName: {},
  savedTileContent: {}, // maps key to content
  activeGrid: 'Home',
  grids: [],
  gridBackgroundUrl: 'https://i.ytimg.com/vi/lt0WQ8JzLz4/maxresdefault.jpg',
});

const getNextTile = (layouts) => {
  const nextIndexMaxes = layouts.map(layout => layout.reduce((answer, value) => answer > Number(value.i) ? answer : Number(value.i) + 1, 0));
  const nextIndex = nextIndexMaxes.size === 0 ? '0' : nextIndexMaxes.max();
  return (
    { w: 6, h: 4, x: 0, y: 0, i: String(nextIndex), moved: false, static: false }
  );
};

export const setBackground = gridBackgroundUrl => ({
  type: 'setBackground',
  gridBackgroundUrl,
});

export const setActiveGrid = gridNumber => ({
  type: 'setActiveGrid',
  gridNumber,
});

export const setContent = content => ({
  type: 'setContent',
  content,
});

export const saveContent = (tileKey, content) => ({
  type: 'saveContent',
  tileKey,
  content,
});

export const setLayout = (layout, gridNumber) => ({
  type: 'setLayout',
  gridNumber,
  layout,
});

export const addTile = (tileName, gridNumber) => ({
  type: 'addTile',
  gridNumber,
  tileName,
});

export const addGrid = gridName => ({
  type: 'addGrid',
  gridName,
});

const fixTile = (tile) => {
  return Object.keys(tile).reduce((ans, curr) => {
    if (tile[curr] === null) {
      ans[curr] = undefined;
    } else {
      ans[curr] = tile[curr];
    }
    return ans;
  }, { });
};

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE: {
       if (action.payload && action.payload.gridReducer) {
          const gridBackgroundUrl = action.payload.gridReducer.get('gridBackgroundUrl');
          const grids = action.payload.gridReducer.get('grids');
          const savedTileContent = action.payload.gridReducer.get('savedTileContent');
          const tileKeyToTileName = action.payload.gridReducer.get('tileKeyToTileName');

          const layouts = action.payload.gridReducer.get('layout');
          const fixedLayout = layouts.map(layout => layout.map(fixTile));

          return (
            state
            .set('grids', grids)
            .set('savedTileContent', savedTileContent)
            .set('tileKeyToTileName', tileKeyToTileName)
            .set('layout', fixedLayout)
            .set('gridBackgroundUrl', gridBackgroundUrl)
          );
      }
      return state;
    }
    case 'setBackground': {
      const {  gridBackgroundUrl } = action;
      return state.set('gridBackgroundUrl', gridBackgroundUrl);
    }
    case 'setActiveGrid': {
      const { gridNumber } = action;
      return state.set('activeGrid', gridNumber);
    }
    case 'setContent': {
      return state.set('content', action.content);
    }
    case 'saveContent': {
      const { tileKey, content } = action;
      return state.setIn(['savedTileContent', tileKey], content);
    }
    case 'setLayout': {
      const { layout, gridNumber } = action;
      return state.setIn(['layout', gridNumber], layout);
    }
    case 'addGrid': {
      const { gridName } = action;
      return state.set('grids', state.get('grids').push(gridName));
    }
    case 'addTile': {
      const { tileName, gridNumber } = action;
      const tile = getNextTile(state.get('layout'));
      const layout = (state.getIn(['layout', gridNumber]) || fromJS([])).push(tile);
      const tileKeyToTileName = state.get('tileKeyToTileName').set(tile.i, tileName);
      return state.setIn(['layout', gridNumber], layout).set('tileKeyToTileName', tileKeyToTileName);
    }
    default: {
      return state;
    }
  }
};

export default gridReducer;
