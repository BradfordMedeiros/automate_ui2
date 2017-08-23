import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';
import ScheduleEditor from './components/ScheduleEditor/ScheduleEditor';

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
    const {topic, value, schedule, scheduleName, submitSchedule, deleteSchedule} = this.props;

    return (
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <AxiomHeader
          deleteSequence={deleteSchedule}
          axiomName="Schedule"
          axiomNameValue={scheduleName}
        />
        <div style={{ position: 'relative', height: 'calc(100% - 48px)' }}>
          <ScheduleEditor
            schedule={this.state.hasChanged ? this.state.schedule : schedule}
            topic={this.state.hasChanged ? this.state.topic: topic}
            onTopicChange={topic => {
              this.setState({
                topic,
                hasChanged: true,
              });
            }}
            value={this.state.hasChanged ? this.state.value: value}
            onValueChange={value => {
              this.setState({
                value,
                hasChanged: true,
              });
            }}
            onSubmitSchedule={() => {
              submitSchedule({
                schedule: this.state.schedule,
                topic: this.state.topic,
                value: this.state.value,
              });
              this.setState({
                hasChanged: false,
                topic: '',
                value: '',
              })
            }}
            onScheduleChange={schedule => {
              this.setState({
                schedule,
                hasChanged: true,
              });
            }}
          />
        </div>
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
