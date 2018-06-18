import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Actions = ({ actions }) => (
    <div className="programming_actions_outer">
      {actions.map(action => (
          <div className="programming_action" >
            <div className="programming_action_topic">topic: {action.topic}</div>
            <div className="programming_action_value">value: {action.value}</div>
          </div>
      ))}
    </div>
);

Actions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object),
};

export default Actions;