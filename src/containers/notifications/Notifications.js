import React from 'react';
import WithEvents from '../../data/pubsub/WithEvents';
import Alert from './Alert';

const Notifications = () => (
  <div>
    <WithEvents>
      {({ events, newEvent }) => {
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

