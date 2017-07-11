
import React, { Component, PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Subheader from 'material-ui/Subheader';

class TargetDate extends Component {
  state = {
    date: undefined,
    time: undefined,
  };
  render() {
    window.t = this;
    return (
      <div>
        <div>
          <Subheader>Date</Subheader>
          <DatePicker
            onChange={(_, date) => {
              this.setState({
                date,
              })
            }}
            style={{ paddingLeft: 28 }}
            hintText="Date of Event"
          />
        </div>
        <div>
          <Subheader>Time</Subheader>
          <TimePicker
            onChange={(_, time) => {
              this.setState({
                time
              })
            }}
            style={{ paddingLeft: 28 }}
            hintText="Time of Event"
          />
        </div>
      </div>
    )
  }
};

TargetDate.propTypes = {

};

export default TargetDate;