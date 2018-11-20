import fetch from 'isomorphic-fetch';

const getWithSequences = ({ AUTOMATE_CORE_URL }, { refresh }) => {
  const SEQUENCES_URL = `${AUTOMATE_CORE_URL}/sequences`;

  const getAllSequences = async () => {
    const response = await fetch(SEQUENCES_URL, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
    return await response.json();
  }
  const addSequence = async (sequenceName, actions) => {
    await fetch(`${SEQUENCES_URL}/modify/sequences/${sequenceName}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify({
        actions,
      }),
    });
  };
  const deleteSequence = async (sequenceName) => {
    await fetch(`${SEQUENCES_URL}/sequences/${sequenceName}`, {
      method: 'DELETE',
    });
  };
  const executeSequence = async (sequenceName) => {
    await fetch(`${SEQUENCES_URL}/${sequenceName}`, {
      method: 'POST',
    });
  };

  return {
    lifecycle: {
      getData: getAllSequences,
    },
    props: {
      addSequence,
      deleteSequence,
      executeSequence,
    }
  }
}

export default getWithSequences;