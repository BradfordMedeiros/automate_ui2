import { fromJS } from 'immutable';


const DO_ACTION = 'do_action';
const CLEAR_ACTION = 'clear_action';

const initialState =  fromJS({
  action: undefined,
});

export const doAction = actionName => ({
  type: DO_ACTION,
  actionName,
});

export const clearAction = () => ({
  type: CLEAR_ACTION,
});

const reducer = (state = initialState, action) => {
  switch(action.type){
    case DO_ACTION: {
      return state.set('action', action.actionName);
    }
    case CLEAR_ACTION: {
      return state.set('action', undefined);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
