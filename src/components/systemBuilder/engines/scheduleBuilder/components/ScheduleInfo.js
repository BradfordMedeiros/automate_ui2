import React, { Component, PropTypes } from 'react';
import AxiomHeader from '../../../../axiomBuilder/AxiomHeader';
import ScheduleEditor from './components/ScheduleEditor/ScheduleEditor';

class ScheduleInfo extends Component {
  state = {
    schedule: '* * * * *',
    topic: '',
    value: '',
    hasChanged: false,
  };
  componentWillReceiveProps(nextProps){

    if (nextProps.scheduleName !== this.props.scheduleName){
      console.log('schedule name changed');
      this.setState({
        hasChanged: false,
      })
    }
  }
  render() {
    const {schedule, scheduleName, submitSchedule, deleteSchedule} = this.props;

    window.p = this.props;
    return (
      <div style={{width: '100%'}}>
        <AxiomHeader
          deleteSequence={deleteSchedule}
          axiomName="Schedule"
          axiomNameValue={scheduleName}
        />
        <ScheduleEditor
          schedule={this.state.hasChanged ? this.state.schedule : schedule}
          topic={this.state.topic}
          onTopicChange={topic => {
            this.setState({topic});
          }}
          value={this.state.value}
          onValueChange={value => {
            this.setState({value});
          }}
          onSubmitSchedule={() => {
            submitSchedule({
              schedule: this.state.schedule,
              topic: 'test topic',
              value: 'test value',
            });
            this.setState({
              hasChanged: false,
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
    );
  }
}

ScheduleInfo.propTypes = {
  schedule: PropTypes.string,
  scheduleName: PropTypes.string,
  deleteSchedule: PropTypes.func,
  submitSchedule: PropTypes.func,
};

export default ScheduleInfo;
