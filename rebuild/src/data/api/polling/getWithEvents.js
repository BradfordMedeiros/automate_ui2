import fetch from 'isomorphic-fetch';

const getWithEvents = ({ AUTOMATE_CORE_URL }) => {
  const EVENTS_URL = `${AUTOMATE_CORE_URL}/events`;

  const getAllEvents = async () => {
    const response = await fetch(EVENTS_URL, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
    const events = await response.json();
    return events
  }

  return {
    lifecycle: {
      getData: getAllEvents,
    },
    props: {}
  }
}

export default getWithEvents;
