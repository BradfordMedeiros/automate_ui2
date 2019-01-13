import fetch from 'isomorphic-fetch';

const getWithActionScripts = ({ AUTOMATE_CORE_URL }, { refresh }) => {
  const ACTIONSCRIPT_URL = `${AUTOMATE_CORE_URL}/actionscripts`;

  const getAllActionScripts = async () => {
    const response = await fetch(ACTIONSCRIPT_URL, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
    return await response.json();
  }

  return {
    refresh: 1000,
    lifecycle: {
      getData: getAllActionScripts,
    },
    props: {
     
    }
  }
}

export default getWithActionScripts;