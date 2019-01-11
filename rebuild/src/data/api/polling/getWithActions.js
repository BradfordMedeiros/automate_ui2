import fetch from 'isomorphic-fetch';

const getWithActions = ({ AUTOMATE_CORE_URL }) => {
  const ACTIONS_URL = `${AUTOMATE_CORE_URL}/actions`;

  const getAllActions = async () => {
    const response = await fetch(ACTIONS_URL, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
    const actions = await response.json();
    return actions.actions;
  }

  return {
    refresh: 1000,
    lifecycle: {
      getData: getAllActions,
    },
    props: {}
  }
}

export default getWithActions;

