import fetch from 'isomorphic-fetch';

const getWithStates = ({ AUTOMATE_CORE_URL }) => {
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
      return { isConnected: true };
    }catch(e){
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
