import { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

const REFRESH_RATE = 1000;

const getWithSchedules = (automateUrl) => {
  const SCHEDULES_URL = `${automateUrl}/schedules`;

  const deleteSchedule = async scheduleName => (
    fetch(`${SCHEDULES_URL}/${scheduleName}`, {
      method: 'DELETE',
    })
  );

  const addSchedule = async (scheduleName, schedule, topic, value) => {

    fetch(`${SCHEDULES_URL}/modify/schedules/${scheduleName}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),


      body: JSON.stringify({
        schedule,
        topic,
        value,
      }),
      method: 'POST',
    })
  };


  class WithConditions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasData: false,
      };
      this.handle = undefined;
    }
    componentWillMount() {
      this.getData();
      this.handle = setInterval(this.getData, REFRESH_RATE);
    }
    componentWillUnmount() {
      clearInterval(this.handle);
    }
    getData = async () => {
      try {
        const response = await fetch(SCHEDULES_URL, {
          mode: 'cors',
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        const schedules = await response.json();
        this.setState({
          hasData: true,
          schedules: schedules.schedules,
        });
      } catch (err) {
        // what to do?
      }
    }
    render() {
      const { children } = this.props;
      const { hasData, schedules } = this.state;
      return (hasData && children) ? children({ schedules, addSchedule, deleteSchedule }) : null;
    }
  }

  WithConditions.propTypes = {
    children: PropTypes.func,
  };

  return WithConditions;
};


export default getWithSchedules;

