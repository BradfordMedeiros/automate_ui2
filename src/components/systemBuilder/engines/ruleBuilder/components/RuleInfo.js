import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';

class ScheduleInfo extends Component {
  constructor(nextProps){
    super(nextProps);
    this.state = {
      hasChanged: false,
      schedule: nextProps.schedule,
      topic: nextProps.topic,
      value: nextProps.value,
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.scheduleName !== this.props.scheduleName){
      console.log('schedule name changed');
      this.setState({
        schedule: nextProps.schedule,
        topic: nextProps.topic,
        value: nextProps.value,
        hasChanged: false,
      })
    }
  }
  render() {
    //const {topic, value, schedule, scheduleName, submitSchedule, deleteSchedule} = this.props;

    const { scheduleName, deleteSchedule } = this.props;
    return (
      <div style={{width: '100%'}}>
        <AxiomHeader
          deleteSequence={deleteSchedule}
          axiomName="Rule"
          axiomNameValue={scheduleName}
        />
        <div>some stuff goes in here</div>
      </div>
    );
  }
}

ScheduleInfo.propTypes = {
  schedule: PropTypes.string,
  scheduleName: PropTypes.string,
  topic: PropTypes.string,
  value: PropTypes.string,
  deleteSchedule: PropTypes.func,
  submitSchedule: PropTypes.func,
};

export default ScheduleInfo;
