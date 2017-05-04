import { fromJS } from 'immutable';

const initialState = fromJS({
  menuExpanded: false,
  addGridExpanded: false,
  isLocked: true,
  gridIsOpen: false,
  menuIsHidden: false,
});


export const setMenu = isOpen => ({
  type: 'set_menu',
});

export const expandMenu = isExpanded => ({
  type: 'expandMenu',
  isExpanded,
});
export const expandAddGrid = isExpanded => ({
  type: 'expandAddGrid',
  isExpanded,
});

export const lock = isLocked => ({
  type: 'lockGrid',
  isLocked,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_menu': {
      return state.set('menuIsHidden', !state.get('menuIsHidden'));
    }
    case 'expandMenu': {
      return state.set('menuExpanded', action.isExpanded);
    }
    case 'lockGrid': {
      return state.set('isLocked', action.isLocked);
    }
    case 'expandAddGrid': {
      return state.set('addGridExpanded', action.isExpanded);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
