import fetch from 'isomorphic-fetch';

const getStates = async automate_url => {
  const response = await fetch(automate_url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const states = await response.json();
  return states;
};

export default getStates;

