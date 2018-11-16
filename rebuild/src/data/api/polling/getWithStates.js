import fetch from 'isomorphic-fetch';

const getWithStates = ({ AUTOMATE_CORE_URL }) => {
  const STATES_URL = `${AUTOMATE_CORE_URL}/states`;

  const getAllStates = async () => {
    const response = await fetch(STATES_URL, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
    const states = await response.json();
    return states.states;
  }

  return {
    lifecycle: {
      getData: getAllStates,
    },
    props: {}
  }
}

export default getWithStates;
