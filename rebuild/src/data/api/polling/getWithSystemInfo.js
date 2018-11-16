import fetch from 'isomorphic-fetch';

const getWithSystemInfo = ({ AUTOMATE_CORE_URL }) => {
  const SYSTEMINFO_URL = `${AUTOMATE_CORE_URL}/info`;

  const getSystemInfo = async () => {
    const response = await fetch(SYSTEMINFO_URL, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
    const systemInfo = await response.json();
    return systemInfo
  }
  return {
    lifecycle: {
      getData: getSystemInfo,
    },
    props: {}
  }
}

export default getWithSystemInfo;