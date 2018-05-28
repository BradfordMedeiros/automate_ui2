import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import getWithMqtt from './getWithMqtt';

const getWithEvents = (automateUrl) => {
  const WithMqtt = getWithMqtt(automateUrl);
  const WithEvents = ({ children }) => (
    <WithMqtt topics={List(['events/#'])}>
      {(topics, publish, newTopic) => (
                children ?
                    children({ events: topics, newEvent: newTopic }) :
                    null
            )}
    </WithMqtt>
  );

  WithEvents.propTypes = {
    children: PropTypes.func,
  };

  return WithEvents;
};

export default getWithEvents;
