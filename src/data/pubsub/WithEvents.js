import React, { PropTypes } from 'react';
import { List } from 'immutable';
import WithMqtt from './WithMqtt';

const WithEvents = ({ children }) => (
  <WithMqtt topics={List(['/event/#', 'event/#'])}>
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

export default WithEvents;
