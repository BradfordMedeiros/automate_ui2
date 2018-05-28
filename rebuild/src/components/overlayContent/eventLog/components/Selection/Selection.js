import React from 'react';
import './style.css';

const Selection = ({ onShowLog, onShowAlert }) => (
  <div className="event_log_selection">
    <div
      className="event_log_selection_text"
      onClick={onShowLog}
    >
            log
    </div>
    <div
      className="event_log_selection_text"
      onClick={onShowAlert}
    >
            alert
    </div>
  </div>
);

export default Selection;
