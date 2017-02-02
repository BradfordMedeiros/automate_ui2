
const initialState  = {

};

const mqtt = (state = initialState, action) => {
  window.state = state;
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
    default: {
      return state;
    }
  }
};