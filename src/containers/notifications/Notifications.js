import React, { Component, PropTypes } from 'react';
import WithEvents from '../../data/pubsub/WithEvents';
import Alert from './Alert';

class Notifications extends Component {
  render() {
    const { text, popText } = this.props;
    return (
      <div>
        <WithEvents>
          {({ event }) => {
            console.log('got new event');
            return(
              <Alert
                message={event}
              />
            )
          }}
        </WithEvents>

      </div>
    );
  }
}

Notification.propTypes = {
  text: PropTypes.string,
  popText: PropTypes.func.isRequired,
};

export const container = Notifications; //eslint-disable-line


