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
  const addScript = async ({ name, fromTopic, toTopic, script }) => {
    assert(name !== undefined, "Name must be provided");
    assert(fromTopic !== undefined, "fromTopic must be provided");
    assert(toTopic !== undefined, "toTopic must be provided");
    assert(script !== undefined, "script must be defined");

    const response = await fetch(`${ACTIONSCRIPT_URL}/modify/${name}`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        topic: fromTopic,
        toTopic,
        script,
      }),
    });
    return response;
  }
  const deleteScript = async name => {
    assert(name !== undefined, "Name must be provided");
    const response = await fetch(`${ACTIONSCRIPT_URL}/${name}`, {
      method: 'DELETE',
    });
    return response;
  }

  return {
    refresh: 1000,
    lifecycle: {
      getData: getAllActionScripts,
    },
    props: {
      addScript,
      deleteScript,
    }
  }
}

export default getWithActionScripts;