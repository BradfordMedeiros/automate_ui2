
import generateWithData from './api/generateWithData';

const getDataConfig = (isProduction) => {
  if (isProduction == true && window.location.protocol !== 'file:') { //eslint-disable-line
    return ({
      automateUrl: `${window.location.protocol}//${window.location.hostname}:9000`,
      mqttBroker: `${window.location.protocol}//${window.location.hostname}:4000`,
    });
  }
  return ({
    automateUrl: 'http://10.0.139.102:9000',
    mqttBroker: 'http://10.0.139.102:4000',
  });
};

export default generateWithData(getDataConfig(process.env.IS_PRODUCTION));

