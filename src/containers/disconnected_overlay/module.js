import { fromJS } from 'immutable';


const initialState =  fromJS({
    isConnected: true,
});

const SET_IS_CONNECTED = 'setIsConnected';
export const setIsConnected = () => ({
    type: SET_IS_CONNECTED,
});

const SET_IS_DISCONNECTED = 'setIsDisconnected';
export const setIsDisconnected = () => ({
    type: SET_IS_DISCONNECTED,
});


const connection = (state = initialState, action) => {
    switch(action.type){
    case SET_IS_CONNECTED: {
        return state.set('isConnected', true);
    }
    case SET_IS_DISCONNECTED: {
        return state.set('isConnected', false);
    }
    default: {
        return state;
    }
    }
};

export default connection;
