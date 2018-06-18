import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const States = ({ states }) => (
    <div className="programming_states_outer">
      {states.map(state => (
          <div className="programming_state" >
            <div className="programming_state_topic">topic: {state.topic}</div>
            <div className="programming_state_value">value: {state.value}</div>
          </div>
      ))}
    </div>
);

States.propTypes = {
  states: PropTypes.arrayOf(PropTypes.object),
};

export default States;