
import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import WithMqtt from './WithMqtt';

const WithEvents = ({ children }) => (
  <WithMqtt topics={List(['events'])}>
    {topics => children({ event: topics.events })}
  </WithMqtt>
);

WithEvents.propTypes = {
  children: PropTypes.func,
};

export default WithEvents;
