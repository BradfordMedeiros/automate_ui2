
import generateWithData from './api/generateWithData';

const getDataConfig = isProduction => {
  if (isProduction == true && window.location.protocol !== 'file:'){
    return ({
      automateUrl: `${window.location.protocol}//${window.location.hostname}:9000`,
      mqttBroker:  `${window.location.protocol}//${window.location.hostname}:4000`,
    });
  }else{
    return ({
      automateUrl: 'http://127.0.0.1:9000',
      mqttBroker: 'http://127.0.0.1:4000',
    });
  }
};

console.error('is production: ', process.env.IS_PRODUCTION);

export default generateWithData(getDataConfig(process.env.IS_PRODUCTION));

