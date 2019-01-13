import fetch from 'isomorphic-fetch';
import assert from 'assert';

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
      addScript: ({ name, fromTopic, toTopic, script }) => {
        assert(name !== undefined, "Name must be provided");
        assert(fromTopic !== undefined, "fromTopic must be provided");
        assert(toTopic !== undefined, "toTopic must be provided");
        assert(script !== undefined, "script must be defined");
        console.log('should add: ', name);
      },
      deleteScript: actionScriptName => {
        assert(actionScriptName !== undefined, "actionScriptName must be defined");
        console.log('should delete: ', actionScriptName);
      }
    }
  }
}

export default getWithActionScripts;