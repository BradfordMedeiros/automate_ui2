import fetch from 'isomorphic-fetch';

const getWithEnv = ({ AUTOMATE_CORE_URL }) => {
  const ENV_URL = `${AUTOMATE_CORE_URL}/env`;

  const getAllEnv = async () => {
    const response = await fetch(ENV_URL, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
    const env = await response.json();
    return env
  }

  const deleteEnv = async (token) => {
    const url = `${ENV_URL}/${token}`;
    const response = await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
    });
    return response;
  };

  const setEnv = async (token, value) => {
    const url = `${ENV_URL}/${token}/${value}`;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
    });
    return response;
  };

  return {
    lifecycle: {
      getData: getAllEnv,
    },
    props: {
      deleteEnv,
      setEnv,
    }
  }
}

export default getWithEnv;