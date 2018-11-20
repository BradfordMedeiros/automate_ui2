import fetch from 'isomorphic-fetch';

const getWithStates = ({ AUTOMATE_CORE_URL }, { setState, getState }, { onConnected, onDisconnected}) => {
  const STATUS_URL = `${AUTOMATE_CORE_URL}/status`;

  const getStatus = async () => {
    try {
      await fetch(STATUS_URL, {
        mode: 'cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        }
      });
      if (getState() !== 'connected'){
        onConnected();
      }
      setState('connected');
      return { isConnected: true };
    }catch(e){
      if (getState() !== 'disconnected'){
        onDisconnected();  
      }
      setState('disconnected');
      return { isConnected: false };
    }
  }
  return {
    refresh: 1000,
    lifecycle: {
      getData: getStatus,
    },
    props: {}
  }
}

export default getWithStates;
