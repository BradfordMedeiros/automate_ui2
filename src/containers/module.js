import { fromJS } from 'immutable';

const initialState = fromJS({
  menuIsHidden: false,
  menuExpanded: false,
  isLocked: true,
  isLoggedIn: false,
  drawerOpen: false,
});


export const setMenu = () => ({
  type: 'set_menu',
});

export const expandMenu = isExpanded => ({
  type: 'expandMenu',
  isExpanded,
});

export const lock = isLocked => ({
  type: 'lockGrid',
  isLocked,
});

export const setDrawerOpen = isOpen => ({
  type: 'drawerOpen',
  isOpen,
});

export const setLoggedIn = () => ({
  type: 'login',
});

export const setLoggedOut = () => ({
  type:  'logout',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login': {
     return state.set('isLoggedIn', true);
    }
    case 'logout': {
      return state.set('isLoggedIn', false);
    }
    case 'set_menu': {
      return state.set('menuIsHidden', !state.get('menuIsHidden')); // hides left main menu
    }
    case 'expandMenu': {
      return state.set('menuExpanded', action.isExpanded);  // the overlay
    }
    case 'lockGrid': {
      return state.set('isLocked', action.isLocked);  // determines if tiles can be moved
    }
    case 'drawerOpen': {
      if (action.drawerOpen === undefined){
        return state.set('drawerOpen', !state.get('drawerOpen'));
      }
      return state.set('drawerOpen', action.isOpen);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
