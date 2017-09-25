
import generateWithData from './api/generateWithData';

const isUrl = url => {
  if (!url || url.length === 0){
    return false;
  }
  return true;
};
const getDataConfig = (isProduction) => {
  if (isProduction == true && window.location.protocol !== 'file:') { //eslint-disable-line
    return ({
      automateUrl: `${window.location.protocol}//${window.location.hostname}:9000`,
      mqttBroker: `${window.location.protocol}//${window.location.hostname}:4000`,
    });
  }

  const backendUrl  = isUrl(window.location.hash.substring(1)) ? window.location.hash.substring(1): '127.0.0.1' ;

  return ({
    automateUrl: `http://${backendUrl}:9000`,
    mqttBroker: `http://${backendUrl}:4000`,
  });
};

export default generateWithData(getDataConfig(process.env.IS_PRODUCTION));

