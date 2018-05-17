import React from 'react';
import WithData from '../../data/WithData';
import Alert from './components/Alert';

const WithEvents = WithData.pubsub.WithEvents;

const Notifications = () => (
  <div>
    <WithEvents>
      {({ newEvent }) => {
        if (!newEvent) {
          return null;
        }
        return (
          <Alert
            topic={newEvent.topic}
            message={newEvent.message}
          />
        );
      }}
    </WithEvents>
  </div>
);

export const container = Notifications; //eslint-disable-line

