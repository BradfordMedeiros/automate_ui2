import generateWithDataComponent from './util/generateWithDataComponent';

import getWithPollingEvents from './polling/getWithEvents';
import getWithStates from './polling/getWithStates';
import getWithActions from './polling/getWithActions';
import getWithSequences from './polling/getWithSequences';
import getWithSystemInfo from './polling/getWithSystemInfo';
import getWithConditions from './polling/getWithConditions';
import getWithStatus from './polling/getWithStatus';
import getWithSchedules from './polling/getWithSchedules';
import getWithRules from './polling/getWithRules';
import getWithCustomTiles from './polling/getWithCustomTiles';
import getWithEnv from './polling/getWithEnv';
import getWithEmail from './polling/getWithEmail';
import getWithIsSystemLocked from './polling/getWithIsSystemLocked';
import getWithAccounts from './polling/getWithAccounts';
import getWithMyAccount from './polling/getWithMyAccount';

import getWithMqtt from './pubsub/getWithMqtt';
import getWithPubsubEvents from './pubsub/getWithEvents';

import getLoginWithToken from './requests/getLoginWithToken';
import getStyleSheet from './requests/getStyleSheet';

const generateWithData = ({ automateUrl, mqttBroker }) => {
  const withData = {
    polling: {
      WithActions: generateWithDataComponent(automateUrl, getWithActions),
      WithStates:  generateWithDataComponent(automateUrl, getWithStates),
      WithEvents: generateWithDataComponent(automateUrl, getWithPollingEvents),
      WithSequences: getWithSequences(automateUrl),
      WithSystemInfo: generateWithDataComponent(automateUrl, getWithSystemInfo),
      WithConditions: getWithConditions(automateUrl),
      WithSchedules: getWithSchedules(automateUrl),
      WithRules: getWithRules(automateUrl),
      WithStatus: getWithStatus(automateUrl),
      WithCustomTiles: getWithCustomTiles(automateUrl),
      WithEnv: generateWithDataComponent(automateUrl, getWithEnv),
      WithEmail: getWithEmail(automateUrl),
      WithIsSystemLocked: getWithIsSystemLocked(automateUrl),
      WithAccounts: generateWithDataComponent(automateUrl, getWithAccounts),
      WithMyAccount: generateWithDataComponent(automateUrl, getWithMyAccount),
    },
    pubsub: {
      WithMqtt: getWithMqtt(mqttBroker),
      WithEvents: getWithPubsubEvents(mqttBroker),
    },
    requests: {
      loginWithToken: getLoginWithToken(automateUrl),
      stylesheet: getStyleSheet(automateUrl),
    },
  };
  return withData;
};

export default generateWithData;

