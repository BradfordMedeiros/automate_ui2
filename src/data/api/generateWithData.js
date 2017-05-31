import getWithPollingEvents from './polling/WithEvents';
import getWithStates from './polling/WithStates';
import getWithActions from './polling/WithActions';
import getWithSequences from './polling/WithSequences';
import getWithSystemInfo from './polling/WithSystemInfo';

import getWithMqtt from './pubsub/WithMqtt';
import getWithPubsubEvents from './pubsub/WithEvents';

const generateHooks = ({ automateUrl, mqttBroker }) => {
  const withDataHooks = {
    polling: {
      WithActions: getWithActions(automateUrl),
      WithStates: getWithStates(automateUrl),
      WithEvents: getWithPollingEvents(automateUrl),
      WithSequences: getWithSequences(automateUrl),
      WithSystemInfo: getWithSystemInfo(automateUrl),
    },
    pubsub: {
      WithMqtt: getWithMqtt(mqttBroker),
      WithEvents: getWithPubsubEvents(mqttBroker),
    },
  };
  return withDataHooks;
};

export default generateHooks;

