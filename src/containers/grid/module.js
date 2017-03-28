import { fromJS } from 'immutable';
import { REHYDRATE } from 'redux-persist-immutable/constants';


const initialState =  fromJS({
    menuExpanded: false,
    addGridExpanded: false,
    isLocked: true,
    content: undefined,
    layout: [],
    tileKeyToTileName: {},
    savedTileContent: {}, //maps key to content
    gridIsOpen: false,
    menuIsHidden: false,
});

const getNextTile = layout => {
    const nextIndex = layout.reduce((answer, value) =>  answer > Number(value.i) ? answer : Number(value.i) + 1, 0);
    return (
    {'w':6,'h':4,'x':0,'y':0,'i': String(nextIndex), 'moved':false,'static':false}
    );
};

export const setMenu = isOpen => {
    return ({
        type: 'set_menu',
    });
};

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

export const setGridIsOpen = isOpen => {
    return ({
        type : 'setGridIsOpen',
        isOpen,
    });
};

const fixTile = tile => {
    console.log('fixing tile ', tile);
    return Object.keys(tile).reduce((ans, curr) => {
        if (tile[curr] === null){
            ans[curr] = undefined;
        }else{
            ans[curr] = tile[curr];
        }
        return ans;
    }, { });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
    case REHYDRATE: {
        if (action.payload && action.payload.reducer) {
            const layout = action.payload.reducer.get('layout');
        //const tileKeyToTileName = action.payload.reducer.get('tileKeyToTileName');

            window.r  = action.payload.reducer;
            return action.payload.reducer.set('layout', layout.map(fixTile));
          //.set('tileKeyToTileName', action.payload.reducer.get('tileKeyToTileName'))
          //.set('savedTileContent', action.payload.reducer.get('savedTileContent'))
          //.set('content', action.payload.reducer.get('content'));
        }
        return state;
    }
    case 'set_menu': {
        return state.set('menuIsHidden', !state.get('menuIsHidden'));
    }
    case 'expandMenu': {
        return state.set('menuExpanded', action.isExpanded).set('isLocked', true);
    }
    case 'lockGrid': {
        return state.set('isLocked', action.isLocked);
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
        const tile = getNextTile(state.get('layout'));
        const layout = state.get('layout').push(tile);
        const tileKeyToTileName = state.get('tileKeyToTileName').set(tile.i, action.tileName);
        return state.set('layout', layout).set('tileKeyToTileName', tileKeyToTileName);
    }
    case 'setGridIsOpen': {
        if (action.isOpen === undefined){
            return state.set('gridIsOpen', !state.get('gridIsOpen'));
        }else{
            return state.set('gridIsOpen', action.isOpen);
        }
    }
    default: {
        return state;
    }
    }
};

export default reducer;
