
import generateWithData from './api/generateWithData';

const getUrl = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const backendUrl = searchParams.get('url') ? searchParams.get('url') : '127.0.0.1';
    return backendUrl;
};

const getDataConfig = (isProduction) => {
  if (isProduction == true && window.location.protocol !== 'file:') { //eslint-disable-line
        return ({
            automateUrl: `${window.location.protocol}//${window.location.hostname}:9000`,
            mqttBroker: `${window.location.protocol}//${window.location.hostname}:4000`,
        });
    }

    const backendUrl = getUrl();

    return ({
        automateUrl: `http://${backendUrl}:9000`,
        mqttBroker: `http://${backendUrl}:4000`,
    });
};

export default () => generateWithData(getDataConfig(process.env.IS_PRODUCTION));

